import { mockSolicitacoes } from "./data";

export const getSolicitacaoById = (id: string) => {
  return mockSolicitacoes.find((solicitacao) => solicitacao.id === id);
};
