import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { FormControl, Grid, Skeleton } from "@mui/joy";
import Sheet from "@mui/joy/Sheet";
import Textarea from "@mui/joy/Textarea";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { FormatItalic, FormatBold, FormatUnderlined, InfoOutlined } from "@mui/icons-material";
import { forwardRef, useState } from "react";
import styles from "./Register.module.css";
import LabelInput from "./LabelInput";
import { NumericFormat, NumericFormatProps } from "react-number-format";
import { Controller, useForm } from "react-hook-form";
import { ICustomPropsReactNumer, IPrescriptionFormData, MarkdownTextType } from "./types";
import { api } from "../../Services/api";
import { useMutation, useQuery } from "react-query";
import { IPrescriptionCreateData } from "../../Services/urls/prescriptions/types";
import { useParams, redirect, useNavigate } from 'react-router-dom';


export const Patients = () => {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isLoading, data } = useQuery("patients", () =>
    api.patients.geAllFromDoctor(params.id ?? "")
  );

  const staticData = [
    { id: '4f6d11c7-82cf-4d6a-a0c3-56a1f79149d1', first_name: 'Fernanda', last_name: 'Gonçalves' },
    { id: '9bfb08e7-3ae2-4b8e-b5b5-24f346b30972', first_name: 'Michelle', last_name: 'Teixeira'},
    { id: 'a46d25c1-ec22-4d3b-b9a7-ec5ab3ac2df7', first_name: 'Marcosuel', last_name: 'Filho' },
    { id: '2b0e5fad-d282-4fc4-8c2e-fda4fe27a7b4', first_name: 'Italo', last_name: ''},
  ];

  const handleButtonClick = () => {
    // Lógica a ser executada quando o botão é clicado
    console.log(`Data retornado ${data}`);
    navigate(`/register`);
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
      
  return(
    <Box sx={{ flexGrow: 1 }}>
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
            Pacientes
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

      <Box sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper', margin: 'auto', marginTop: '0px'}}>
        <nav aria-label="main mailbox folders">
        <List>
      {isLoading && <p>Loading...</p>}
      {staticData.map((patient) => (
        <ListItem key={patient.id} disablePadding>
          <ListItem>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary={patient.first_name + " " + patient.last_name} />
            <ListItemButton 
              sx={{ bgcolor: '#1664c9', maxWidth: '130px'}}
              onClick={() => handleButtonClick()}
            >
              <ListItemText sx={{ color: 'background.paper', margin: 'auto'}} primary="Nova Receita" />
            </ListItemButton>
          </ListItem>
        </ListItem>
      ))}
    </List>   
        </nav>
      </Box>
    </Box>
  );
};