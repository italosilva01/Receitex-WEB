import { Grid } from "@mui/joy";
import Typography from "@mui/material/Typography";
import styles from "./DocsAndPrescriptions.module.css";
import { useQuery } from "react-query";
import { api } from "../../Services/api";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

function DocsAndPrescriptions() {
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();
  const { isLoading, data } = useQuery(
    [],
    () => api.documents.getAllByPatientId(params.id ?? ""),
    {}
  );

  return (
    <Grid container direction="column" alignContent="center">
      <Typography
        variant="h4"
        noWrap
        component="div"
        sx={{ flexGrow: 1, display: { xs: "none", sm: "block" }, mt: 5 }}
      >
        Documentos
      </Typography>
      <Grid alignItems="start" xs={12} md={8} mt={5}>
        <div className={styles.shellDocs}>
          {isLoading && <p>Loanding...</p>}
          {data?.data.receitas.map((receita) => (
            <div
              className={styles.cardDocs}
              onClick={() => navigate(`/prescription/${receita.id}`)}
            >
              <h2>{receita.titulo}</h2>
              <span>Vencimento: {new Date(receita.vencimento).toLocaleDateString()}</span>
              <div className={classNames([styles.pillTypeDocs, styles.pillPrescription])}>
                <span>{"Receita"}</span>
              </div>
            </div>
          ))}
          {data?.data.atestados.map((atestado) => (
            <div
              className={styles.cardDocs}
              onClick={() => navigate(`/certificate/${atestado.id}`)}
            >
              <h2>{atestado.titulo}</h2>
              <span>Vencimento: {new Date(atestado.vencimento).toLocaleDateString()}</span>
              <div className={classNames([styles.pillTypeDocs, styles.pillCertificate])}>
                <span>{"Atestado"}</span>
              </div>
            </div>
          ))}
          {data?.data.requisicoes.map((requisicao) => (
            <div className={styles.cardDocs} onClick={() => navigate(`/request/${requisicao.id}`)}>
              <h2>{requisicao.titulo}</h2>
              <span>Emissão: {new Date(requisicao.emissao).toLocaleDateString()}</span>
              <div className={classNames([styles.pillTypeDocs, styles.pillRequest])}>
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
