import { describe, it, expect, vi } from "vitest";
import request from "supertest";
import { app } from "../index.js";

vi.mock("stripe", () => {
  const StripeMock = function () {
    return {
      checkout: {
        sessions: {
          create: vi
            .fn()
            .mockResolvedValue({ url: "http://stripe-mock-url.com" }),
        },
      },
    };
  };

  return {
    default: StripeMock,
    Stripe: StripeMock,
  };
});

describe("Testes de Integraçãbo: Checkout Stripe", () => {
  it("deve retornar status 200 e a URL do checkout", async () => {
    const response = await request(app)
      .post("/api/create-checkout-session")
      .send({ quantity: 1 });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("url", "http://stripe-mock-url.com");
  });
});
