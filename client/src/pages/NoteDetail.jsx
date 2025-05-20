import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import AxiosInstance from "../libs/axios";

const NoteDetail = () => {
  const [note, setNote] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchNotes = async () => {
      const res = await AxiosInstance.get(`/notes/${id}`);
      setNote(res.data);
    };
    fetchNotes();
  }, [id]);

  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="border p-8" to={`/notes/${note._id}`}>
        <h1 className="text-xl font-bold mb-4">{note.title}</h1>
        <p>{note.content}</p>
      </div>
    </div>
  );
};

export default NoteDetail;
