import { NavLink } from "react-router-dom";

import clsx from "clsx";
import s from "./Header.module.css";
import Logo from "../Logo/Logo.jsx";
import Container from "../Container/Container.jsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <nav className={s.nav}>
          <div className={s.logo_box}>
            <Logo />
          </div>
          <div className={s.menu_box}>
            <NavLink to="/" className={buildLinkClass}>
              Home
            </NavLink>
            <NavLink to="/catalog" className={buildLinkClass}>
              Catalog
            </NavLink>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
