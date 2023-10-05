import { Grid, Button } from "@mui/joy";
import { Logo } from "../Logo/Logo";
import styles from "./HeaderCreateAccount.module.css";
import { useNavigate } from "react-router-dom";

export const HeaderCreateAccount = () => {
  const navigate = useNavigate();

  return (
    <Grid container className={styles.container}>
      <Grid item alignItems="center" className={styles.content}>
        <Logo />
        <Button
          onClick={() => {
            navigate("/signup");
          }}
        >
          Criar Conta
        </Button>
      </Grid>
    </Grid>
  );
};
