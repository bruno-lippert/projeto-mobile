import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { getSolicitacaoById } from "../../service/solicitacoes";
import StatusCard from "../../components/Status";
import CategoriaCard from "../../components/CategoriaDetailCard";
import EnderecoCard from "../../components/EnderecoCard";
import DataAberturaCard from "../../components/DataCard";
import DescricaoFatosCard from "../../components/DescricaoFatosCard";

export default function SolicitacaoDetailPage() {
  const { id } = useLocalSearchParams();
  const solicitacao = getSolicitacaoById(id as string);

  if (!solicitacao) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 16 }}>
        <Stack.Screen options={{ title: "Detalhes da Solicitação" }} />
        <Text style={{ fontSize: 18, color: "#888", textAlign: "center" }}>
          Solicitação não encontrada
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Detalhes da Solicitação" }} />

      <Text style={styles.title}>{solicitacao.titulo}</Text>
      <StatusCard status={solicitacao.status} />

      <CategoriaCard categoria={solicitacao.categoria} />
      <EnderecoCard endereco={solicitacao.endereco} />
      <DataAberturaCard data={solicitacao.created_At} />
      <DescricaoFatosCard descricao={solicitacao.descricao} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFFFFF",
    gap: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
