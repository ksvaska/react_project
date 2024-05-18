import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import styles from './inputAdd.module.css'
import { useState } from 'react';

function AddWord({onSubmitInWordlist}){
  const [english, setEnglish] = useState("");
  const [transcription, setTranscription] = useState("");
  const [russian, setRussian] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const newWord = { english, transcription, russian };
    // console.log(newWord);
    onSubmitInWordlist(newWord);
    setEnglish("");
    setTranscription("");
    setRussian("");
  };
    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <input className={styles.input} type="text" placeholder='english word' value={english}
        onChange={(event) => setEnglish(event.target.value)}/>
            <input type="text" className={styles.input} placeholder='translation' value={russian}
        onChange={(event) => setRussian(event.target.value)}/>
            <input type="text" className={styles.input} placeholder='transcription'  value={transcription}
        onChange={(event) => setTranscription(event.target.value)}/>
            <Fab className={styles.button} color="secondary" aria-label="add" size="small" type='submit' >
        <AddIcon />
      </Fab>
        </form>
    );
}

export default AddWord