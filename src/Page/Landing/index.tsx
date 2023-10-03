import Grid from "@mui/joy/Grid";
import { HeaderCreateAccount } from "../../components/HeaderCreateAccount/HeaderCreateAccount";

export const Landing = () => {
  return (
    <Grid container sx={{ flexGrow: 1 }}>
      <HeaderCreateAccount />
    </Grid>
  );
};
