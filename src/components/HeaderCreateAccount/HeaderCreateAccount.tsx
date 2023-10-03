import { Grid, Button } from "@mui/joy";
import { Logo } from "../Logo/Logo";
import styles from "./HeaderCreateAccount.module.css";

export const HeaderCreateAccount = () => {
  return (
    <Grid container className={styles.container}>
      <Grid item alignItems="center" className={styles.content}>
        <Logo />
        <Button onClick={function () {}}>Criar Conta</Button>
      </Grid>
    </Grid>
  );
};
