import { Grid } from "@mui/joy";
import Typography from '@mui/material/Typography';
import styles from "./DocsAndPrescriptions.module.css";
import { useQuery } from "react-query";
import { api } from "../../Services/api";
import { useState } from "react";
import { useParams } from "react-router";
import { IDocumentsData } from "../../Services/urls/prescriptions/types";
import { useNavigate } from "react-router-dom";


function DocsAndPrescriptions() {
  const [docs, setDocs] = useState<IDocumentsData>();
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();
  const { isLoading, data } = useQuery(
    [],
    () => api.documents.getAllByPatientId(params.id ?? ""),
    {

      onSuccess: () => {
        console.log(data?.data.receitas)
        console.log(data?.data.atestados)
        console.log(data?.data.requisicoes)
      },
    }
  );
  return (
    <Grid container direction="column" alignContent="center">
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
      >
        Documentos
      </Typography>
      <Grid alignItems="start" xs={12} md={8} mt={5}>
        <div className={styles.shellDocs}>
          {isLoading && <p>Loanding...</p>}
          {data?.data.receitas.map((receita) => (
            <div className={styles.cardDocs} onClick={() => navigate(`/prescription/${receita.id}`)}>
              <h2>{receita.titulo}</h2>
              <span>Vencimento: {new Date(receita.vencimento).toLocaleDateString()}</span>
              <div className={styles.pillPrescription}>
                <span>{"Receita"}</span>
              </div>
            </div>
          ))}
          {data?.data.atestados.map((atestado) => (
            <div className={styles.cardDocs} onClick={() => navigate(`/certificate/${atestado.id}`)}>
              <h2>{atestado.titulo}</h2>
              <span>Vencimento: {new Date(atestado.vencimento).toLocaleDateString()}</span>
              <div className={styles.pillCertificate}>
                <span>{"Atestado"}</span>
              </div>
            </div>
          ))}
          {data?.data.requisicoes.map((requisicao) => (
            <div className={styles.cardDocs} onClick={() => navigate(`/request/${requisicao.id}`)}>
              <h2>{requisicao.titulo}</h2>
              <span>Emissão: {new Date(requisicao.emissao).toLocaleDateString()}</span>
              <div className={styles.pillRequest}>
                <span>{"Requisição"}</span>
              </div>
            </div>
          ))}
        </div>
      </Grid>
    </Grid>
  );
}

export default DocsAndPrescriptions;
