import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Button } from "../../components/button";

export default function SolicitacaoEnviada() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Content */}
      <View style={styles.content}>
        {/* Success icon card */}
        <View style={styles.iconCard}>
          <MaterialIcons name="check-circle" size={56} color="#27AE60" />
        </View>

        {/* Title */}
        <Text style={styles.title}>SOLICITAÇÃO{"\n"}ENVIADA!</Text>

        {/* Description */}
        <Text style={styles.description}>
          Obrigado por ajudar a cuidar de <Text style={styles.bold}>Ivoti</Text>
          ! Sua solicitação foi recebida com sucesso e será encaminhada ao
          gabinete do Vereador. Acompanhe o status no feed.
        </Text>
      </View>

      <View style={styles.backButton}>
        <Button
          onPress={() => router.replace("/")}
          title="Voltar para o Início"
        >
          <MaterialIcons name="arrow-back" size={18} color="#333333" />
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
    justifyContent: "space-between",
    padding: 16,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 36,
    gap: 24,
  },
  iconCard: {
    width: 96,
    height: 96,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#003366",
    textAlign: "center",
    lineHeight: 36,
    letterSpacing: 1,
  },
  description: {
    fontSize: 15,
    color: "#555555",
    textAlign: "center",
    lineHeight: 24,
  },
  bold: {
    fontWeight: "700",
    color: "#003366",
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: "#E8E8E8",
    backgroundColor: "#FFFFFF",
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
  backButton: {
    paddingVertical: 20,
  },
});
