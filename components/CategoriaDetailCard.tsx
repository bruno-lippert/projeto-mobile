import { Categoria } from "../enums/categoria";
import { Text, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";

type IconConfig = {
  library: "MaterialCommunityIcons" | "FontAwesome5";
  name: string;
  background: string;
  iconColor: string;
  label: string;
};

const categoriaConfig: Record<Categoria, IconConfig> = {
  [Categoria.MANUTENCAO]: {
    library: "MaterialCommunityIcons",
    name: "wrench",
    background: "#FFF8E1",
    iconColor: "#7A5800",
    label: "Manutenção",
  },

  [Categoria.ILUMINACAO]: {
    library: "MaterialCommunityIcons",
    name: "lightbulb",
    background: "#FFF8E1",
    iconColor: "#7A5800",
    label: "Iluminação",
  },
  [Categoria.LIMPEZA_PUBLICA]: {
    library: "MaterialCommunityIcons",
    name: "trash-can",
    background: "#E8F0FB",
    iconColor: "#003366",
    label: "Limpeza Pública",
  },
  [Categoria.TRANSITO]: {
    library: "MaterialCommunityIcons",
    name: "traffic-light",
    background: "#E8F0FB",
    iconColor: "#003366",
    label: "Trânsito",
  },
  [Categoria.OUTROS]: {
    library: "MaterialCommunityIcons",
    name: "plus",
    background: "#FFF8E1",
    iconColor: "#7A5800",
    label: "Outros",
  },
};

export default function CategoriaDetailCard({
  categoria,
}: {
  categoria: Categoria;
}) {
  const config = categoriaConfig[categoria];

  const IconComponent =
    config.library === "FontAwesome5" ? FontAwesome5 : MaterialCommunityIcons;

  return (
    <View style={styles.container}>
      <Text style={styles.sectionLabel}>CATEGORIA</Text>
      <View style={styles.row}>
        <View
          style={[styles.iconWrapper, { backgroundColor: config.background }]}
        >
          <IconComponent
            name={config.name as any}
            size={24}
            color={config.iconColor}
          />
        </View>
        <Text style={styles.categoryLabel}>{config.label}</Text>
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
    alignItems: "center",
    gap: 14,
  },
  iconWrapper: {
    width: 44,
    height: 44,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  categoryLabel: {
    fontSize: 16,
    fontWeight: "700",
    color: "#003366",
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
});
