import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-16">
        <Link to="/" className="text-xl font-semibold">
          Note app
        </Link>
        <ul className="flex items-center gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link
              to="/createnote"
              className="btn"
            >
              Create Note
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
