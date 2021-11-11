import { useHistory } from "react-router";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage(props) {

    const history = useHistory();

    const addMeetupHandler = (meetupData) => {
        fetch('https://my-first-react-app-aafa2-default-rtdb.europe-west1.firebasedatabase.app/meetups.json', {
            method: 'POST',
            body: JSON.stringify(meetupData), // JSON.stringify Pflicht!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            history.replace('/')
        })
    }

  return (
    <section>
      <h1>New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
  );
}

export default NewMeetupPage;
