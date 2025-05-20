import { useState } from "react";
import toast from "react-hot-toast";
import AxiosInstance from "../libs/axios";
import { useNavigate } from "react-router";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("All field are required");
    }

    try {
      await AxiosInstance.post("/notes", { title, content });
      toast.success("Note created");
      setTitle("");
      setContent("");
      navigate("/");
    } catch (error) {
      toast.error("Failed to create note", error.message);
    }
  };

  return (
    <div className="max-w-7xl mx-auto my-20">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="outline py-4 px-10 rounded-md"
        />
        <textarea
          type="text"
          placeholder="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="outline h-32 py-4 px-10 rounded-md"
        />
        <button type="submit" className="btn">
          Create Note
        </button>
      </form>
    </div>
  );
};

export default CreateNote;
