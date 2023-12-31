import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  Input,
  ToggleButtonGroup,
} from "@mui/joy";
import Sheet from "@mui/joy/Sheet";
import Textarea from "@mui/joy/Textarea";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Typography from "@mui/joy/Typography";
import {
  FormatItalic,
  FormatBold,
  FormatUnderlined,
  InfoOutlined,
} from "@mui/icons-material";
import { forwardRef, useState } from "react";
import styles from "./Register.module.css";
import LabelInput from "./LabelInput";
import { NumericFormat, NumericFormatProps } from "react-number-format";
import { Controller, useForm } from "react-hook-form";
import {
  ICustomPropsReactNumer,
  IPrescriptionFormData,
  MarkdownTextType,
} from "./types";
import { api } from "../../Services/api";
import { useMutation } from "react-query";
import { IPrescriptionCreateData, IRequestCreateData, ICertificateCreateData } from "../../Services/urls/prescriptions/types";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const NumericFormatAdapter = forwardRef<
  NumericFormatProps,
  ICustomPropsReactNumer
>(function NumericFormatAdapter(props, ref) {
  const { onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      valueIsNumericString
    />
  );
});

export const Register = () => {
  const [textType, setTextType] = useState<MarkdownTextType>("default");
  const navigate = useNavigate();
  const { user } = useAuth();
  const params = useParams<{ patient_id: string }>();

  const {isLoading, status, data} = useQuery([], () =>
    api.patients.getOne(params.patient_id ?? "")
  );

  const {
    register,
    watch,
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IPrescriptionFormData>({
    defaultValues: {
      title: "",
      documentType: "receita",
      description: "",
      typeValidUntil: "dias",
      valueValidUntil: "",
    },
  });

  const parseToIntValueOfValidUntil = () => {
    const typeValidUntil = watch("typeValidUntil");
    const valueValidUntil = watch("valueValidUntil");
    if (typeValidUntil == "Meses") {
      return parseInt(valueValidUntil) * 30;
    } else if (typeValidUntil == "Anos") {
      return parseInt(valueValidUntil) * 365;
    } else {
      return parseInt(valueValidUntil);
    }
  };

  const getValidUntilDateAsString = () => {
    const validUntilParsed = parseToIntValueOfValidUntil();
    const validUntilDate = new Date();
    validUntilDate.setDate(validUntilDate.getDate() + validUntilParsed);
    return validUntilDate.toISOString();
  };

  const prescriptionMutation = useMutation(
    
    (data: IPrescriptionCreateData) => {
      return api.prescriptions.create(data);
    },
    {
      onSuccess: (data) => {
        reset();
        console.log("Receita criada com sucesso");
        console.log(data);
        navigate(`/prescription/${data.data.id}`);
      },
      onError: (error) => {
        console.log("Erro ao criar receita");
        console.log(error);
      },
    }
  );

  const certificateMutation = useMutation(
    (data: ICertificateCreateData) => {
      return api.certificates.create(data);
    },
    {
      onSuccess: (data) => {
        reset();
        console.log("Receita criada com sucesso");
        console.log(data);
        navigate(`/certificate/${data.data.id}`);
      },
      onError: (error) => {
        console.log("Erro ao criar receita");
        console.log(error);
      },
    }
  );

  const requestMutation = useMutation(
    (data: IRequestCreateData) => {
      return api.requests.create(data);
    },
    {
      onSuccess: (data) => {
        reset();
        console.log("Receita criada com sucesso");
        console.log(data);
        navigate(`/request/${data.data.id}`);
      },
      onError: (error) => {
        console.log("Erro ao criar receita");
        console.log(error);
      },
    }
  );

  const handleSave = async (formData: IPrescriptionFormData) => {
    const dataAtual = new Date();
    dataAtual.setUTCHours(dataAtual.getUTCHours() - 3);
    const emissao = dataAtual.toISOString();

    console.log("formData.documentType: " + formData.documentType);
    if(formData.documentType == "receita"){
      const vencimento = getValidUntilDateAsString();
      const dataPatient: IPrescriptionCreateData = {
        titulo: formData.title,
        descricao: formData.description,
        emissao: emissao,
        vencimento: vencimento,
        nome_medico: user.user_name,
        nome_paciente: data?.data.first_name+" "+data?.data.last_name,
        paciente_id: data?.data.paciente_id
      };      
      prescriptionMutation.mutate(dataPatient);
      
    }
    else if(formData.documentType == "atestado"){
      const vencimento = getValidUntilDateAsString();
      const dataAtestado: ICertificateCreateData = {
        titulo: formData.title,
        descricao: formData.description,
        emissao: emissao,
        vencimento: vencimento,
        nome_medico: user.user_name,
        nome_paciente: data?.data.first_name+" "+data?.data.last_name,
        paciente_id: data?.data.paciente_id
      };

      certificateMutation.mutate(dataAtestado);
    }
    else if(formData.documentType == "requisicao"){
      console.log("é uma requisicao");
      const dataRequisicao: IRequestCreateData = {
        titulo: formData.title,
        descricao: formData.description,
        emissao: emissao,
        nome_medico: user.user_name,
        nome_paciente: data?.data.first_name+" "+data?.data.last_name,
        paciente_id: data?.data.paciente_id
      };

      requestMutation.mutate(dataRequisicao);
    }
  };

  const displayInputError = (message: string | undefined) => {
    if (!message) return;
    return (
      <FormHelperText>
        <InfoOutlined /> {message}
      </FormHelperText>
    );
  };

  const genericErrors = {
    required: "Campo obrigatório",
  };


  return (
    <Grid container direction="column">
      <Sheet variant="solid" color="primary">
        <Grid container component="div" className={styles.pacientInfos}>
          <Grid alignItems="start" xs={12} md={8}>
            <Typography level="h1">Crie sua receita para</Typography>
            <Typography level="h3" fontWeight={400}>
             {isLoading && "loading"}
             {status ==  "success"  && (<>{data?.data.first_name+" "+data?.data.last_name}</>)}

            </Typography>
          </Grid>
        </Grid>
      </Sheet>
      <form onSubmit={handleSubmit((data) => handleSave(data))}>
        <Grid container justifyContent="center">
          <Grid alignItems="start" xs={12} md={8} mt={5}>
            <Grid container justifyContent="flex-start" spacing={8}>
              <Grid xs={12} md={6}>
                <LabelInput>Título</LabelInput>
                <FormControl error={Boolean(errors.title?.message)}>
                  <Input
                    placeholder="Receita sobre algo"
                    size="lg"
                    {...register("title", { ...genericErrors })}
                  />
                  {displayInputError(errors.title?.message)}
                </FormControl>
              </Grid>
              <Grid xs={12} md={6}>
                <LabelInput>Tipo de documento</LabelInput>
                <Controller
                  control={control}
                  rules={{ required: true }}
                  name="documentType"
                  render={({ field: { onChange, value } }) => (
                    <Select
                      defaultValue="receita"
                      size="lg"
                      onChange={(_e, value) => onChange(value)}
                      value={value}
                    >
                      <Option value="receita">Receita</Option>
                      <Option value="requisicao">Requisição</Option>
                      <Option value="atestado">Atestado</Option>
                    </Select>
                  )}
                ></Controller>
              </Grid>
              <Grid xs={12} md={6}>
              {watch("documentType") !== "requisicao" && (<LabelInput>Válido por</LabelInput>)}
                {watch("documentType") !== "requisicao" && (
                <div>
                  <div className={styles.validUnitl}>
                    <FormControl
                      error={Boolean(errors.valueValidUntil?.message)}
                    >
                      <Input
                        {...register("valueValidUntil", { ...genericErrors })}
                        size="lg"
                        className={styles.inputValidUntilValue}
                        slotProps={{
                          input: {
                            component: NumericFormatAdapter,
                          },
                        }}
                      />
                    </FormControl>
                    <Controller
                      control={control}
                      rules={{ required: true }}
                      name="typeValidUntil"
                      render={({ field: { onChange, value } }) => (
                        <Select
                          defaultValue="dias"
                          size="lg"
                          onChange={(_e, value) => onChange(value)}
                          value={value}
                        >
                          <Option value="dias">Dias</Option>
                          <Option value="meses">Meses</Option>
                          <Option value="anos">Anos</Option>
                        </Select>
                      )}
                    ></Controller>
                  </div>
                  <FormControl error={Boolean(errors.valueValidUntil?.message)}>
                    {displayInputError(errors.valueValidUntil?.message)}
                  </FormControl>
                </div>
                )}
              </Grid>
            </Grid>
            <Grid container justifyContent="space-between" spacing={8}>
              <Grid xs={12} md={6}>
                <ToggleButtonGroup
                  sx={{ backgroundColor: "white" }}
                  color="neutral"
                  size="md"
                  value={textType}
                  onChange={(_event, newValue) => {
                    setTextType(newValue as MarkdownTextType);
                  }}
                >
                  <IconButton value="bold">
                    <FormatBold />
                  </IconButton>
                  <IconButton value="italic">
                    <FormatItalic />
                  </IconButton>
                  <IconButton value="underlined">
                    <FormatUnderlined />
                  </IconButton>
                </ToggleButtonGroup>
              </Grid>
              <Grid>
                <Button type="submit" loading={prescriptionMutation.isLoading}>
                  Salvar Receita
                </Button>
              </Grid>
            </Grid>
            <Grid justifyContent="flex-start" mt={2}>
              <Grid xs={12}>
                <FormControl error={Boolean(errors.description?.message)}>
                  <Textarea
                    {...register("description", { ...genericErrors })}
                    placeholder="Digite as orientações da receita"
                    size="lg"
                    minRows={10}
                    className={styles.textArea}
                  />
                  {displayInputError(errors.description?.message)}
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};
