import WordList from "./wordlist.jsx";
import data from "../data/data.json";
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
        <div>
             <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead className={styles.title}>
                        <TableRow>
                        <TableCell>id</TableCell>
                        <TableCell>category</TableCell>
                        <TableCell>word</TableCell>
                        <TableCell>transcription</TableCell>
                        <TableCell>translation</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className={styles.body}>
             {data.map((item)=>{
      return(
        <WordList id = {item.id} category={item.tags} word={item.english} transcription={item.transcription} translation={item.russian} />
      )
    })}
       </TableBody>
                </Table>
            </TableContainer>
        </div>
    )

}

export default Main