import { Categoria } from "../enums/categoria";
import { Status } from "../enums/status";
import { Solicitacao } from "../types/solicitacao";

export let mockSolicitacoes: Solicitacao[] = [
  {
    id: "req-001",
    titulo: "Buraco na rua",
    descricao: "Tem um buraco na rua que está atrapalhando o trânsito.",
    categoria: Categoria.TRANSITO,
    status: Status.ABERTO,
    endereco: {
      cep: "93900-000",
      logradouro: "Rua das Flores",
      numero: "45",
      bairro: "Jardim Panorâmico",
      complemento: "Casa",
      pontoReferencia: "Em frente ao parque",
    },
    created_At: new Date("2026-03-10T09:00:00Z"),
    updated_At: new Date("2026-03-12T11:30:00Z"),
  },
  {
    id: "req-002",
    titulo: "Ar-condicionado vazando",
    descricao: "O aparelho da sala de reuniões 3 está pingando água.",
    categoria: Categoria.MANUTENCAO,
    status: Status.ABERTO,
    endereco: {
      cep: "93900-000",
      logradouro: "Av. Presidente Lucena",
      numero: "3452",
      bairro: "Sete de Setembro",
      complemento: "Fundos",
      pontoReferencia: "Próximo à Padaria Central",
    },
    created_At: new Date("2026-03-15T14:20:00Z"),
    updated_At: new Date("2026-03-15T14:20:00Z"),
  },
  {
    id: "req-003",
    titulo: "Iluminação Pública",
    descricao: "O poste de iluminação da rua principal está queimado.",
    categoria: Categoria.ILUMINACAO,
    status: Status.ABERTO,
    endereco: {
      cep: "93900-000",
      logradouro: "Rua das Flores",
      numero: "45",
      bairro: "Jardim Panorâmico",
      complemento: "Casa",
      pontoReferencia: "Em frente ao parque",
    },
    created_At: new Date("2026-03-10T09:00:00Z"),
    updated_At: new Date("2026-03-12T11:30:00Z"),
  },
];
