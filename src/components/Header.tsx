import { Link } from "react-router-dom";

const Header = () => {
  return (
    <ul className="header">
      <Link to={"/"}>Home</Link>
      <div className="header-options">
        <Link to={"/categories"}>Categorías</Link>
        <Link to={"/news"}>Anuncios</Link>
      </div>
    </ul>
  );
};

export default Header;
