import { createContext, useMemo, useState } from "react";
import "./App.css";
import { englishWords } from "./data/englishList";

export const VocabularyContext = createContext({
  vocabulary: [],
  setVocabulary: () => { }
})

function App() {
  const [vocabulary, setVocabulary] = useState(englishWords)
  const vocabularyContext = useMemo(() => ({ vocabulary, setVocabulary }), [vocabulary, setVocabulary])

  return (
    <VocabularyContext.Provider value={vocabularyContext}>

    </VocabularyContext.Provider>
  )
}

export default App;
