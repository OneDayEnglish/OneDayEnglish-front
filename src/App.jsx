import { createContext, useMemo, useState } from "react";
import "./App.css";
import { englishWords } from "./data/englishList";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Library from "./pages/Vocalbaries";
import Remind from "./pages/Remind";
import Setting from "./pages/Setting";

export const VocabularyContext = createContext({
  vocabulary: [],
  setVocabulary: () => { }
})

function App() {
  const [vocabulary, setVocabulary] = useState(englishWords)
  const vocabularyContext = useMemo(() => ({ vocabulary, setVocabulary }), [vocabulary, setVocabulary])

  return (
    <VocabularyContext.Provider value={vocabularyContext}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Library />} />
          <Route path="remind" element={<Remind />} />
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>
    </VocabularyContext.Provider>
  )
}

export default App;
