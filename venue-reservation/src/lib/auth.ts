// src/lib/auth.ts
export async function sendMagicLinkEmail(email: string, firstName: string) {
  const res = await fetch("/api/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      subject: "Your Magic Link",
      message: "Click here to log in with your magic link!",
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to send magic link");
  }

  return res.json();
}

