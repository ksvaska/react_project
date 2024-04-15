
import './App.css';
import Header from './component/Header/header';
import AddWord from './component/InputAdd/input_addword';
import Main from './component/Main/main.jsx';
import CardGallery from './component/Card/cardGallery';


function App() {
  return (
    <div className="App">
     <Header/>
     <AddWord/>
     <CardGallery/>
    <Main/>

    </div>
  );
}

export default App;
