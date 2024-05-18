import { createContext} from "react";

const Context = createContext({
  words: [],
  fetchWords: () => {},
  addWord: () => {},
  updateWord: () => {},
  deleteWord: () => {},
})

export default Context;