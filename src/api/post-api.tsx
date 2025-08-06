import axios from "axios";

export const generateContents = async (
  files: File[],
  onProgress: (fileName: string, percent: number) => void,
  setIsLoading: (message: string) => void
) => {
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

  const projectId = await axios.post(
    "http://localhost:3420/api/generative/new",
    {
      filePath: filePath,
      project_name: "",
    }
  );

  const summary = await axios.post(
    "http://localhost:3420/api/generative/generateSummary",
    {
      project_id: projectId.data.project_id,
    }
  );

  console.log("Summary:", summary);

  const quizzes = await axios.post(
    "http://localhost:3420/api/generative/generateQuizzes",
    {
      project_id: projectId.data.project_id,
    }
  );

  console.log("Quizzes", quizzes);

  const flashCards = await axios.post(
    "http://localhost:3420/api/generative/generateFlashcards",
    {
      project_id: projectId.data.project_id,
    }
  );

  console.log("flashCards", flashCards);
};
