import styles from './Card.module.css'

// props.children beinhält alle Werte zwischen den Card-Tags:
// <Card> CHILDREN </Card>

function Card(props) {
    return <div className={styles.card}>
        {props.children}
    </div>
}

export default Card;