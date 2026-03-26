import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SolicitacaoCard from "../components/SolicitacaoCard";
import { mockSolicitacoes } from "../service/data";
import InserirButton from "../components/InserirButton";

export default function Page() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Feed de Solicitações</Text>
        <Text style={styles.subtitle}>
          Acompanhe as melhorias da nossa cidade em tempo real.
        </Text>
      </View>
      <FlatList
        data={mockSolicitacoes}
        renderItem={({ item }) => <SolicitacaoCard solicitacao={item} />}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
      <InserirButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    width: "100%",
    gap: 8,
    marginVertical: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
  },
  list: {
    flex: 1,
    width: "100%",
  },
});
