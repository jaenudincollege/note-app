import { useEffect, useState } from "react";
import Card from "../components/Card.tsx";
import AxiosInstance from "../lib/axios.ts";

type Note = {
  _id: string;
  title: string;
  content: string;
  createdAt: string | Date;
  updatedAt: string | Date;
};

const NotesPage = () => {
  const [notes, setNotes] = useState<Note[] | null>([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const res = await AxiosInstance.get("/notes");
      const data = res.data;
      setNotes(data);
    };
    fetchNotes();
  }, []);

  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {notes?.map((note) => (
            <Card key={note._id} note={note} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotesPage;
