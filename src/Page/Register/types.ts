export type MarkdownTextType = "bold" | "default" | "italic" | "underlined";

export interface ICustomPropsReactNumer {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

export interface IPrescriptionFormData {
  title: string;
  documentType: string;
  description: string;
  typeValidUntil: string;
  valueValidUntil: string;
}

