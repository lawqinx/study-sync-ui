import axios from "axios";

export const getUserProjects = async (userId: number) => {
  return await axios.get(`http://localhost:3420/api/projects/${userId}`);
};

export const getProjectContents = async (projectId: number) => {
  return await axios.get(`http://localhost:3420/api/project/${projectId}`);
};
