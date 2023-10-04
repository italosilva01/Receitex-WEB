import Saly from "../../../../assets/Saly-22.png";
import Onda from "../../../../assets/onda.svg";
import style from "./ImageSally.module.css";
export const ImageSally = () => {
  return (
    <div className={style.containerImgs}>
      <img src={Onda} className={style.imgOnda} />

      <img src={Saly} className={style.imgSally} />
    </div>
  );
};
