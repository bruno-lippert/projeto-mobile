import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import CategoriaDropdown from "../../components/CategoriaDropdown";
import { Categoria } from "../../enums/categoria";
import { SolicitacaoForm } from "../../types/solicitacao";
import { Status } from "../../enums/status";
import TextInputCustom from "../../components/TextInputCustom";
import TextArea from "../../components/TextArea";
import FormEndereco from "../../components/FormEndereco";
import { Button } from "../../components/button";
import { MaterialIcons } from "@expo/vector-icons";
import { z } from "zod";
import { extractErrors } from "../../hooks/useFormErrors";
import { mockSolicitacoes } from "../../service/data";
import { router } from "expo-router";

function generateId(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

const solicitacaoSchema = z.object({
  categoria: z.enum(Object.values(Categoria) as [string, ...string[]], {
    message: "Categoria é obrigatória",
  }),
  titulo: z.string().nonempty("Título é obrigatório"),
  descricao: z.string().nonempty("Descrição é obrigatória"),
  endereco: z.object({
    cep: z.string().nonempty("CEP é obrigatório"),
    logradouro: z.string().nonempty("Logradouro é obrigatório"),
    numero: z.string().min(1, "Número é obrigatório"),
    bairro: z.string().min(1, "Bairro é obrigatório"),
    complemento: z.string(),
    pontoReferencia: z.string(),
  }),
});

export default function InserirSolicitacao() {
  const [form, setForm] = useState<SolicitacaoForm>({
    categoria: null,
    titulo: "",
    descricao: "",
    status: Status.ABERTO,
    endereco: {
      cep: "",
      logradouro: "",
      numero: "",
      bairro: "",
      complemento: "",
      pontoReferencia: "",
    },
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = () => {
    const result = solicitacaoSchema.safeParse(form);
    if (!result.success) {
      setErrors(extractErrors(result.error)); // popula erros por campo
      return;
    }
    setErrors({});

    mockSolicitacoes.push({
      ...form,
      id: generateId(),
      created_At: new Date(),
      updated_At: new Date(),
      categoria: form.categoria as Categoria,
    });

    setForm({
      categoria: null,
      titulo: "",
      descricao: "",
      status: Status.ABERTO,
      endereco: {
        cep: "",
        logradouro: "",
        numero: "",
        bairro: "",
        complemento: "",
        pontoReferencia: "",
      },
    });

    router.push("/solicitacao/solicitacaoEnviada");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 60 }}
        keyboardShouldPersistTaps="handled"
      >
      <CategoriaDropdown
        value={form.categoria}
        onChange={(cat) => {
          setForm({ ...form, categoria: cat });
          setErrors((e) => ({ ...e, categoria: "" })); // ← limpa ao selecionar
        }}
        error={errors["categoria"]}
      />
      <View style={{ marginVertical: 12 }}>
        <Text style={styles.label}>Título *</Text>
        <TextInputCustom
          placeholder="Título"
          value={form.titulo}
          onChangeText={(text) => {
            setForm({ ...form, titulo: text });
            setErrors((e) => ({ ...e, titulo: "" })); // limpa ao digitar
          }}
          error={errors["titulo"]}
        />
      </View>

      <View style={{ marginVertical: 12 }}>
        <Text style={styles.label}>Descrição *</Text>
        <TextArea
          placeholder="Descrição"
          value={form.descricao}
          onChangeText={(text) => {
            setForm({ ...form, descricao: text });
            setErrors((e) => ({ ...e, descricao: "" })); // limpa ao digitar
          }}
          multiline
          numberOfLines={5}
          error={errors["descricao"]}
        />
      </View>

      {/* Endereço */}
      <View>
        <Text style={styles.subtitle}>Endereço</Text>

        <FormEndereco
          form={form}
          setForm={setForm}
          errors={errors}
          setErrors={setErrors}
        />
      </View>

      <Button title="Enviar" onPress={onSubmit}>
        <MaterialIcons name="send" size={24} color="white" />
      </Button>
    </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#888888",
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 6,
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    color: "#888888",
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 6,
  },
  line1Endereco: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  inputContainer: {
    flex: 1,
  },
});
