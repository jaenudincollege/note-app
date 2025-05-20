import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import AxiosInstance from "../lib/axios";
import toast from "react-hot-toast";

type EditNoteModalProps = {
  noteId: string;
  currentTitle: string;
  currentContent: string;
  closeModal: () => void;
  updateNotes: (
    noteId: string,
    updatedData: { title: string; content: string }
  ) => void;
};

const EditNoteModal = ({
  noteId,
  currentTitle,
  currentContent,
  closeModal,
  updateNotes,
}: EditNoteModalProps) => {
  const [title, setTitle] = useState(currentTitle);
  const [content, setContent] = useState(currentContent);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("All fields are required");
      return;
    }

    try {
      await AxiosInstance.patch(`/notes/${noteId}`, { title, content });
      updateNotes(noteId, { title, content });
      toast.success("Note updated successfully");
      closeModal();
    } catch (error) {
      console.error(error);
      toast.error("Failed to update note");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg relative">
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>
        <h2 className="text-xl font-semibold mb-4">Edit Note</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input
            type="text"
            label="Title"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
          <Input
            type="textarea"
            label="Content"
            value={content}
            onChange={({ target }) => setContent(target.value)}
          />
          <Button type="submit">Save Changes</Button>
        </form>
      </div>
    </div>
  );
};

export default EditNoteModal;
