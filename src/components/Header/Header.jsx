import { NavLink } from "react-router-dom";

import clsx from "clsx";
import s from "./Header.module.css";
import Logo from "../Logo/Logo.jsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Header = () => {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <div className={s.logo_box}>
          <NavLink to="/" className={buildLinkClass}>
            <Logo />
          </NavLink>
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
    </header>
  );
};

export default Header;
