import "./Button.css";
import { Link } from "react-router-dom";

export const Button = ({ text, to, type, size, onClick, color }) => {
  const cl = ["button", color, size];
  let content = (
    <Link className={cl.join(" ")} to={to}>
      {text}
    </Link>
  );

  if (type === "submit") {
    content = (
      <input
        className={cl.join(" ")}
        type="submit"
        value={text}
        onClick={() => onClick()}
      />
    );
  }
  return content;
};
