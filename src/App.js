
import './App.css';
import Header from './component/Header/header';
import AddWord from './component/InputAdd/input_addword';
import Main from './component/Main/main.jsx';
import Card from './component/Card/wordcard';
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
