// components/TextInputCustom.tsx
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  TextInputProps,
} from "react-native";

interface Props extends TextInputProps {
  error?: string;
}

export default function TextInputCustom({ error, ...props }: Props) {
  return (
    <View>
      <TextInput
        style={[styles.input, error ? styles.inputError : null]}
        {...props}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#FFFFFF",
  },
  inputError: {
    borderColor: "#C0392B",
    backgroundColor: "#FFF5F5",
  },
  errorText: {
    marginTop: 4,
    fontSize: 12,
    color: "#C0392B",
  },
});
