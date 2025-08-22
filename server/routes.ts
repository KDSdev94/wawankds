import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  first_name: z.string().min(1),
  last_name: z.string().optional().default(""),
  from_email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // POST /api/contact — send email via Gmail SMTP
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const parsed = contactSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ message: "Invalid payload" });
      }

      const { first_name, last_name, from_email, subject, message } =
        parsed.data;

      const GMAIL_USER = process.env.GMAIL_USER;
      const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
      const EMAIL_TO = process.env.EMAIL_TO || GMAIL_USER;

      if (!GMAIL_USER || !GMAIL_APP_PASSWORD || !EMAIL_TO) {
        return res
          .status(500)
          .json({ message: "Server email configuration missing" });
      }

      // Create transporter for Gmail SMTP (App Password required)
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: GMAIL_USER,
          pass: GMAIL_APP_PASSWORD,
        },
      });

      const fromName = `${first_name} ${last_name ?? ""}`.trim();

      await transporter.sendMail({
        from: `${fromName} via Portfolio <${GMAIL_USER}>`,
        to: EMAIL_TO,
        subject: `[Portfolio Contact] ${subject}`,
        replyTo: `${fromName} <${from_email}>`,
        text: `From: ${fromName} <${from_email}>\n\n${message}`,
        html: `<p><strong>From:</strong> ${fromName} &lt;${from_email}&gt;</p><p>${message.replace(
          /\n/g,
          "<br/>"
        )}</p>`,
      });

      return res.json({ ok: true });
    } catch (err: any) {
      console.error("/api/contact error", err);
      return res
        .status(500)
        .json({ message: err?.message || "Failed to send" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
