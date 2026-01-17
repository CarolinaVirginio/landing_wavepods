import { describe, it, expect } from "vitest";
import { validateEmail } from "../utils/validateEmail.js";

describe("Validação de E-mail (Utils)", () => {
  it("deve aceitar um e-mail válido padrão", () => {
    expect(validateEmail("contato@wavepods.com.br")).toBe(true);
  });

  it("deve rejeitar e-mail sem o @", () => {
    expect(validateEmail("carolinawavepods.com")).toBe(false);
  });

  it("deve rejeitar e-mail sem ponto no domínio", () => {
    expect(validateEmail("carolina@wavepods")).toBe(false);
  });

  it("deve rejeitar valores que não são string (null/undefined)", () => {
    expect(validateEmail(null)).toBe(false);
    expect(validateEmail(undefined)).toBe(false);
  });
});
