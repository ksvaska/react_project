import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import styles from './inputAdd.module.css'

function AddWord(){
    return(
        <div className={styles.form}>
            <input className={styles.input} type="text" placeholder='введи слово'/>
            <input type="text" className={styles.input} placeholder='перевод'/>
            <input type="text" className={styles.input} placeholder='транскрипция'/>
            <Fab className={styles.button} color="secondary" aria-label="add" size="small">
        <AddIcon />
      </Fab>
        </div>
    );
}

export default AddWord