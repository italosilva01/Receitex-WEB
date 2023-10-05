import { Grid, Typography } from "@mui/joy";
import Saly from "../../../../assets/Saly-22.png";
import Onda from "../../../../assets/onda.svg";
import style from "./Content.module.css";

export const Content = () => {
  return (
    <Grid className={style.containerGrid}>
      <div className={style.containerText}>
        <Typography className={style.title}>
          Receitas Médicas Simples e Seguras
        </Typography>
      </div>
      <div className={style.containerImgs}>
        <img src={Onda} className={style.imgOnda} />

        <img src={Saly} className={style.imgSally} />
      </div>
    </Grid>
  );
};
