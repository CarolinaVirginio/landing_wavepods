import { describe, it, expect } from "vitest";
import request from "supertest";
import { app } from "../index.js";

describe("Testes de Rota: POST /api/send-email", () => {
  it("deve retornar 200 e mensagem de sucesso para e-mail válido", async () => {
    const response = await request(app)
      .post("/api/validate-email")
      .send({ email: "contato@wavepods.com.br" });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Email válido!");
  });

  it("deve retornar 400 e erro para e-mail com formato inválido", async () => {
    const response = await request(app)
      .post("/api/validate-email")
      .send({ email: "Email válido!" });

    expect(response.status).toBe(422);
    expect(response.body.message).toBe("Email inválido.");
  });

  it("deve retornar 400 se o corpo da requisição estiver vazio", async () => {
    const response = await request(app).post("/api/validate-email").send({});

    expect(response.status).toBe(400);
  });
});
