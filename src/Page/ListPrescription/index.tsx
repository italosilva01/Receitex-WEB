import { useParams } from "react-router-dom";
import styles from "./ListPrescription.module.css";
import { Box, List, ListItem, ListItemButton } from "@mui/joy";
import { useQuery } from "react-query";
import { api } from "../../Services/api";
import { ListItemIcon, ListItemText } from "@mui/material";

export const ListPrescription = () => {
  const params = useParams<{ id: string }>();
  const { isLoading, data } = useQuery([], () =>
    api.prescriptions.getAllByPatientId(params.id ?? "")
  );

  return (
    <Box className={styles.container}>
      <Box sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper', margin: 'auto', marginTop: '30px'}}>
        <nav aria-label="main mailbox folders">
        <List>
          {isLoading && <p>Loanding...</p>}
          {status ==  "success"  && (
            <div>
              {data?.data?.map((prescription) => (
                <ListItem key={prescription.paciente_id}>
                  <p>{prescription.titulo}</p>
                </ListItem>))}
            </div>
          )}
        </List>   
        </nav>
      </Box>
    </Box>
  );
};
