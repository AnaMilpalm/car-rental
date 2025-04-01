import { Link } from "react-router-dom";
import s from "./Button.module.css";
const Button = ({ children }) => {
  return (
    <>
      <Link to="/catalog" className={s.button}>
        {children}
      </Link>
    </>
  );
};

export default Button;
