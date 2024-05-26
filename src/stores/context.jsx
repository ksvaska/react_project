import { makeAutoObservable, runInAction} from "mobx";


class WordsStore {
  words=[];
  error = null;
  constructor(){
    makeAutoObservable(this);
  }

  fetchWords = async () => {
    try {
    const response = await fetch("/api/words");
    const data = await response.json();
    this.words = data;
    } catch(e){
      runInAction(() => {
        this.error = e;
        console.error('Не удалось загрузить слова:', e);
      });
    } 
  };

  addWord = async (newWord) => {
    try{
    const response = await fetch("/api/words/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newWord),
    });
    const data = await response.json();
    this.words.push(data);
  } catch(e){
    runInAction(()=>{
    this.error = e;
    console.error("Не удалось добавить слов:", e);
    });
  } 
  };

  updateWord = async (updatedWord) => {
    try{
    const response = await fetch(`/api/words/${updatedWord.id}/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedWord),
    });
    const data = await response.json();
    this.words = this.words.map((word) =>
      word.id === updatedWord.id ? data : word
    );
  } catch(e){
    runInAction(()=>{ 
      this.error = e;
      console.error("Не удалось изменить слово:", e);
    });
  } 
  };

  deleteWord = async (id) => {
    try{
    await fetch(`/api/words/${id}/delete`, {
      method: "POST",
    });
    this.words = this.words.filter((word) => word.id !== id);
  } catch (e){
    runInAction(()=>{
      this.error = e;
      console.error("Не удалось удалить слово:", e);
    });  
  } 
};
}
const wordsStore = new WordsStore();

export default wordsStore;