import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import NoteDetail from "./pages/NoteDetail";
import Navbar from "./components/Navbar";
import CreateNote from "./pages/CreateNote";
import UpdateForm from "./pages/UpdateForm";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createnote" element={<CreateNote />} />
        <Route path="/update/:id" element={<UpdateForm />} />
        <Route path="/notes/:id" element={<NoteDetail />} />
      </Routes>
    </div>
  );
};

export default App;
