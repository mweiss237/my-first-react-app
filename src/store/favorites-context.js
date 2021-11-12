import { createContext, useEffect, useState } from "react";


const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([])

    function addFavoriteHandler(favoriteMeetup) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup)
        })
        fetch('https://my-first-react-app-aafa2-default-rtdb.europe-west1.firebasedatabase.app/favorites.json', {
            method: 'POST',
            body: JSON.stringify(favoriteMeetup), // JSON.stringify Pflicht!
            headers: {
                'Content-Type': 'application/json'
            }
        }).finally(() => getFavoritesHandler())

    }

    function removeFavoriteHandler(meetupId) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId)
        })
        const favoriteToDelete = userFavorites.find(favorite => favorite.id === meetupId)
        fetch(`https://my-first-react-app-aafa2-default-rtdb.europe-west1.firebasedatabase.app/favorites/${favoriteToDelete.favoriteId}.json`, {
            method: 'DELETE',
            // body: JSON.stringify({id: favoriteToDelete.favoriteId}), // JSON.stringify Pflicht!
            // headers: {
            //     'Content-Type': 'application/json'
            // }
        }).finally(() => getFavoritesHandler())
    }
    
    function getFavoritesHandler() {
        fetch('https://my-first-react-app-aafa2-default-rtdb.europe-west1.firebasedatabase.app/favorites.json', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            return response.json()
        }).then(favoritesJSON => {

            const favorites = [];
            for (let key in favoritesJSON) {
                const favorite = {
                    favoriteId: key,
                    ...favoritesJSON[key]
                } 
                favorites.push(favorite);
            }
            setUserFavorites(favorites)
        })
    }

    useEffect(() => {
        // Favoriten erstmalig vom Server laden
        getFavoritesHandler() 
    }, [])

    function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some(meetup => meetup.id === meetupId)
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    }

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}


export default FavoritesContext