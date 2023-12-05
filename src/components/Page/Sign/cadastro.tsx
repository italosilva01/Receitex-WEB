// import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./SignUp.module.css";
import Input from "@mui/joy/Input";
import Card from "@mui/joy/Card";
import Button from "@mui/joy/Button";
import { redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import Grid from "@mui/joy/Grid";
import zod from "zod";
import { useNavigate, useParams } from "react-router-dom";

import { api } from "../../../Services/api";
import { Autocomplete } from "@mui/joy";

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

const optionsAutocompleteKeys = Object.keys(options);

type RegisterUser = zod.infer<typeof RegisterUserScheme>;

function SignUp() {
  const { register, handleSubmit } = useForm();

  const registerUserMedic: SubmitHandler<RegisterUser> = async (
    e: RegisterUser
  ) => {
    const newData = { ...e, role: String(options[`${e.role}`]) };

    const response = await api.medics.registerMedic({
      ...newData,
    });
    console.log(response);
    if(response != null){
      navigate(`/home/patient`);
    }
    
  };
  const renderSignIn = () => {
    return redirect("/signin");
  };

  const navigate = useNavigate();

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
        <Card
          variant="solid"
          color="primary"
          invertedColors
          sx={{ minWidth: 343 }}
          // className={styles["signup-container"]}
        >
          <h2 className={styles["signup-title"]}>Criar conta</h2>
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
