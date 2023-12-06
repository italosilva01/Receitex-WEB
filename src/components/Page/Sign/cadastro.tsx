import { useForm } from "react-hook-form";
import styles from "./SignUp.module.css";
import Input from "@mui/joy/Input";
import Card from "@mui/joy/Card";
import Button from "@mui/joy/Button";
import { redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import Grid from "@mui/joy/Grid";
import zod from "zod";

import { api } from "../../../Services/api";
import { Alert, Autocomplete, IconButton } from "@mui/joy";
import { useState } from "react";
import { Close } from "@mui/icons-material";

const RegisterUserScheme = zod.object({
  first_name: zod.string(),
  last_name: zod.string(),
  user_name: zod.string().email(),
  password: zod.string(),
  role: zod.string(),
});

const options = {
  doutor: "DOCTOR",
  farmaceutico: "PHARMACEUTICAL",
  paciente: "PATIENT",
} as const;

type SubmitHandler = (data: any) => Promise<void>;

const optionsAutocompleteKeys = Object.keys(options);

type RegisterUser = zod.infer<typeof RegisterUserScheme>;

function SignUp() {
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [showAlertError, setShowAlertError] = useState(false);

  const registerUserMedic: SubmitHandler = async (data: any) => {
    const typedData = data as RegisterUser;
    setIsLoading(true);

    const newData = { ...typedData, role: options[typedData.role as keyof typeof options] };

    api.medics
      .registerMedic({
        ...newData,
      })
      .then(() => {
        renderSignIn();
        setIsLoading(false);
      })
      .catch(() => {
        setShowAlertError(true);
        setIsLoading(false);
      });
  };

  const renderSignIn = () => {
    return redirect("/signin");
  };

  return (
    <Grid
      container
      sx={{ flexGrow: 1 }}
      alignItems="bottom"
      style={{
        marginTop: "50px",
      }}
    >
      <div className={styles["center-container"]}>
        <Card variant="solid" color="primary" invertedColors sx={{ minWidth: 343 }}>
          <h2 className={styles["signup-title"]}>Criar conta</h2>
          {showAlertError && (
            <Alert
              variant="soft"
              color="danger"
              endDecorator={
                <IconButton variant="soft" color="danger" onClick={() => setShowAlertError(false)}>
                  <Close />
                </IconButton>
              }
            >
              Ocorreu um erro ao criar a conta, tente novamente.
            </Alert>
          )}
          <form method="POST" onSubmit={handleSubmit(registerUserMedic)}>
            <div className={styles["input-field"]}>
              <label htmlFor="first_name" className={styles["input-label"]}>
                Primeiro nome:
              </label>
              <Input
                size="sm"
                className={styles["input"]}
                variant="soft"
                {...register("first_name", { required: true })}
              />
            </div>
            <div className={styles["input-field"]}>
              <label htmlFor="last_name" className={styles["input-label"]}>
                Segundo nome:
              </label>
              <Input
                size="sm"
                className={styles["input"]}
                variant="soft"
                {...register("last_name", { required: true })}
              />
            </div>
            <div className={styles["input-field"]}>
              <label htmlFor="email" className={styles["input-label"]}>
                Email:
              </label>
              <Input
                size="sm"
                className={styles["input"]}
                variant="soft"
                {...register("user_name", { required: true })}
              />
            </div>
            <div className={styles["input-field"]}>
              <label className={styles["input-label"]}>Você é:</label>
              <Autocomplete
                options={optionsAutocompleteKeys}
                slotProps={{
                  input: {
                    autoComplete: "new-password",
                  },
                }}
                {...register("role", { required: true })}
              />
            </div>
            <div className={styles["input-field"]}>
              <label htmlFor="password" className={styles["input-label"]}>
                Senha:
              </label>
              <Input
                size="sm"
                className={styles["input"]}
                variant="soft"
                {...register("password", { required: true })}
              />
            </div>
            <div className={styles["button-container"]}>
              <Button
                loading={isLoading}
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

export { SignUp };
export type { RegisterUser };
