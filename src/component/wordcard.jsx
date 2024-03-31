import styles from './card.module.css';

function Card({word,translation,category,transcription}){
    return(
        <div className={styles.card}>
            <p>{category}</p>
            <p>{word}</p>
            <p>{transcription}</p>
            <p>{translation}</p>
        </div>
    )

}

export default Card