import receitexImg from "../../assets/Receitex.svg";
import LogoIMG from "../../assets/Vector.svg";
import style from "./Logo.module.css";

export const Logo = () => {
  return (
    <div className={style.container}>
      <img src={LogoIMG} />
      <img src={receitexImg} />
    </div>
  );
};
