import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import styles from './wordList.module.css'; 


function WordList({id,word,translation,category,transcription}){

    const [isVisible, setIsVisible] = useState(true);
    const [value, setValue] = useState('');

    const handleChange = (event)=>{
        setValue(event.target.value);
    }

    const editCard = () => {
        setIsVisible((prev) => !prev);
    };
    return(
        <>
        { isVisible ? (
        
           <TableRow className={styles.row}>
           <TableCell className={styles.cell}>{id}</TableCell>
            <TableCell  className={styles.cell}>{category}</TableCell>
            <TableCell  className={styles.cell}>{word}</TableCell>
            <TableCell  className={styles.cell}>{transcription}</TableCell>
            <TableCell  className={styles.cell}>{translation}</TableCell>
            <Fab className={styles.button} color="secondary" size="small" aria-label="edit" onClick={editCard}>
             <EditIcon />
            </Fab>
            <Fab className={styles.button} color="secondary" aria-label="delete" size="small">
            <DeleteIcon /></Fab>     
            </TableRow>
      
        ) : (
            <>
               <TableRow key={id} className={styles.inputRow}>
                    <TableCell className={styles.cell}>
                            <p>{id}</p>
                        </TableCell>
                        <TableCell className={styles.cell}>
                            <input className={styles.input} type="text" placeholder={category} ></input>
                        </TableCell>
                        <TableCell className={styles.cell}>
                            <input className={styles.input} type="text" placeholder={word} ></input>
                        </TableCell>
                        <TableCell className={styles.cell}>
                            <input className={styles.input} type="text" placeholder={transcription} ></input>
                        </TableCell>
                        <TableCell className={styles.cell}>
                            <input className={styles.input} type="text" placeholder={translation}></input>
                        </TableCell>
                            <Fab  className={styles.button} color="secondary" size="small" aria-label="save">
                                <CheckIcon />
                            </Fab>
                            <Fab  className={styles.button} color="secondary" size="small" aria-label="cancel" onClick={editCard}>
                                < CloseIcon />
                            </Fab>  
                    </TableRow>    
        </>
        )}
      </>
    );
}

export default WordList