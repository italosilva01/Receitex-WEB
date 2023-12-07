import { Button, Grid } from "@mui/joy";
import { useNavigate } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import styles from "./HeaderCreateAccount.module.css";
import { useAuth } from "../../contexts/AuthContext";

export const HeaderDefault = () => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  const { user } = useAuth();

  const isToShowLoginButton = !["/signin", "/signup"].includes(currentPath) && !user;

  return (
    <Grid container className={styles.container}>
      <Grid alignItems="center" className={styles.content}>
        <div onClick={() => navigate("/")} className={styles.logo}>
          <Logo />
        </div>
      </Grid>
      {isToShowLoginButton ? (
        <Grid>
          <Button onClick={() => navigate("/signin")}>LOGIN</Button>
        </Grid>
      ) : (
        <Grid sx={{ padding: "0 37px" }}></Grid>
      )}
    </Grid>
  );
};
