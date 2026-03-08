import { AxiosError } from "axios";

export function sanitizeError(context: string, error: unknown): never {
  if (error instanceof AxiosError) {
    const status = error.response?.status ?? "no response";
    throw new Error(`${context} (HTTP ${status})`);
  }
  throw new Error(context);
}
