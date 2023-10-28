import { useCallback } from "react";
import styles from "./CardLandingPage.module.css";

interface IProps {
  title: string;
  icon: string;
  children: React.ReactNode;
}

function CardLandingPage({ title, icon, children }: IProps) {
  const generateBackground = useCallback(() => {
    return {
      backgroundImage: `url(${icon})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    };
  }, [icon]);

  return (
    <div className={styles.card}>
      <div className={styles.icon} style={generateBackground()}></div>
      <div className={styles.infosShell}>
        <h1>{title}</h1>
        <div className={styles.separator}></div>
        <span className={styles.description}>{children}</span>
      </div>
    </div>
  );
}

export default CardLandingPage;
