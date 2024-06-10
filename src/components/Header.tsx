import { Link } from "react-router-dom";

const Header = () => {
  return (
    <ul className="header">
      <Link to={"/"}>Home</Link>
      <Link to={"/categories"}>Categorías</Link>
    </ul>
  );
};

export default Header;
