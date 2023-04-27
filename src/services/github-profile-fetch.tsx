import axios from "axios";

export const getGithubProfileFromName = async (profileName: string) => {
  const response = await axios
    .get(`https://api.github.com/users/${profileName}`)
    .catch((error) => {
      console.error(error);
    });
  return response?.data;
};
