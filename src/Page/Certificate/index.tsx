import { FormControl, Grid, Skeleton } from "@mui/joy";
import Sheet from "@mui/joy/Sheet";
import Textarea from "@mui/joy/Textarea";
import Typography from "@mui/joy/Typography";
import styles from "../Register/Register.module.css";
import stylesPrescription from "./Certificate.module.css";
import { useQuery } from "react-query";
import { api } from "../../Services/api";
import { useParams } from "react-router";

export const Certificate = () => {
  const params = useParams<{ id: string }>();
  const { isLoading, data } = useQuery("certificate", () =>
    api.certificates.getOne(params.id ?? "")
  );

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
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  );
};
