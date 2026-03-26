// hooks/useFormErrors.ts
import { ZodError } from "zod";

type FieldErrors = Record<string, string>;

export function extractErrors(error: ZodError): FieldErrors {
  return error.issues.reduce((acc, issue) => {
    const key = issue.path.join("."); // ex: "endereco.cep"
    if (!acc[key]) acc[key] = issue.message;
    return acc;
  }, {} as FieldErrors);
}
