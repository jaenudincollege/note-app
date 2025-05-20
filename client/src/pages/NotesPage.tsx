import { useEffect, useState } from "react";
import Card from "../components/Card.tsx";
import AxiosInstance from "../lib/axios.ts";
import NoteNotFound from "../components/NoteNotFound.tsx";

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
      try {
        const res = await AxiosInstance.get("/notes");
        setNotes(res.data);
      } catch (error) {
        console.error("Failed to fetch notes", error);
      }
    };
    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {notes && notes.length > 0 && (
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold text-gray-800">Your Notes</h1>
            <p className="text-gray-500 mt-2">
              View and manage your saved notes below.
            </p>
          </div>
        )}

        {notes && notes.length > 0 ? (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {notes.map((note) => (
              <Card key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        ) : (
          <NoteNotFound />
        )}
      </div>
    </div>
  );
};

export default NotesPage;
