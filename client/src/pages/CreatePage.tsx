import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import toast from "react-hot-toast";
import AxiosInstance from "../lib/axios";
import { useNavigate } from "react-router";

const CreatePage = () => {
  const [title, setTitle] = useState<string | "">("");
  const [content, setContent] = useState<string | "">("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title?.trim() || !content?.trim()) {
      toast.error("All field are required");
    }

    try {
      await AxiosInstance.post("/notes", { title, content });
      toast.success("Create note success");
      navigate("/notes");
    } catch (error) {
      console.error(error);
      toast.error("Failed to create note");
    }
  };

  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 my-20">
        <h1 className="text-center text-4xl font-bold mb-40">
          Create new note
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input
            type="text"
            label="Title"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
          <Input
            type="textarea"
            label="Content"
            value={content}
            onChange={({ target }) => setContent(target.value)}
          />
          <Button type="submit">Create Note</Button>
        </form>
      </div>
    </div>
  );
};

export default CreatePage;
