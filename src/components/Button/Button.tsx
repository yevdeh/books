import { PropsType } from "./Button.model";
import S from "./Button.module.css";

export const Button = ({ children, color, onClick }: PropsType) => {
  let modification = "";
  switch (color) {
    case "green":
      modification = S.ButtonGreen;
      break;
    case "red":
      modification = S.ButtonRed;
      break;
    case "yellow":
      modification = S.ButtonYellow;
      break;
    default:
      break;
  }
  return (
    <button className={`${S.Button} ${modification}`} onClick={onClick}>
      {children}
    </button>
  );
};
