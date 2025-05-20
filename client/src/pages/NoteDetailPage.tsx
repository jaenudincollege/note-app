import { useEffect, useState } from "react";
import AxiosInstance from "../lib/axios";
import { useParams } from "react-router";
import formatDate from "../lib/utils";

type Note = {
  _id: string;
  title: string;
  content: string;
  createdAt: Date | string;
  updatedAt: Date | string;
};

const NoteDetailPage = () => {
  const { id } = useParams<{ id: string }>(); // ✅ Explicit param typing
  const [note, setNote] = useState<Note | null>(null);

  useEffect(() => {
    if (!id) return; // ✅ guard clause

    const getNoteById = async () => {
      try {
        const res = await AxiosInstance.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.error("Failed to fetch note:", error);
      }
    };

    getNoteById();
  }, [id]);

  return (
    <article className="my-20">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 shadow-sm transition hover:shadow-lg overflow-hidden rounded-lg">
        <div className="bg-white p-10">
          <time
            dateTime={note?.createdAt?.toString()}
            className="block text-xs text-gray-500"
          >
            {formatDate(new Date(note?.createdAt || ""))}
          </time>

          <h3 className="mt-0.5 text-lg text-gray-900">{note?.title}</h3>

          <p className="mt-2 text-sm text-gray-600">{note?.content}</p>
        </div>
      </div>
    </article>
  );
};

export default NoteDetailPage;
