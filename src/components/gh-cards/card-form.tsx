import { getGithubProfileFromName } from "@/services/github-profile-fetch";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CardInterface } from "./card";
import Button from "@mui/material/Button";

interface FormProps {
  onSubmit: (card: CardInterface) => void;
}

export const Form = ({ onSubmit }: FormProps) => {
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
    <form
      onSubmit={handleSubmit}
      style={{ textAlign: "center", padding: "1rem" }}
    >
      <input
        value={formInput}
        onChange={(e) => setFormInput(e.target.value)}
        required
        type="text"
        placeholder="Enter a github profile name"
        style={{
          padding: "0.5rem",
          border: "none",
          borderBottom: "1px solid gray",
          width: "100%",
          marginBottom: "1rem",
          fontSize: "1rem",
          textAlign: "center",
        }}
      />
      <Button variant="contained" color="primary" type="submit">
        Add profile
      </Button>
    </form>
  );
};
