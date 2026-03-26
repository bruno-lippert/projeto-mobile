import { Text, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Endereco } from "../types/endereco";

export default function EnderecoCard({ endereco }: { endereco: Endereco }) {
  const linha1 = `${endereco.logradouro}, ${endereco.numero}`;
  const linha2 = [endereco.bairro, endereco.complemento]
    .filter(Boolean)
    .join(", ");

  return (
    <View style={styles.container}>
      <Text style={styles.sectionLabel}>ENDEREÇO</Text>
      <View style={styles.row}>
        <MaterialCommunityIcons name="map-marker" size={22} color="#003366" />
        <View style={styles.textWrapper}>
          <Text style={styles.linha1}>{linha1}</Text>
          {linha2 ? <Text style={styles.linha2}>{linha2}</Text> : null}
          {endereco.pontoReferencia ? (
            <Text style={styles.referencia}>
              Ref: {endereco.pontoReferencia}
            </Text>
          ) : null}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F9FA",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    gap: 10,
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: "600",
    color: "#888888",
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  textWrapper: {
    flex: 1,
    gap: 2,
  },
  linha1: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1A1A2E",
  },
  linha2: {
    fontSize: 15,
    fontWeight: "400",
    color: "#555555",
  },
  referencia: {
    fontSize: 13,
    fontWeight: "400",
    color: "#888888",
    fontStyle: "italic",
    marginTop: 2,
  },
});
