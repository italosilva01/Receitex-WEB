import { Grid } from "@mui/joy";
import styles from "./DocsAndPrescriptions.module.css";
import classNames from "classnames";
import { useQuery } from "react-query";
import { api } from "../../Services/api";
import { useState } from "react";
import { IDocs } from "./types";

function DocsAndPrescriptions() {
  const [docs, setDocs] = useState<IDocs[]>([
    {
      id: 0,
      titulo: "Teste",
      documentType: "receita",
      vencimento: "",
    },
  ]);
  const { isLoading, data } = useQuery(
    "prescription",
    () => api.prescriptions.getAll(),
    {
      onSuccess: (response) => {
        setDocs(response.data);
      },
    }
  );
  return (
    <Grid container direction="column" alignContent="center">
      <Grid alignItems="start" xs={12} md={8} mt={5}>
        <div className={styles.shellDocs}>
          {docs.map((doc) => (
            <div className={styles.cardDocs}>
              <h2>{doc.titulo}</h2>
              <span>Vencimento: {new Date(doc.vencimento).toLocaleDateString()}</span>
              <div
                className={classNames([
                  styles.pillTypeDocs,
                  doc.documentType == "receita" && styles.pillPrescription,
                  doc.documentType == "atestado" && styles.pillPrescriptionActive,
                ])}
              >
                <span>{doc.documentType}</span>
              </div>
            </div>
          ))}
        </div>
      </Grid>
    </Grid>
  );
}

export default DocsAndPrescriptions;
