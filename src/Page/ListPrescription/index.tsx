import { useNavigate, useParams } from "react-router-dom";
import { styled, alpha } from '@mui/material/styles';
import { List, ListItem, ListItemButton } from "@mui/joy";
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
import { ListItemIcon, ListItemText } from "@mui/material";

export const ListPrescription = () => {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isLoading, data, status } = useQuery([], () =>
    api.prescriptions.getAllByPatientId(params.id ?? "")
  );

  const handleButtonClick = (id: string) => {
    // Lógica a ser executada quando o botão é clicado
    console.log(`Data retornado ${data?.data}`);
    navigate(`/prescription/${id}`);
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
           Receitas
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
      <Box sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper', margin: 'auto', marginTop: 'px'}}>
        <nav aria-label="main mailbox folders">
        <List>
          {isLoading && <p>Loanding...</p>}
          {status ==  "success"  && (
            <div>
              {data?.data?.map((prescription) => (
                <ListItem key={prescription.paciente_id}>
                  <ListItem>
                    <ListItemText primary={prescription.titulo} />
                    <ListItemButton 
                      sx={{ bgcolor: '#1664c9', maxWidth: '190px'}}
                      onClick={() => handleButtonClick(prescription.id)}
                    >
                      <ListItemText sx={{ color: 'background.paper', margin: 'auto'}} primary="Visualizar Receita" />
                    </ListItemButton>
                  </ListItem>
                </ListItem>))}
            </div>
          )}
        </List>   
        </nav>
      </Box>
    </Box>
  );
};
