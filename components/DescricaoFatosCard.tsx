import { Text, View, StyleSheet } from "react-native";

export default function DescricaoFatosCard({
  descricao,
}: {
  descricao: string;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <View style={styles.titleAccent} />
        <Text style={styles.title}>Descrição dos Fatos</Text>
      </View>

      <Text style={styles.descricao}>"{descricao}"</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    gap: 14,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  titleAccent: {
    width: 20,
    height: 3,
    borderRadius: 2,
    backgroundColor: "#FFC107",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#003366",
  },

  descricao: {
    fontSize: 18,
    fontStyle: "italic",
    color: "#333333",
  },
});
