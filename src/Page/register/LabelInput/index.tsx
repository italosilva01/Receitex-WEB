import Typography from "@mui/joy/Typography";
import styles from "./LabelInput.module.css";

interface ILabelProps {
  children: string;
}

const LabelInput = ({ children }: ILabelProps) => {
  return <Typography level="body-md" mb={1} className={styles.label}>{children}</Typography>;
};

export default LabelInput;
