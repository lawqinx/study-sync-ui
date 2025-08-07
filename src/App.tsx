import { Route, Routes } from "react-router-dom";
import FlashCardsPage from "./components/content-pages/flash-cards-page";
import QuizzesPage from "./components/content-pages/quizzes-page";
import SummaryPage from "./components/content-pages/summary-page";
import Dashboard from "./components/dashboard";
import NavBar from "./components/navbar";
import { ContentProvider } from "./components/content-context";

function App() {
  return (
    <ContentProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/flashcards" element={<FlashCardsPage />} />
        <Route path="/quizzes" element={<QuizzesPage />} />
        <Route path="/summary" element={<SummaryPage />} />
      </Routes>
    </ContentProvider>
  );
}

export default App;
