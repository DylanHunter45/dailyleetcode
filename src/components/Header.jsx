import "./Header.css";
import { IoHome } from "react-icons/io5";

function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <div className="nav-left">
          <a href="/">
            <IoHome size={30} />
          </a>
        </div>
        <div className="nav-center">
          <h1>Problem Forge</h1>
        </div>
        <div className="nav-right">
          <a href="/daily">Link 2</a>
          <a href="/random">Link 3</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
