import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import TextInputCustom from "./TextInputCustom";
import { SolicitacaoForm } from "../types/solicitacao";
import { Dispatch, SetStateAction } from "react";

async function buscarCep(cep: string): Promise<{
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro?: boolean;
} | null> {
  try {
    const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    if (!res.ok) return null;
    const data = await res.json();
    if (data.erro) return null;
    return data;
  } catch {
    return null;
  }
}

export default function FormEndereco({
  form,
  setForm,
  errors,
  setErrors,
}: {
  form: SolicitacaoForm;
  setForm: Dispatch<SetStateAction<SolicitacaoForm>>;
  errors: Record<string, string>;
  setErrors: (value: React.SetStateAction<Record<string, string>>) => void;
}) {
  const [buscandoCep, setBuscandoCep] = useState(false);

  async function handleCepChange(text: string) {
    const cep = text.replace(/\D/g, "");
    setForm((prev) => ({ ...prev, endereco: { ...prev.endereco, cep } }));
    setErrors((e) => ({ ...e, "endereco.cep": "" }));

    if (cep.length === 8) {
      setBuscandoCep(true);
      const dados = await buscarCep(cep);
      setBuscandoCep(false);

      if (!dados) {
        setErrors((e) => ({ ...e, "endereco.cep": "CEP não encontrado" }));
        return;
      }

      setForm((prev) => ({
        ...prev,
        endereco: {
          ...prev.endereco,
          cep,
          logradouro: dados.logradouro ?? prev.endereco?.logradouro ?? "",
          bairro: dados.bairro ?? prev.endereco?.bairro ?? "",
          cidade: dados.localidade ?? prev.endereco?.cidade ?? "",
          uf: dados.uf ?? prev.endereco?.uf ?? "",
        },
      }));
      setErrors((e) => ({
        ...e,
        "endereco.logradouro": "",
        "endereco.bairro": "",
      }));
    }
  }

  return (
    <View>
      <View style={styles.line1Endereco}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            CEP *{buscandoCep && (
              <ActivityIndicator size="small" color="#003366" style={{ marginLeft: 6 }} />
            )}
          </Text>
          <TextInputCustom
            placeholder="CEP"
            keyboardType="number-pad"
            value={form.endereco?.cep}
            onChangeText={handleCepChange}
            error={errors["endereco.cep"]}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Número *</Text>
          <TextInputCustom
            placeholder="Número"
            keyboardType="number-pad"
            value={form.endereco?.numero}
            onChangeText={(text) => {
              setForm({
                ...form,
                endereco: {
                  ...form.endereco,
                  numero: text.replace(/\D/g, ""), // remove qualquer não-dígito
                },
              });

              setErrors((e) => ({ ...e, "endereco.numero": "" })); // limpa ao digitar
            }}
            error={errors["endereco.numero"]}
          />
        </View>
      </View>

      <View style={{ marginBottom: 12 }}>
        <Text style={styles.label}>Rua *</Text>
        <TextInputCustom
          placeholder="Rua"
          value={form.endereco?.logradouro}
          onChangeText={(text) => {
            setForm({
              ...form,
              endereco: {
                ...form.endereco,
                logradouro: text,
              },
            });

            setErrors((e) => ({ ...e, "endereco.logradouro": "" })); // limpa ao digitar
          }}
          error={errors["endereco.logradouro"]}
        />
      </View>

      <View style={{ marginBottom: 12 }}>
        <Text style={styles.label}>Bairro *</Text>
        <TextInputCustom
          placeholder="Bairro"
          value={form.endereco?.bairro}
          onChangeText={(text) => {
            setForm({
              ...form,
              endereco: {
                ...form.endereco,
                bairro: text,
              },
            });

            setErrors((e) => ({ ...e, "endereco.bairro": "" })); // limpa ao digitar
          }}
          error={errors["endereco.bairro"]}
        />
      </View>

      <View style={{ marginBottom: 12 }}>
        <Text style={styles.label}>Complemento </Text>
        <TextInputCustom
          placeholder="Complemento"
          value={form.endereco?.complemento}
          onChangeText={(text) =>
            setForm({
              ...form,
              endereco: {
                ...form.endereco,
                complemento: text,
              },
            })
          }
        />
      </View>

      <View style={{ marginBottom: 12 }}>
        <Text style={styles.label}>Ponto de referência </Text>
        <TextInputCustom
          placeholder="Ponto de referência"
          value={form.endereco?.pontoReferencia}
          onChangeText={(text) =>
            setForm({
              ...form,
              endereco: {
                ...form.endereco,
                pontoReferencia: text,
              },
            })
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},

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
    marginBottom: 12,
  },
});
