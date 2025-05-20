import Note from "../models/note.model.js";

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();

    res.status(200).json(notes);
  } catch (error) {
    console.error("Failed to get all notes", error.message);
    res.status(500).json({
      message: "Failed to get all notes",
      error,
    });
  }
};

export const createNote = async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(406).json({ message: "All field are required" });
  }

  try {
    const newNote = await Note.create({
      title,
      content,
    });

    res.status(201).json(newNote);
  } catch (error) {
    console.error("Failed to create new note", error.message);
    res.status(500).json({
      message: "Failed to create new note",
      error,
    });
  }
};

export const getNoteById = async (req, res) => {
  const id = req.params.id;
  try {
    const note = await Note.findById(id);

    res.status(200).json(note);
  } catch (error) {
    console.error("Failed to get note", error.message);
    res.status(500).json({
      message: "Failed to get note",
      error,
    });
  }
};

export const updateNote = async (req, res) => {
  const id = req.params.id;
  const { title, content } = req.body;

  try {
    const updateNote = await Note.findByIdAndUpdate(
      id,
      { title, content },
      { returnDocument: "after" }
    );

    res.status(200).json(updateNote);
  } catch (error) {
    console.error("Failed to update note", error.message);
    res.status(500).json({
      message: "Failed to update note",
      error,
    });
  }
};

export const deleteNote = async (req, res) => {
  const id = req.params.id;

  try {
    const deleteNote = await Note.findByIdAndDelete(id);

    res.status(200).json(deleteNote);
  } catch (error) {
    console.error("Failed to delete note", error.message);
    res.status(500).json({
      message: "Failed to delete note",
      error,
    });
  }
};
