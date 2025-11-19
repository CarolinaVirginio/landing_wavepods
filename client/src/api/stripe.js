async function createCheckoutSession(quantity = 1) {
  try {
    const res = await fetch("http://localhost:4242/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity }),
    });

    if (!res.ok) throw new Error(`Erro ao criar sessão (${res.status})`);

    const { url } = await res.json();

    if (!url) throw new Error("URL de sessão não recebida.");

    window.location.href = url;
    return { success: true };
  } catch (err) {
    console.error("Falha ao iniciar checkout:", err);
    return { success: false, error: err.message };
  }
}

export default createCheckoutSession;
