import styles from './card.module.css';
import { useState } from 'react';
import Button from '@mui/material/Button';

function Card({word,translation,category,transcription}){

    const [isVisible, setIsVisible] = useState(true);

    const handleChange =()=>{
        setIsVisible((prev) => !prev);
    }

    return(
        <div className={styles.card}>
            <p className={styles.category}>{category}</p>
            <p className={styles.word}>{word}</p>
            <p className={styles.transcription}>{transcription}</p>
           { isVisible ? <Button onClick={handleChange} color="secondary" variant="contained" className={styles.button}>Проверить</Button> : <p className={styles.translation}>{translation}</p>}      
        </div>
    )

}

export default Card