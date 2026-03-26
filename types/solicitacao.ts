import { Categoria } from "../enums/categoria";
import { Status } from "../enums/status";
import { Endereco } from "./endereco";

export interface SolicitacaoForm {
  titulo: string;
  descricao: string;
  categoria: Categoria | null;
  endereco: Endereco;
  status: Status;
}
export interface Solicitacao {
  id: string;
  titulo: string;
  descricao: string;
  categoria: Categoria;
  status: Status;
  endereco: Endereco;

  created_At: Date;
  updated_At: Date;
}
