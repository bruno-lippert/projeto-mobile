import React from "react";
import { TextInputProps } from "react-native";
import TextInputCustom from "./TextInputCustom";

interface Props extends TextInputProps {
  error?: string;
}

export default function TextArea({ error, ...props }: Props) {
  return (
    <TextInputCustom
      multiline
      numberOfLines={5}
      textAlignVertical="top"
      error={error}
      {...props}
    />
  );
}
