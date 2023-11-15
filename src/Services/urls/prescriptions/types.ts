export interface IPrescriptionCreateData {
  titulo: string;
  descricao: string;
  emissao: string;
  vencimento: string;
  nome_medico: string;
  nome_paciente: string;
}

export interface IRequestCreateData {
  titulo: string;
  descricao: string;
  emissao: string;
  nome_medico: string;
  nome_paciente: string;
}
