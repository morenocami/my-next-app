import { getGithubProfileFromName } from "@/services/github-profile-fetch";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CardInterface } from "./card";

interface FormProps {
  onSubmit: (card: CardInterface) => void;
}

export default ({ onSubmit }: FormProps) => {
  const [formInput, setFormInput] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
        placeholder="github profile name"
      />
      <button type="submit">Add profile</button>
    </form>
  );
};
