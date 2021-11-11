import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";


function AllMeetupsPage(props) {
  const [isLoading, setLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setLoading(true)
    const meetupsPromise = fetch(
      "https://my-first-react-app-aafa2-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
    );
    meetupsPromise
      .then((response) => {
        setLoading(false);
        return response.json();
      })
      .then((data) => {
        const entries = [];
        for (let key in data) {
          const meetup = {
            id: key,
            ...data[key]
          } 
          entries.push(meetup);
        }
        setLoadedMeetups(entries);
      });
  
  }, []);

  
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
