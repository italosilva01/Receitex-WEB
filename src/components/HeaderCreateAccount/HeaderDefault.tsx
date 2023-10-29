import { Grid, Button } from "@mui/joy";
import { Logo } from "../Logo/Logo";
import styles from "./HeaderCreateAccount.module.css";

export const HeaderDefault = () => {
  return (
    <Grid container className={styles.container}>
      <Grid alignItems="center" className={styles.content}>
        <Logo />
      </Grid>
    </Grid>
  );
};
