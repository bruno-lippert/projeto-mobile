import { Pressable, StyleSheet, Text, View } from "react-native";
import { Solicitacao } from "../types/solicitacao";
import { SimpleLineIcons } from "@expo/vector-icons";
import StatusCard from "./Status";
import { Link } from "expo-router";
import CategoriaCard from "./Categoria";

export default function SolicitacaoCard({
  solicitacao,
}: {
  solicitacao: Solicitacao;
}) {
  return (
    <Link
      href={{ pathname: "/solicitacao/[id]", params: { id: solicitacao.id } }}
      asChild
    >
      <Pressable style={styles.container}>
        <CategoriaCard categoria={solicitacao.categoria} />

        <Text style={styles.title}>{solicitacao.titulo}</Text>

        <Text style={styles.location}>
          <SimpleLineIcons
            name="location-pin"
            size={16}
            color="black"
            style={styles.locationIcon}
          />
          {solicitacao.endereco.logradouro}, {solicitacao.endereco.numero} -{" "}
          {solicitacao.endereco.bairro}
        </Text>

        <StatusCard status={solicitacao.status} />
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 16,
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: "#FABD00",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
  },
  category: {
    fontSize: 16,
  },
  location: {
    fontSize: 16,
    marginVertical: 8,
  },
  locationIcon: {
    marginRight: 8,
  },
});
