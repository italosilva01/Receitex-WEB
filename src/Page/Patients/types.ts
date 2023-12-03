export type MarkdownTextType = "bold" | "default" | "italic" | "underlined";

export interface ICustomPropsReactNumer {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

export interface IGetPatientFormData {
  first_name: string;
  last_name: string;
  role: string;
  paciente_id: string;
}
