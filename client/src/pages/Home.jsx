import { useEffect } from "react";
import AxiosInstance from "../libs/axios";
import { useState } from "react";
import Note from "../components/Note";

const Home = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const fetchNotes = async () => {
      const res = await AxiosInstance.get("/notes");
      setNotes(res.data);
    };
    fetchNotes();
  }, []);

  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {notes?.map((note) => (
          <Note key={note._id} note={note} setNotes={setNotes}/>
        ))}
      </div>
    </div>
  );
};

export default Home;
