import { Link } from "react-router";

const NoteNotFound = () => {
  return (
    <div className="text-center py-20 grid place-items-center h-[60vh]">
      <div>
        <p className="text-gray-500 mb-8">
          No notes found. Start by creating one!
        </p>
        <Link
          className="inline-block rounded border border-teal-600 bg-teal-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-teal-700"
          to="/createnote"
        >
          Create Note
        </Link>
      </div>
    </div>
  );
};

export default NoteNotFound;
