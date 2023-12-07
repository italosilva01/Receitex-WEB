import { Button, FormControl, Grid, Skeleton } from "@mui/joy";
import Sheet from "@mui/joy/Sheet";
import Textarea from "@mui/joy/Textarea";
import Typography from "@mui/joy/Typography";
import styles from "../Register/Register.module.css";
import stylesPrescription from "./Certificate.module.css";
import { useQuery } from "react-query";
import { api } from "../../Services/api";
import { useParams } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Add, KeyboardArrowRight } from "@mui/icons-material";

export const Certificate = () => {
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();
  const { isLoading, data } = useQuery("certificate", () =>
    api.certificates.getOne(params.id ?? "")
  );
  const {user} = useAuth();

  const handleButtonClick = (paciente_id: string) => {
    navigate(`/register/${paciente_id}`);
  };

  const backToList = () => {
    if(user.user_role == "doctor"){
      navigate(`/patients/${user.user_id}`);

    }else if(user.user_role == "patient"){
      navigate(`/docs/paciente/${user.user_id}`);
    }else{
      navigate("/");
    }
  
  };

  return (
    <Grid container direction="column">
      <Sheet variant="solid" color="primary">
        <Grid container component="div" className={styles.pacientInfos}>
          <Grid alignItems="start" xs={12} md={8}>
            <Typography level="h1">
              {isLoading ? (
                <Skeleton
                  variant="text"
                  level="h1"
                  width={300}
                  sx={{ backgroundColor: "primary" }}
                />
              ) : (
                data?.data?.titulo || ""
              )}
            </Typography>
            <Button sx={{alignSelf:"flex-end" }}
              endDecorator={<KeyboardArrowRight />} 
              variant="outlined"
              onClick={backToList}
            >
              Volte para listagem
            </Button>
          </Grid>
        </Grid>
      </Sheet>
    
      <Grid container justifyContent="center">
        <Grid xs={12} md={8} mt={4}>
          <FormControl>
            <Textarea
              value={"Médico: " + data?.data?.nome_medico + "                    " +
              "Paciente: " + data?.data?.nome_paciente + "\n\n" +
               data?.data?.descricao + "\n\n" + 
              "Emissão: " + (data?.data?.emissao ? new Date(data?.data?.emissao).toLocaleDateString() : "")  + "\n" +
              "Vencimento: " +  (data?.data?.emissao ? new Date(data?.data?.vencimento).toLocaleDateString() : "")
            }
              slotProps={{
                root: {
                  className: styles.textAreaRoot,
                },
              }}
              sx={{ outline: "none" }}
              readOnly
              size="lg"
              minRows={10}
              className={stylesPrescription.textArea}
            />
            {user.user_role == "doctor"? <Button startDecorator={<Add />} sx={{ bgcolor: '#1664c9', maxWidth: '130px', marginTop: 5, alignSelf:"flex-end"}}
                      onClick={() => handleButtonClick(data?.data.paciente_id)}>Adicione um novo atestado!</Button>:<></>}
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  );
};
