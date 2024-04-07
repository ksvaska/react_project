import WordList from "../WordList/wordlist";
import data from "../../data/data.json";
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import styles from './main.module.css';

function Main(){

    return(
        <>
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
             {data.map((item)=>{
      return(
        <WordList id = {item.id} category={item.tags} word={item.english} transcription={item.transcription} translation={item.russian} />
      )
    })}
       </TableBody>
                </Table>
            </TableContainer>
        </>
    )

}

export default Main