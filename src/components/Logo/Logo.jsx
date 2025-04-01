import { Link } from "react-router-dom";
import s from "./Logo.module.css";

const Logo = () => {
  return (
    <Link to="/" className={s.logo}>
      <span className={s.logo}>
        Rent<span className={s.decorate}>Car</span>
      </span>
    </Link>
  );
};

export default Logo;
