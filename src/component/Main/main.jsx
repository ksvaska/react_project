import AddWord from '../InputAdd/input_addword'
import WordList from "../WordList/wordlist";
//import data from "../../data/data.json";
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import styles from './main.module.css';
import Context from '../../context/context';
import { useContext, useEffect } from 'react';

function Main(){

    const { words, fetchWords, addWord, updateWord, deleteWord } =
    useContext(Context);

    useEffect(() => {
        fetchWords();
      }, []);
      
      const handleAddWord = (newWord) => {
        addWord(newWord);
      };
      const handleUpdateWord = (updatedWord) => {
        updateWord(updatedWord);
      };
      const handleDeleteWord = (id) => {
        deleteWord(id);
      };
    

    return(
        <>
        <AddWord onSubmitInWordlist={handleAddWord}/>
             <TableContainer component={Paper}>
                <Table sx={{ maxWidth: 1300 }} aria-label="simple table" className={styles.table}>
                    <TableHead className={styles.title}>
                        <TableRow>
                        <TableCell  className={styles.cell}>id</TableCell>
                        <TableCell  className={styles.cell}>category</TableCell>
                        <TableCell  className={styles.cell}>word</TableCell>
                        <TableCell  className={styles.cell}>transcription</TableCell>
                        <TableCell  className={styles.cell}>translation</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
             {words.map((item)=>{
      return(
        <WordList id = {item.id} 
        category={item.tags} 
        word={item.english} 
        transcription={item.transcription} 
        translation={item.russian} 
        handleDeleteWord={handleDeleteWord}
        handleUpdateWord={handleUpdateWord}
        />
      )
    })}
       </TableBody>
                </Table>
            </TableContainer>
        </>
    )

}

export default Main