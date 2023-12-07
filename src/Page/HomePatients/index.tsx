import { useNavigate, useParams } from "react-router-dom";
import { styled, alpha } from '@mui/material/styles';
import { Button, List, ListItem, ListItemButton } from "@mui/joy";
import { useQuery } from "react-query";
import { api } from "../../Services/api";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Card from "@mui/joy/Card";
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/joy/CardContent';
import DescriptionIcon from '@mui/icons-material/Description';
import MedicationIcon from '@mui/icons-material/Medication';
import { Link } from "react-router-dom";
import Person2Icon from '@mui/icons-material/Person2';
import { useAuth } from "../../contexts/AuthContext";

export const HomePatients = () => {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { isLoading, data, status } = useQuery([], () =>
    api.prescriptions.getAllByPatientId(params.id ?? "")
  );

  const handleButtonClick = (id: string) => {
    // Lógica a ser executada quando o botão é clicado
    console.log(`Data retornado ${data?.data}`);
    navigate(`/docs/paciente/${user.user_id}`);
    //navigate(`/prescription/${id}`);
  }; 

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 'auto',
    margin: 'auto',
    width: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  

  return (
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
           Olá {user.user_name}!
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <Box
      sx={{
        width: '100%', 
        maxWidth: 2000, 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: 3,
        marginTop: '30px',
      }}
    >
      
      <Card variant="outlined">
      <CardActionArea onClick={() => handleButtonClick('verReceitas')}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <DescriptionIcon />
          <Typography level="title-md" sx={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Ver Receitas</Typography>
          <Typography sx={{ color: 'rgba(0, 0, 0, 0.6)' }}>Visualizar receitas, atestados e requisições.</Typography>
        </CardContent>
      </CardActionArea>
      </Card>
      
      
      
      
      <Card variant="outlined">
      <CardActionArea onClick={() => handleButtonClick('verReceitas')}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <Person2Icon />
          <Typography level="title-md" sx={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Ver Médicos</Typography>
          <Typography sx={{ color: 'rgba(0, 0, 0, 0.6)' }}>Lista de médicos com os quais você já se consultou.</Typography>
        </CardContent>
      </CardActionArea>
      </Card>
      

      <Card variant="outlined">
      <CardActionArea onClick={() => handleButtonClick('verReceitas')}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <MedicationIcon />
          <Typography level="title-md" sx={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Solicitar Receita</Typography>
          <Typography sx={{ color: 'rgba(0, 0, 0, 0.6)' }}>Solicite uma receita, atestado ou requisição</Typography>
        </CardContent>
        </CardActionArea>
      </Card>
      
      
      

    </Box>
    </Box>
  );
};
