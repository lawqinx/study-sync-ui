import axios from "axios";

export const generateContents = async (
  files: File[],
  onProgress: (fileName: string, percent: number) => void
) => {
  await Promise.all(
    files.map((file) => {
      const formData = new FormData();
      formData.append("file", file);

      return axios.post("https://httpbin.org/post", formData, {
        onUploadProgress: (event) => {
          const percent = Math.round((event.loaded / (event.total || 1)) * 100);
          onProgress(file.name, percent);
        },
      });
    })
  );
};
