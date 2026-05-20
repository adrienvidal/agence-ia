import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { CALENDLY_URL } from "@/lib/data";

const FROM = "VILORIS.IO IMPORTANT <contact@viloris.io>";
const TO = "contact.webnrolls@gmail.com";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, company, services, message } = await req.json();

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Champs requis manquants." }, { status: 400 });
  }

  const servicesLine =
    Array.isArray(services) && services.length > 0 ? services.join(", ") : "Non précisé";

  await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: email,
    subject: `[Audit] Nouvelle demande de ${name}`,
    html: `
      <h2 style="font-family:sans-serif">Nouvelle demande d'audit</h2>
      <table style="font-family:sans-serif;border-collapse:collapse">
        <tr><td style="padding:4px 12px 4px 0;color:#666">Nom</td><td><strong>${name}</strong></td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#666">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
        ${company ? `<tr><td style="padding:4px 12px 4px 0;color:#666">Entreprise</td><td>${company}</td></tr>` : ""}
        <tr><td style="padding:4px 12px 4px 0;color:#666">Services</td><td>${servicesLine}</td></tr>
      </table>
      <p style="font-family:sans-serif;margin-top:16px"><strong>Message :</strong><br>${message.replace(/\n/g, "<br>")}</p>
    `,
  });

  await resend.emails.send({
    from: FROM,
    to: email,
    subject: "Votre demande d'audit a bien été reçue — Viloris.io",
    html: `
      <p style="font-family:sans-serif">Bonjour ${name.split(" ")[0]},</p>
      <p style="font-family:sans-serif">J'ai bien reçu votre demande et je reviens vers vous sous 24h.</p>
      <p style="font-family:sans-serif">En attendant, vous pouvez réserver directement un créneau dans mon agenda :<br>
        <a href="${CALENDLY_URL}" style="color:#60a7d6">Réserver un créneau →</a>
      </p>
      <br>
      <p style="font-family:sans-serif">Adrien Vidal<br>Fondateur · Viloris.io</p>
    `,
  });

  return NextResponse.json({ success: true });
}
