import { useState } from "react";
import styles from "./SignUp.module.css";
import Input from "@mui/joy/Input";
import Card from "@mui/joy/Card";
import Button from "@mui/joy/Button";
import { redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { HeaderCreateAccount } from "../../HeaderCreateAccount/HeaderCreateAccount";
import Grid from "@mui/joy/Grid";

function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    // e.preventDefault();
    console.log(e);
    navigate("/"); // Lógica para enviar os dados do formulário para o servidor ou realizar outras ações
  };

  const renderSignIn = () => {
    return redirect("/signin");
  };

  return (
    <Grid container sx={{ flexGrow: 1 }}>
      <HeaderCreateAccount />
      <div className={styles["center-container"]}>
        <Card
          variant="solid"
          color="primary"
          invertedColors
          sx={{ minWidth: 343 }}
          className={styles["signup-container"]}
        >
          <h2 className={styles["signup-title"]}>Criar conta</h2>
          <form method="POST" onSubmit={handleSubmit}>
            <div className={styles["input-field"]}>
              <label htmlFor="email" className={styles["input-label"]}>
                Email:
              </label>
              <Input
                size="sm"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles["input"]}
                variant="soft"
              />
            </div>
            <div className={styles["input-field"]}>
              <label htmlFor="senha" className={styles["input-label"]}>
                Senha:
              </label>
              <Input
                size="sm"
                type="password"
                id="senha"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                className={styles["input"]}
                variant="soft"
              />
            </div>
            <div className={styles["button-container"]}>
              <Button
                variant="solid"
                sx={{ margin: "0px 0px 5px 0px" }}
                className={styles["button"]}
                type="submit"
              >
                Criar conta
              </Button>
              <Link to="/signin">
                <Button
                  variant="soft"
                  sx={{ width: "100%" }}
                  className={styles["button"]}
                  onClick={renderSignIn}
                >
                  Já tenho uma conta
                </Button>
              </Link>
            </div>
          </form>
        </Card>
      </div>
    </Grid>
  );
}

export default SignUp;
