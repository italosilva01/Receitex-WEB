import { Grid, Button, ButtonGroup, Box, IconButton } from "@mui/joy";
import Sheet from '@mui/joy/Sheet';
import Textarea from '@mui/joy/Textarea';
import Typography from '@mui/joy/Typography';
import {FormatItalic, FormatBold, FormatUnderlined} from '@mui/icons-material';

import { HeaderDefault } from "../../components/HeaderCreateAccount/HeaderDefault";

export const Register = () => {
  return (
    <Grid container direction="column">
      <HeaderDefault />
      <Sheet variant="solid" color="primary" sx={{width: "100vw", height: "5rem"}}>
      <Typography level="h3" sx={{ml: "20rem", mt:"1rem", color: '#ffffff'}}>Crie sua receita para</Typography>
      <Typography sx={{ml: "20rem", color: '#ffffff'}}>Rodolfo</Typography>
      </Sheet>
      <Grid container direction="row" justifyContent="space-between" alignItems="center" mt={10} mb={10}>
        <Grid ml="18rem">
            <Box sx={{ p: 1, backgroundColor: '#f9f9f9', borderRadius: '10px'}}>
                <ButtonGroup aria-label="outlined primary button group">
                <IconButton> <FormatBold/></IconButton>
                <Button><FormatItalic/></Button>
                <Button><FormatUnderlined/></Button>
                </ButtonGroup>
            </Box>
        </Grid >
        <Grid mr="18rem">
        <Button sx={{width: "20rem"}} onClick={function () {}}>Salvar</Button>
        </Grid>
      </Grid>
      <Textarea
        sx={{ borderRadius: '6px', ml:"auto", mr:"auto", mb: "10rem", height: '50rem', width:'80rem'}}
        defaultValue="Digite a receita neste campo"
      />
      
    </Grid>
  );
};