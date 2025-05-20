import { Link, useNavigate } from "react-router";
import AxiosInstance from "../libs/axios";
import toast from "react-hot-toast";

const Note = ({ note, setNotes }) => {
  const navigate = useNavigate();

  const deleteNote = async (e) => {
    e.preventDefault();

    const sure = confirm("Are you sure, delete this note?");

    if (sure)
      try {
        await AxiosInstance.delete(`/notes/${note._id}`);
        setNotes((notes) => notes.filter((prev) => prev._id !== note._id));
        toast.success("Note deleted successfully");
      } catch (error) {
        console.error(error);
        toast.error(error.message);
      }
    else {
      return;
    }
  };

  const editNote = async (e, id) => {
    e.preventDefault();
    navigate(`/update/${id}`);
  };

  return (
    <Link className="border p-8 relative" to={`/notes/${note._id}`}>
      <div className="mb-10">
        <h1 className="text-xl font-bold mb-2 line-clamp-1">{note.title}</h1>
        <p className="line-clamp-4">{note.content}</p>
      </div>
      <div className="absolute bottom-3 right-3 space-x-2">
        <button
          className="py-2 px-4 bg-red-400 text-red-50 rounded-md cursor-pointer"
          onClick={deleteNote}
        >
          Delete
        </button>
        <button
          className="py-2 px-4 bg-blue-400 text-blue-50 rounded-md cursor-pointer"
          onClick={(e) => editNote(e, note._id)}
        >
          Edit
        </button>
      </div>
    </Link>
  );
};

export default Note;
