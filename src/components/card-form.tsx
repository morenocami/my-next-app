import { getGithubProfileFromName } from "@/services/github-profile-fetch";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default ({ onSubmit }) => {
  const [formInput, setFormInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCardData = await getGithubProfileFromName(formInput);
    if (newCardData) {
      onSubmit(newCardData);
      console.log(newCardData);
      setFormInput("");
    } else {
      toast.error(
        "Profile could not be retrieved. Check the name and try again",
        {
          position: toast.POSITION.BOTTOM_RIGHT,
        }
      );
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={formInput}
        onChange={(e) => setFormInput(e.target.value)}
        required
        type="text"
      />
      <button type="submit">Add github card</button>
    </form>
  );
};
