import { Grid, Button, ButtonGroup, Box, IconButton } from "@mui/joy";
import Sheet from '@mui/joy/Sheet';
import Textarea from '@mui/joy/Textarea';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Typography from '@mui/joy/Typography';
import {FormatItalic, FormatBold, FormatUnderlined} from '@mui/icons-material';
import { useState } from 'react';

export const Register = () => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [tipoDocumento, setTipoDocumento] = useState('Receita');;

  const handleDocumentSelection = (event) => {
    setTipoDocumento(event.target.value);
  }

  const handleVencimento = (event) => {
    
  }

  
  

  const handleSave = async () => {

    const dataAtual = new Date();
    dataAtual.setUTCHours(dataAtual.getUTCHours() - 3);
    const emissao = dataAtual.toISOString();

    const data = {
      titulo,
      descricao,
      emissao,
      vencimento: '',
      nome_medico: '',
      nome_paciente: '',
    };

    try {
      const response = await fetch('http://localhost:8081/receita', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Receita criada com sucesso');
      } else {
        console.error('Erro ao criar a receita');
      }
    } catch (error) {
      console.error('Erro ao criar a receita:', error);
    }
  };


  return (
    <Grid container direction="column">
      <Sheet variant="solid" color="primary" sx={{width: "100vw", height: "5rem"}}>
      <Typography level="h3" sx={{ml: "20rem", mt:"1rem", color: '#ffffff'}}>Crie sua receita para</Typography>
      <Typography sx={{ml: "20rem", color: '#ffffff'}}>Rodolfo</Typography>
      </Sheet>
      <Grid container direction="row">
        <Grid ml="13rem">
          <Box style={{ width: '80%', borderRadius: '6px', padding: '10px', marginBottom: '10px', marginTop: '40px'}}
            sx={{ p: 1, backgroundColor: 'blue', borderRadius: '6px', color: 'white', textAlign: 'center' }}>
            Título
          </Box>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Digite o título aqui"
            style={{ width: '80%', borderRadius: '6px', padding: '10px', marginBottom: '10px' }}
          />
        </Grid>

        <Grid ml="5em">
          <Box color="primary" style={{ width: '100%', borderRadius: '6px', padding: '10px', marginBottom: '10px', marginTop: '40px' }}
            sx={{ p: 1, backgroundColor: 'blue', borderRadius: '6px', color: 'white', textAlign: 'center' }}>
            Tipo de Documento
          </Box>
          <Select defaultValue="receita" onChange={handleDocumentSelection}>
            <Option value="receita">Receita</Option>
            <Option value="requisicao">Requisição</Option>
            <Option value="atestado">Atestado</Option>  
          </Select>
        </Grid>

        <Grid ml="7em">
          <Box style={{ width: '80%', borderRadius: '6px', padding: '10px', marginBottom: '10px', marginTop: '40px' }}
            sx={{ p: 1, backgroundColor: 'blue', borderRadius: '6px', color: 'white', textAlign: 'center' }}>
            Vencimento
          </Box>
          <Grid container direction="row">
            <Grid>
              <input
                type="text"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="quantidade"
                style={{ width: '50%', borderRadius: '6px', padding: '10px', marginBottom: '10px' }}
              />
            </Grid>
            <Select defaultValue="dias" onChange={handleVencimento}>
              <Option value="dias">Dias</Option>
              <Option value="meses">Meses</Option>
              <Option value="anos">Anos</Option>  
            </Select>
          </Grid>
        </Grid>
      </Grid>

      <Grid container direction="row" justifyContent="space-between" alignItems="center" mt={10} mb={10}>
        <Grid ml="13rem">
            <Box sx={{ p: 1, backgroundColor: '#f9f9f9', borderRadius: '10px'}}>
                <ButtonGroup aria-label="outlined primary button group">
                <IconButton> <FormatBold/></IconButton>
                <Button><FormatItalic/></Button>
                <Button><FormatUnderlined/></Button>
                </ButtonGroup>
            </Box>
        </Grid >
        <Grid mr="18rem">
        <Button sx={{width: "20rem"}} onClick={handleSave}>Salvar</Button>
        </Grid>
      </Grid>
      <Textarea
        sx={{ borderRadius: '6px', ml:"auto", mr:"auto", mb: "10rem", height: '50rem', width:'80rem'}}
        defaultValue="Digite a receita neste campo"
        onChange={(e) => setDescricao(e.target.value)}
      />
      
    </Grid>
  );
};