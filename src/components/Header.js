import "./Header.css";
import Nav from "./Nav";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="header-nav">
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
