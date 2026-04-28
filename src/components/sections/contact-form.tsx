"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const t = useTranslations("contacts");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // EmailJS integration - configure with your own IDs via env vars
      const emailjs = await import("@emailjs/browser");
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""
      );
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-[4px] bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#19a3ff]/50 focus:border-[#19a3ff]/50 transition-colors text-sm";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
            {t("form_name")}
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder="João Silva"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
            {t("form_email")}
          </label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder="joao@exemplo.pt"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
          {t("form_subject")}
        </label>
        <input
          name="subject"
          value={form.subject}
          onChange={handleChange}
          required
          className={inputClass}
          placeholder="Partnership inquiry"
        />
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
          {t("form_message")}
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={6}
          className={cn(inputClass, "resize-none")}
          placeholder="..."
        />
      </div>

      <Button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-[#19a3ff] hover:bg-[#0077cc] text-white font-medium"
        size="lg"
      >
        {status === "sending" ? (
          t("form_sending")
        ) : (
          <>
            {t("form_send")}
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>

      {status === "success" && (
        <p className="text-center text-sm text-green-400">{t("form_success")}</p>
      )}
      {status === "error" && (
        <p className="text-center text-sm text-red-400">{t("form_error")}</p>
      )}
    </form>
  );
}
