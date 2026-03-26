import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";

export default function InserirButton() {
  const onPress = () => {
    router.push("/solicitacao/inserir");
  };

  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>
        <AntDesign name="plus" size={24} color="white" />
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#164E85",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    position: "absolute",
    bottom: 30,
    right: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});
