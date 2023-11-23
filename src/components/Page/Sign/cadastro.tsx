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

import { api } from "../../../Services/api";

const RegisterUserScheme = zod.object({
  firstname: zod.string().email(),
  lastname: zod.string(),
});

type RegisterUser = zod.infer<typeof RegisterUserScheme>;

function SignUp() {
  const { register, handleSubmit } = useForm();

  const registerUserMedic: SubmitHandler<RegisterUser> = async (
    e: RegisterUser
  ) => {
    console.log(e);

    const response = await api.medics.registerMedic({ ...e, role: "DOCTOR" });
    console.log(response);
  };
  const renderSignIn = () => {
    return redirect("/signin");
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
          <h2 className={styles["signup-title"]}>Criar conta</h2>
          <form method="POST" onSubmit={handleSubmit(registerUserMedic)}>
            <div className={styles["input-field"]}>
              <label htmlFor="email" className={styles["input-label"]}>
                Email:
              </label>
              <Input
                size="sm"
                className={styles["input"]}
                variant="soft"
                {...register("firstname", { required: true })}
              />
            </div>
            <div className={styles["input-field"]}>
              <label htmlFor="senha" className={styles["input-label"]}>
                Senha:
              </label>
              <Input
                size="sm"
                className={styles["input"]}
                variant="soft"
                {...register("lastname", { required: true })}
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
