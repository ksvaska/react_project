import React, { useState,useEffect } from 'react';
import Fab from '@mui/material/Fab';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import './wordList.css'; 
import useInput from '../../hooks/inputvalid';


function WordList({id,word,translation,category,transcription, handleUpdateWord, handleDeleteWord}){

    const [isVisible, setIsVisible] = useState(true);
    const{
        value: inputCategory,
        hasError: isCategoryInputInvalid,
        isValid: isCategoryValid,
        inputChangeHandler: categorylInputChangeHandler,
      styles: styleCategory,
    } = useInput((value)=>{
        return value !== "";
    });

    const{
        value: inputWord,
        hasError: isWordInputInvalid,
        isValid: isWordValid,
        inputChangeHandler: wordlInputChangeHandler,
        styles: styleWord,  
    } = useInput((value)=>{
        return value !== "";
    });

    const{
        value: inputTranscription,
        hasError: isTranscriptionInputInvalid,
        isValid: isTranscriptionValid,
        inputChangeHandler: transcriptionInputChangeHandler,
        styles: styleTranscription,  
    } = useInput((value)=>{
        return value !== "";
    });

    const{
        value: inputTranslation,
        hasError: isTranslationInputInvalid,
        isValid: isTranslationValid,
        inputChangeHandler: translationInputChangeHandler,
        styles: styleTranslation,
    } = useInput((value)=>{
        return value !== "";
    });

    let isDisabled = true;

    if( isCategoryValid && isWordValid && isTranscriptionValid && isTranslationValid){
        isDisabled = false;
    }

    const onSabmitHandler = (e) =>{
        e.preventDefault();
        console.log(inputCategory || category, inputWord || word,inputTranscription || transcription, inputTranslation || translation);
        editCard();
    }

    const editCard = () => {
        setIsVisible((prev) => !prev);
        handleUpdateWord(word)
    };
    return(
        <>
        { isVisible ? (
        
           <TableRow className='row'>
           <TableCell className='cell'>{id}</TableCell>
            <TableCell className='cell'>{category}</TableCell>
            <TableCell className='cell'>{word}</TableCell>
            <TableCell className='cell'>{transcription}</TableCell>
            <TableCell className='cell'>{translation}</TableCell>
            <Fab className='button' color="secondary" size="small" aria-label="edit" onClick={editCard}>
             <EditIcon />
            </Fab>
            <Fab className='button' color="secondary" aria-label="delete" size="small" onClick={() => handleDeleteWord(id)}>
            <DeleteIcon /></Fab>     
            </TableRow>
      
        ) : (
            <>
               <TableRow key={id} className='inputRow'>
                    <TableCell className='cell'>
                            <p>{id}</p>
                        </TableCell>
                        <TableCell className='cell'>
                            <input className={styleCategory}  type="text" defaultValue={category} value={inputCategory} onChange={categorylInputChangeHandler}></input>
                            {isCategoryInputInvalid &&  <span className="error">Введите категорию</span>}
                        </TableCell>
                        <TableCell className='cell'>
                            <input className={styleWord}  type="text" defaultValue={word} value={inputWord} onChange={wordlInputChangeHandler}></input>
                            {isWordInputInvalid &&  <span className="error">Введите слово</span>}
                        </TableCell>
                        <TableCell className='cell'>
                            <input className={styleTranscription}  type="text" defaultValue={transcription} value={inputTranscription} onChange={transcriptionInputChangeHandler}></input>
                            {isTranscriptionInputInvalid &&  <span className="error">Введите транскрипцию</span>}
                        </TableCell>
                        <TableCell className='cell'>
                            <input className={styleTranslation} type="text" defaultValue={translation} value={inputTranslation} onChange={translationInputChangeHandler}></input>
                            {isTranslationInputInvalid &&  <span className="error">Введите перевод</span>}
                        </TableCell>
                            <Fab  className='button' color="secondary" size="small" aria-label="save" disabled={isDisabled} onClick={onSabmitHandler}>
                                <CheckIcon />
                            </Fab>
                            <Fab  className='button' color="secondary" size="small" aria-label="cancel" onClick={editCard}>
                                < CloseIcon />
                            </Fab>  
                    </TableRow>    
        </>
        )}
      </>
    );
}

export default WordList