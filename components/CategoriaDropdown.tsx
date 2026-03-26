import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
  Platform,
} from "react-native";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { Categoria } from "../enums/categoria";

type IconConfig = {
  library: "MaterialCommunityIcons" | "FontAwesome5";
  name: string;
  background: string;
  iconColor: string;
};

const categoriaConfig: Record<Categoria, IconConfig> = {
  [Categoria.MANUTENCAO]: {
    library: "MaterialCommunityIcons",
    name: "wrench",
    background: "#FFF8E1",
    iconColor: "#7A5800",
  },
  [Categoria.TRANSITO]: {
    library: "MaterialCommunityIcons",
    name: "traffic-light",
    background: "#E8F0FB",
    iconColor: "#003366",
  },
  [Categoria.ILUMINACAO]: {
    library: "MaterialCommunityIcons",
    name: "lightbulb-outline",
    background: "#FFF8E1",
    iconColor: "#7A5800",
  },
  [Categoria.LIMPEZA_PUBLICA]: {
    library: "MaterialCommunityIcons",
    name: "trash-can-outline",
    background: "#E8F0FB",
    iconColor: "#003366",
  },
  [Categoria.OUTROS]: {
    library: "MaterialCommunityIcons",
    name: "plus",
    background: "#FFF8E1",
    iconColor: "#7A5800",
  },
};

const options = Object.values(Categoria);

interface CategoriaDropdownProps {
  value: Categoria | null;
  onChange: (categoria: Categoria) => void;
  placeholder?: string;
  error?: string;
}

function CategoriaIcon({
  categoria,
  size = 20,
}: {
  categoria: Categoria;
  size?: number;
}) {
  const config = categoriaConfig[categoria];
  const IconComponent =
    config.library === "FontAwesome5" ? FontAwesome5 : MaterialCommunityIcons;
  return (
    <View style={[styles.iconWrapper, { backgroundColor: config.background }]}>
      <IconComponent
        name={config.name as any}
        size={size}
        color={config.iconColor}
      />
    </View>
  );
}

export default function CategoriaDropdown({
  value,
  onChange,
  placeholder = "Selecione uma categoria",
  error,
}: CategoriaDropdownProps) {
  const [open, setOpen] = useState(false);

  function handleSelect(categoria: Categoria) {
    onChange(categoria);
    setOpen(false);
  }

  return (
    <View>
      <Text style={styles.label}>CATEGORIA *</Text>

      {/* Trigger */}
      <TouchableOpacity
        style={[
          styles.trigger,
          open && styles.triggerOpen,
          error && styles.triggerError, // ← novo
        ]}
        onPress={() => setOpen(true)}
        activeOpacity={0.8}
      >
        {value ? (
          <View style={styles.triggerContent}>
            <CategoriaIcon categoria={value} size={18} />
            <Text style={styles.triggerText}>{value}</Text>
          </View>
        ) : (
          <Text style={styles.placeholder}>{placeholder}</Text>
        )}
        <MaterialCommunityIcons
          name={open ? "chevron-up" : "chevron-down"}
          size={20}
          color="#888888"
        />
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        visible={open}
        transparent
        animationType="fade"
        onRequestClose={() => setOpen(false)}
      >
        <TouchableOpacity
          style={styles.backdrop}
          activeOpacity={1}
          onPress={() => setOpen(false)}
        >
          <View style={styles.sheet}>
            <View style={styles.sheetHeader}>
              <Text style={styles.sheetTitle}>Selecionar Categoria</Text>
              <TouchableOpacity onPress={() => setOpen(false)}>
                <MaterialCommunityIcons
                  name="close"
                  size={22}
                  color="#555555"
                />
              </TouchableOpacity>
            </View>

            <FlatList
              data={options}
              keyExtractor={(item) => item}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              renderItem={({ item }) => {
                const selected = item === value;
                return (
                  <TouchableOpacity
                    style={[styles.option, selected && styles.optionSelected]}
                    onPress={() => handleSelect(item)}
                    activeOpacity={0.7}
                  >
                    <CategoriaIcon categoria={item} size={20} />
                    <Text
                      style={[
                        styles.optionText,
                        selected && styles.optionTextSelected,
                      ]}
                    >
                      {item}
                    </Text>
                    {selected && (
                      <MaterialCommunityIcons
                        name="check"
                        size={18}
                        color="#003366"
                        style={styles.checkIcon}
                      />
                    )}
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </TouchableOpacity>
      </Modal>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    fontWeight: "600",
    color: "#888888",
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 6,
  },
  trigger: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    paddingVertical: 12,
    paddingHorizontal: 14,
  },
  triggerOpen: {
    borderColor: "#003366",
  },
  triggerContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  triggerText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1A1A2E",
  },
  placeholder: {
    fontSize: 15,
    color: "#AAAAAA",
  },
  iconWrapper: {
    width: 36,
    height: 36,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  // Modal
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "flex-end",
  },
  sheet: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: Platform.OS === "ios" ? 34 : 16,
    maxHeight: "70%",
  },
  sheetHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  sheetTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#003366",
    letterSpacing: 0.3,
  },
  separator: {
    height: 1,
    backgroundColor: "#F0F0F0",
    marginHorizontal: 16,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    gap: 12,
  },
  optionSelected: {
    backgroundColor: "#F0F4FB",
  },
  optionText: {
    flex: 1,
    fontSize: 15,
    fontWeight: "500",
    color: "#333333",
  },
  optionTextSelected: {
    fontWeight: "700",
    color: "#003366",
  },
  checkIcon: {
    marginLeft: "auto",
  },
  triggerError: {
    borderColor: "#C0392B",
    backgroundColor: "#FFF5F5",
  },
  errorText: {
    marginTop: 4,
    fontSize: 12,
    color: "#C0392B",
  },
});
