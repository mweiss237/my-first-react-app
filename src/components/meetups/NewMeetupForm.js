import Card from "../ui/Card"
import styles from "./NewMeetupForm.module.css"

export default function NewMeetupForm(props) {

    return <Card>
        <form className={styles.form}>
            <div className={styles.control}>
                <label htmlFor="title">Meetup Title</label>
                <input type="text" required id="title" />
            </div>
            <div className={styles.control}>
                <label htmlFor="image">Meetup Image</label>
                <input type="url" required id="image" />
            </div>
            <div className={styles.control}>
                <label htmlFor="address">Meetup Address</label>
                <input type="text" required id="address" />
            </div>
            <div className={styles.control}>
                <label htmlFor="description">Meetup Description</label>
                <textarea required id="description" rows='5' />
            </div>
            <div className={styles.actions}>
                {/* Ein einzelner Button ohne type Attribut wird innerhalb einer Form automatisch als Submit Button erkannt. */}
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>

}