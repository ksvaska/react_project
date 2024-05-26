
import './App.css';
import Header from './component/Header/header';
import Main from './component/Main/main.jsx';
import CardGallery from './component/Card/cardGallery';
import {BrowserRouter as Router, Route,  Routes} from "react-router-dom";
import Error from './component/error404/error';
import { Provider } from 'mobx-react';
import wordsStore from './stores/context';


function App() {
  return (
    <Provider store={wordsStore}>   
    <Router>
    <div className="App">
     <Header/>
     <Routes>
      <Route path='/game' element={<CardGallery/>}/>
      <Route path='/' element ={<Main/>} />
      <Route path='*'element={<Error/>} />
    </Routes>
    </div>
    </Router> 
    </Provider>
  );
}

export default App;
