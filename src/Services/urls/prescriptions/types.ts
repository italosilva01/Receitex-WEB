export interface IPrescriptionCreateData {
  id: string;
  titulo: string;
  descricao: string;
  emissao: string;
  vencimento: string;
  nome_medico: string;
  nome_paciente: string;
  paciente_id: string | undefined;
}

export interface ICertificateCreateData {
  titulo: string;
  descricao: string;
  emissao: string;
  vencimento: string;
  nome_medico: string;
  nome_paciente: string;
  paciente_id:  string | undefined;
}

export interface IRequestCreateData {
  titulo: string;
  descricao: string;
  emissao: string;
  nome_medico: string;
  nome_paciente: string;
  paciente_id: string | undefined;
}

export interface IDocumentsData{
  receitas: Array<IPrescriptionCreateData>,
  requisicoes: Array<IRequestCreateData>,
  atestados: Array<ICertificateCreateData>
}
