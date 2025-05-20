import { Link } from "react-router";
import formatDate from "../lib/utils";
import { Pencil, Trash } from "lucide-react";

type Note = {
  _id: string;
  title: string;
  content: string;
  createdAt: string | Date;
};

type CardProps = {
  note: Note;
};

const Card = ({ note: { _id, title, content, createdAt } }: CardProps) => {
  return (
    <article className="relative overflow-hidden rounded-lg shadow-md transition hover:shadow-lg bg-white border border-gray-100">
      <div className="absolute top-3 right-3 z-10 flex gap-2">
        <button
          className="p-1 rounded-full hover:bg-gray-100 transition"
          aria-label="Delete note"
        >
          <Trash className="w-4 h-4 text-red-600" />
        </button>
        <button
          className="p-1 rounded-full hover:bg-gray-100 transition"
          aria-label="Edit note"
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
  );
};

export default Card;
