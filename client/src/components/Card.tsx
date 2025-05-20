import { Link } from "react-router";
import formatDate from "../lib/utils";
import { Pencil, Trash } from "lucide-react";
import AxiosInstance from "../lib/axios";
import toast from "react-hot-toast";
import { useState } from "react";
import EditNoteModal from "./EditNoteModal";

type Note = {
  _id: string;
  title: string;
  content: string;
  createdAt: string | Date;
  updatedAt: string | Date;
};

type CardProps = {
  note: Note;
  setNotes: React.Dispatch<React.SetStateAction<Note[] | null>>;
};

const Card = ({
  note: { _id, title, content, createdAt },
  setNotes,
}: CardProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const deleteNote = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      await AxiosInstance.delete(`/notes/${_id}`);
      toast.success("Note deleted successfully");
      setNotes((prev) =>
        prev ? prev.filter((note) => note._id !== _id) : prev
      );
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete note");
    }
  };

  const updateNotes = (
    _id: string,
    updatedData: { title: string; content: string }
  ) => {
    setNotes((prev) =>
      prev
        ? prev.map((note) =>
            note._id === _id
              ? { ...note, ...updatedData, updatedAt: new Date() }
              : note
          )
        : prev
    );
  };

  return (
    <>
      {isEditing && (
        <EditNoteModal
          noteId={_id}
          currentTitle={title}
          currentContent={content}
          closeModal={() => setIsEditing(false)}
          updateNotes={updateNotes}
        />
      )}

      <article className="relative overflow-hidden rounded-lg shadow-md transition hover:shadow-lg bg-white border border-gray-100">
        <div className="absolute top-3 right-3 z-10 flex gap-2">
          <button
            className="p-1 rounded-full hover:bg-gray-100 transition"
            aria-label="Delete note"
            onClick={deleteNote}
          >
            <Trash className="w-4 h-4 text-red-600" />
          </button>
          <button
            className="p-1 rounded-full hover:bg-gray-100 transition"
            aria-label="Edit note"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsEditing(true);
            }}
          >
            <Pencil className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        <Link to={`/note/${_id}`} className="block p-6">
          <time className="block text-xs text-gray-400 mb-1">
            {formatDate(new Date(createdAt))}
          </time>

          <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">
            {title}
          </h3>

          <p className="text-sm text-gray-600 line-clamp-3">{content}</p>
        </Link>
      </article>
    </>
  );
};

export default Card;
