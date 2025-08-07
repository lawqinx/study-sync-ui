import axios from "axios";
import { FlashCard, Quiz, Summary } from "../components/content-context";

export const getUserProjects = async (userId: number) => {
  return await axios.get(`http://localhost:3420/api/projects/${userId}`);
};

export const getProjectContents = async (projectId: number) => {
  return await axios.get(`http://localhost:3420/api/project/${projectId}`);
};

export const getContents = async (
  projectId: number,
  setIsLoading: (message: string) => void,
  setIsContentGenerated: (done: boolean) => void,
  setSummaries: (summaries: Summary[]) => void,
  setQuizzes: (quizzes: Quiz[]) => void,
  setFlashCards: (flashCards: FlashCard[]) => void
) => {
  setIsLoading("Loading project . . .");

  const [summary, quizzes, flashCards] = await Promise.all([
    axios.get(`http://localhost:3420/api/summaries/${projectId}`),
    axios.get(`http://localhost:3420/api/quizsets/latest/${projectId}`),
    axios.get(`http://localhost:3420/api/flashcards/${projectId}`),
  ]);

  setSummaries(summary.data.content);
  setQuizzes(quizzes.data.questions);
  setFlashCards(flashCards.data.items);

  setIsLoading("");
  setIsContentGenerated(true);
};

export const getSummaries = async (
  projectId: number
) => {
  return await axios.get(`http://localhost:3420/api/summaries/${projectId}`)
};

export const getQuizzes = async (
  projectId: number
) => {
  return await axios.get(`http://localhost:3420/api/quizsets/latest/${projectId}`)
};

export const getFlashcards = async (
  projectId: number
) => {
  return await axios.get(`http://localhost:3420/api/flashcards/${projectId}`)
};