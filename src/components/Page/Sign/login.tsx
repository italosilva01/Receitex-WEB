import { useState } from "react";
import styles from "./SignUp.module.css";
import Input from "@mui/joy/Input";
import Card from "@mui/joy/Card";
import Button from "@mui/joy/Button";
import { redirect, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { api } from "../../../Services/api";
import zod from "zod";

import Grid from "@mui/joy/Grid";
import { useAuth } from "../../../contexts/AuthContext";

const LoginUserScheme = zod.object({
  user_name: zod.string().email(),
  password: zod.string(),
});

type LoginUser = zod.infer<typeof LoginUserScheme>;

function SignIn() {
  const navigate = useNavigate();
  const { decodeJWTAndGetUser } = useAuth();

  const [formData, setFormData] = useState({
    user_name: "",
    password: "",
  });

  const loginUser = async (e: LoginUser) => {
    console.log(e);
    const newData = { ...e };

    const response = await api.authLogin.loginUser({
      ...newData,
    });
    decodeJWTAndGetUser(response.data.token);
    console.log(response);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginUser(formData);
    navigate("/");
  };

  const renderSignUp = () => {
    return redirect("/signup");
  };

  return (
    <Grid container sx={{ flexGrow: 1 }}>
      <div className={styles["center-container"]}>
        <Card
          variant="solid"
          color="primary"
          invertedColors
          sx={{ minWidth: 343 }}
          className={styles["signup-container"]}
        >
          <h2 className={styles["signup-title"]}>Login</h2>
          <form method="POST" onSubmit={handleSubmit}>
            <div className={styles["input-field"]}>
              <label htmlFor="email" className={styles["input-label"]}>
                Email:
              </label>
              <Input
                size="sm"
                type="email"
                id="email"
                name="user_name"
                value={formData.user_name}
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
                name="password"
                value={formData.password}
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
                Login
              </Button>
              <Link to="/signup">
                <Button
                  variant="soft"
                  sx={{ width: "100%" }}
                  className={styles["button"]}
                  onClick={renderSignUp}
                >
                  Não tenho conta
                </Button>
              </Link>
            </div>
          </form>
        </Card>
      </div>
    </Grid>
  );
}

export default SignIn;
export type { LoginUser };
