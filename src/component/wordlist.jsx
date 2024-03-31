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

    const editCard = () => {
        setIsVisible((prev) => !prev);
    };
    return(
        <>
        { isVisible ? (
        <div className={styles.row}>
           <TableRow>
           <TableCell className={styles.cell}>{id}</TableCell>
            <TableCell >{category}</TableCell>
            <TableCell >{word}</TableCell>
            <TableCell>{transcription}</TableCell>
            <TableCell>{translation}</TableCell>
            <Fab className={styles.button} color="secondary" size="small" aria-label="edit" onClick={editCard}>
             <EditIcon />
            </Fab>
            <Fab className={styles.button} color="secondary" aria-label="delete" size="small">
            <DeleteIcon /></Fab>     
            </TableRow>
        </div>
        ) : (
            <div>
               <TableRow key={id} >
                    <TableCell>
                            <p>{id}</p>
                        </TableCell>
                        <TableCell>
                            <input className={styles.input} type="text" placeholder={category}></input>
                        </TableCell>
                        <TableCell>
                            <input className={styles.input} type="text" placeholder={word}></input>
                        </TableCell>
                        <TableCell>
                            <input className={styles.input} type="text" placeholder={transcription}></input>
                        </TableCell>
                        <TableCell>
                            <input className={styles.input} type="text" placeholder={translation}></input>
                        </TableCell>
                        <td>
                            <Fab color="secondary" size="small" aria-label="save">
                                <CheckIcon />
                            </Fab>
                            <Fab  color="secondary" size="small" aria-label="cancel" onClick={editCard}>
                                < CloseIcon />
                            </Fab>
                        </td>
                    </TableRow>    
        </div>
        )}
      </>
    );
}

export default WordList