export type MarkdownTextType = "bold" | "default" | "italic" | "underlined";

export interface ICustomPropsReactNumer {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

export interface IGetPatientFormData {
  firstName: string;
  lastName: string;
  role: string;
  id: string;
}
