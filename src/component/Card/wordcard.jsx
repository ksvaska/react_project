import styles from './card.module.css';
import { useState } from 'react';
import Button from '@mui/material/Button';


function Card({word,translation,category,transcription,addToWord}){

    const [isVisible, setIsVisible] = useState(true);
    const [counted, setCounted] = useState(false);
   
    const handleChange =()=>{
        setIsVisible((prev) => !prev);
        if (!counted) {
        setCounted(true);
        addToWord();  
    }
}

    return(
        <div className={styles.card}>
            <p className={styles.category}>{category}</p>
            <p className={styles.word}>{word}</p>
            <p className={styles.transcription}>{transcription}</p>
           <Button onClick={handleChange}  color="secondary" variant="contained" className={styles.button}>  {isVisible ? `Проверить` : translation }</Button> 
        </div>
    )
}

export default Card