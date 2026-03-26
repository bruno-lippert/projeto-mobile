import { Status } from "../enums/status";
import { Text, View, StyleSheet } from "react-native";

export default function StatusCard({ status }: { status: Status }) {
  const statusConfig: Record<
    Status,
    { background: string; text: string; label: string }
  > = {
    [Status.ABERTO]: {
      background: "#E8F0FB", // azul claro neutro — aguardando ação
      text: "#003366", // Secondary
      label: "EM ABERTO",
    },
    [Status.EM_ANALISE]: {
      background: "#FFF8E1", // amarelo muito claro — atenção/pendente
      text: "#7A5800", // amarelo escuro para contraste
      label: "EM ANÁLISE",
    },
    [Status.APROVADO]: {
      background: "#003366", // Secondary — confirmação institucional
      text: "#FFC107", // Primary sobre Secondary
      label: "APROVADO",
    },
    [Status.REPROVADO]: {
      background: "#F5E6E6", // vermelho claro neutro — erro/negação
      text: "#8B1A1A", // vermelho escuro para contraste
      label: "REPROVADO",
    },
    [Status.EM_ANDAMENTO]: {
      background: "#FFC107", // Primary — em progresso/destaque
      text: "#1A1A00", // quase preto para contraste no amarelo
      label: "EM ANDAMENTO",
    },
    [Status.CONCLUIDO]: {
      background: "#333333", // Tertiary — finalizado/neutro forte
      text: "#F8F9FA", // Neutral claro
      label: "CONCLUÍDO",
    },
    [Status.CANCELADO]: {
      background: "#F8F9FA", // Neutral — inativo/desabilitado
      text: "#888888", // cinza médio — deemphasized
      label: "CANCELADO",
    },
  };

  const config = statusConfig[status];

  return (
    <View style={[styles.badge, { backgroundColor: config.background }]}>
      <Text style={[styles.label, { color: config.text }]}>{config.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: "flex-start",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 999,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0.4,
  },
});
