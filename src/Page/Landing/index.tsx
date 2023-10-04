import Grid from "@mui/joy/Grid";
import { HeaderCreateAccount } from "../../components/HeaderCreateAccount/HeaderCreateAccount";
import { Content } from "./components/Content/Content";

export const Landing = () => {
  return (
    <Grid container sx={{ flexGrow: 1 }}>
      <HeaderCreateAccount />

      <Content />
    </Grid>
  );
};
