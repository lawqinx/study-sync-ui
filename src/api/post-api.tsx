import axios from "axios";
import { FlashCard, Quiz, Summary } from "../components/content-context";

export const generateContents = async (
  files: File[],
  onProgress: (fileName: string, percent: number) => void,
  setIsLoading: (message: string) => void,
  setIsContentGenerated: (done: boolean) => void,
  setSummaries: (summaries: Summary[]) => void,
  setQuizzes: (quizzes: Quiz[]) => void,
  setFlashCards: (flashCards: FlashCard[]) => void
) => {
  setIsLoading("Uploading files . . .");

  const uploadedResponse = await Promise.all(
    files.map((file) => {
      const formData = new FormData();
      formData.append("files", file);

      return axios.post(
        "http://localhost:3420/api/generative/upload",
        formData,
        {
          onUploadProgress: (event) => {
            const percent = Math.round(
              (event.loaded / (event.total || 1)) * 100
            );
            onProgress(file.name, percent);
          },
        }
      );
    })
  );

  const filePath = uploadedResponse[0].data.savedPaths[0].replace(
    /\\/g,
    "\\\\"
  );

  setIsLoading("Creating project . . .");

  const projectId = await axios.post(
    "http://localhost:3420/api/generative/new",
    {
      filePath: filePath,
      project_name: "",
    }
  );

  const project_id = projectId.data.project_id;

  setIsLoading("Generating content . . .");

  const [summary, quizzes, flashCards] = await Promise.all([
    axios.post("http://localhost:3420/api/generative/generateSummary", {
      project_id,
    }),
    axios.post("http://localhost:3420/api/generative/generateQuizzes", {
      project_id,
    }),
    axios.post("http://localhost:3420/api/generative/generateFlashcards", {
      project_id,
    }),
  ]);

  setSummaries(summary.data.content);
  setQuizzes(quizzes.data.questions);
  setFlashCards(flashCards.data.items);

  setIsLoading("");
  setIsContentGenerated(true);
};
