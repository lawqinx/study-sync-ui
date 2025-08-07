import { createContext, ReactNode, useContext, useState } from "react";

export interface Summary {
  chapter: string;
  summary: string;
}

export interface Quiz {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export interface FlashCard {
  question: string;
  answer: string;
}

interface ContentContextType {
  summaries: Summary[];
  setSummaries: (summaries: Summary[]) => void;
  quizzes: Quiz[];
  setQuizzes: (quizzes: Quiz[]) => void;
  flashCards: FlashCard[];
  setFlashCards: (flashCards: FlashCard[]) => void;
}

export interface ContentProviderProps {
  children: ReactNode;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider = ({ children }: ContentProviderProps) => {
  const [summaries, setSummaries] = useState<Summary[]>([]);
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [flashCards, setFlashCards] = useState<FlashCard[]>([]);

  return (
    <ContentContext.Provider
      value={{
        summaries,
        setSummaries,
        quizzes,
        setQuizzes,
        flashCards,
        setFlashCards,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContentContext = () => {
  const context = useContext(ContentContext);

  if (!context) {
    throw new Error("useContent must be used within an ContentProvider");
  }

  return context;
};
