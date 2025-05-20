import toast from "react-hot-toast";
import AxiosInstance from "../libs/axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

const UpdateForm = () => {
  const { id } = useParams();

  const [note, setNote] = useState([]);
  const [title, setTitle] = useState(note?.title);
  const [content, setContent] = useState(note?.content);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("All field are required");
    }

    try {
      await AxiosInstance.patch(`/notes/${id}`, { title, content });
      toast.success("Note update");
      navigate("/");
    } catch (error) {
      toast.error("Failed to update note", error.message);
    }
  };

  useEffect(() => {
    const getNote = async () => {
      const res = await AxiosInstance.get(`/notes/${id}`);
      setNote(res.data);
      setTitle(res.data?.title);
      setContent(res.data?.content);
    };
    getNote();
  }, [id]);
  console.log(note);

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

export default UpdateForm;
