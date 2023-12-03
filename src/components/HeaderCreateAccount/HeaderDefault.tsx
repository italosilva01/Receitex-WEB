import { Grid } from "@mui/joy";
import { Logo } from "../Logo/Logo";
import styles from "./HeaderCreateAccount.module.css";

// const showHeaderDefault = ["/signin"];

export const HeaderDefault = () => {
  return (
    <Grid container className={styles.container}>
      <Grid alignItems="center" className={styles.content}>
        <Logo />
      </Grid>
    </Grid>
  );
};
