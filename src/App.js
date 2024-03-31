
import './App.css';
import Header from './component/header.jsx';
import AddWord from './component/input_addword.jsx';
import Main from './component/main.jsx';
import Card from './component/wordcard';
import data from './data/data.json';

function App() {
  return (
    <div className="App">
     <Header/>
     <AddWord/>
     {data.map((item)=>{
      return(
        <Card id = {item.id} category={item.tags} word={item.english} transcription={item.transcription} translation={item.russian}/>
      )
    })}
    <Main/>

    </div>
  );
}

export default App;
