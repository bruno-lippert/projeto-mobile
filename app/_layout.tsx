import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="solicitacao/[id]" options={{ headerShown: true }} />
        <Stack.Screen
          name="solicitacao/inserir"
          options={{ headerShown: true, title: "Nova Solicitação" }}
        />
        <Stack.Screen
          name="solicitacao/solicitacaoEnviada"
          options={{ headerShown: false }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
