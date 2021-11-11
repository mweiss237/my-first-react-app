import { useRef } from "react";
import Card from "../ui/Card"
import styles from "./NewMeetupForm.module.css"

export default function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();


    const submitHandler = (event) => {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
        
        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            desciption: enteredDescription
        }

        props.onAddMeetup(meetupData)
    }

    return <Card>
        <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles.control}>
                <label htmlFor="title">Meetup Title</label>
                <input type="text" required id="title" ref={titleInputRef} />
            </div>
            <div className={styles.control}>
                <label htmlFor="image">Meetup Image</label>
                <input type="url" required id="image" ref={imageInputRef} />
            </div>
            <div className={styles.control}>
                <label htmlFor="address">Meetup Address</label>
                <input type="text" required id="address" ref={addressInputRef} />
            </div>
            <div className={styles.control}>
                <label htmlFor="description">Meetup Description</label>
                <textarea required id="description" ref={descriptionInputRef} rows='5' />
            </div>
            <div className={styles.actions}>
                {/* Ein einzelner Button ohne type Attribut wird innerhalb einer Form automatisch als Submit Button erkannt. */}
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>
    

}