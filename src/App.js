
import './App.css';
import Header from './component/Header/header';
import Main from './component/Main/main.jsx';
import CardGallery from './component/Card/cardGallery';
import {BrowserRouter as Router, Route,  Routes} from "react-router-dom";
import Error from './component/error404/error';
import Context from './context/context';
import { useState } from 'react';



function App() {
  const [words, setWords] = useState([]);
  const fetchWords = async()=>{
    const response = await fetch(`/api/words`);
    const data = await response.json();
    setWords(data);
  }

  const addWord = async (newWord) => {
    const response = await fetch("/api/words/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newWord),
    });
    const data = await response.json();
    setWords((words) => [...words, data]);
  };

  const updateWord = async (updatedWord) => {
    const response = await fetch(`/api/words/${updatedWord.id}/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedWord),
    });
    const data = await response.json();
    setWords(words.map((word) => (word.id === updatedWord.id ? data : word)));
  };
  const deleteWord = async (id) => {
    await fetch(`/api/words/${id}/delete`, {
      method: "POST",
    });
    setWords(words.filter((word) => word.id !== id));
  };
  
  return (
    <Context.Provider
    value={{
      words: words,
      fetchWords: fetchWords,
      addWord,
      updateWord,
      deleteWord,
    }}>
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
    </Context.Provider>
  );
}

export default App;
