import { Button } from "@mui/joy";
import CardLandingPage from "./CardLandingPage";
import styles from "./LandingPage.module.css";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.contentLandingPage}>
        <div className={styles.left}>
          <h1>
            Receitas Médicas <br /> Simples e Seguras
          </h1>
          <div className={styles.cardsShell}>
            <CardLandingPage title="Médico" icon="src/assets/doctor.svg">
              Otimize suas prescrições, <br /> garantindo clareza e segurança.
            </CardLandingPage>
            <CardLandingPage title="Farmacêuticos" icon="src/assets/pill.svg">
              Receba prescrições digitais claras,
              <br /> agilizando o atendimento.
            </CardLandingPage>
            <CardLandingPage title="Paciente" icon="src/assets/woman.svg">
              Mantenha suas receitas ao alcance
              <br /> da mão, de forma digital e organizada.
            </CardLandingPage>
            <Button
              size="lg"
              onClick={() => {
                navigate("/signup");
              }}
            >
              CRIAR CONTA
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.responsiveFooter}></div>
    </div>
  );
}

export default LandingPage;
