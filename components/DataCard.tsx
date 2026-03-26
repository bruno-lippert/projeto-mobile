import { Text, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function DataAberturaCard({ data }: { data: Date }) {
  const formatted = data.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  // "15 de out. de 2023" → "15 Out, 2023"
  const [day, , month, , year] = formatted.split(" ");
  const label = `${day} ${capitalize(month.replace(".", ""))}, ${year}`;

  return (
    <View style={styles.container}>
      <Text style={styles.sectionLabel}>DATA DE ABERTURA</Text>
      <View style={styles.row}>
        <MaterialCommunityIcons
          name="calendar-blank-outline"
          size={22}
          color="#003366"
        />
        <Text style={styles.dateText}>{label}</Text>
      </View>
    </View>
  );
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
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
    alignItems: "center",
    gap: 10,
  },
  dateText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1A1A2E",
  },
});
