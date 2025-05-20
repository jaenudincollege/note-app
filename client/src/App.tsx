import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/createnote" element={<CreatePage />} />
        <Route path="/note/:id" element={<CreatePage />} />
      </Routes>
    </div>
  );
};

export default App;
