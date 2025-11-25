export function validateEmail(email) {
  if (typeof email !== "string") return false;

  const uniformEmail = email.trim().toLowerCase();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(uniformEmail);
}
