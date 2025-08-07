import { Route, Routes } from "react-router-dom";
import FlashCardsPage from "./components/content-pages/flash-cards-page";
import QuizzesPage from "./components/content-pages/quizzes-page";
import SummaryPage from "./components/content-pages/summary-page";
import Dashboard from "./components/dashboard";
import NavBar from "./components/navbar";
import { ContentProvider } from "./components/content-context";
import UploadDashboard from "./components/upload-dashboard";

function App() {
  return (
    <ContentProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<UploadDashboard />} />
        <Route path="/project/:id" element={<Dashboard />} />
        <Route path="/flashcards" element={<FlashCardsPage />} />
        <Route path="/flashcards/:id" element={<FlashCardsPage />} />
        <Route path="/quizzes" element={<QuizzesPage />} />
        <Route path="/quizzes/:id" element={<QuizzesPage />} />
        <Route path="/summary" element={<SummaryPage />} />
        <Route path="/summary/:id" element={<SummaryPage />} />
      </Routes>
    </ContentProvider>
  );
}

export default App;
