"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Shield, CheckCircle2, Loader2, CalendarDays } from "lucide-react";
import { CALENDLY_URL, CONTACT_FORM } from "@/lib/data";
import { useContactModal } from "@/lib/contact-modal-context";

type Status = "idle" | "loading" | "success" | "error";

const OVERLAY = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const PANEL = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 320, damping: 30 },
  },
  exit: { opacity: 0, y: 16, scale: 0.97, transition: { duration: 0.18 } },
};

export function ContactModal() {
  const { isOpen, closeModal } = useContactModal();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
      setTimeout(() => firstInputRef.current?.focus(), 80);
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [closeModal]);

  function resetForm() {
    setName("");
    setEmail("");
    setCompany("");
    setSelectedServices([]);
    setMessage("");
    setStatus("idle");
    setErrorMsg("");
  }

  function handleClose() {
    closeModal();
    setTimeout(resetForm, 300);
  }

  function toggleService(service: string) {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service],
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, services: selectedServices, message }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Erreur lors de l'envoi.");
      }

      setStatus("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Une erreur est survenue.");
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/15 transition";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="overlay"
          variants={OVERLAY}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleClose();
          }}
        >
          <motion.div
            key="panel"
            variants={PANEL}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-background shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:bg-surface hover:text-foreground"
              aria-label="Fermer"
            >
              <X className="h-4 w-4" />
            </button>

            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-6 px-8 py-14 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/15">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-foreground">
                      {CONTACT_FORM.success.title}
                    </h2>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {CONTACT_FORM.success.message}
                    </p>
                  </div>
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noreferrer"
                    onClick={handleClose}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                  >
                    <CalendarDays className="h-4 w-4" />
                    {CONTACT_FORM.success.cta}
                  </a>
                  <button
                    onClick={handleClose}
                    className="text-xs text-muted-foreground hover:text-foreground transition"
                  >
                    Fermer
                  </button>
                </motion.div>
              ) : (
                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="px-6 pt-8 pb-2">
                    <h2
                      id="modal-title"
                      className="font-display text-2xl font-bold text-foreground"
                    >
                      {CONTACT_FORM.title}
                    </h2>
                    <p className="mt-1.5 text-sm text-muted-foreground">{CONTACT_FORM.subtitle}</p>
                  </div>

                  <form onSubmit={handleSubmit} className="px-6 pb-8 pt-4 flex flex-col gap-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-medium text-muted-foreground">
                          {CONTACT_FORM.fields.name.label} <span className="text-primary">*</span>
                        </label>
                        <input
                          ref={firstInputRef}
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder={CONTACT_FORM.fields.name.placeholder}
                          className={inputClass}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-medium text-muted-foreground">
                          {CONTACT_FORM.fields.email.label} <span className="text-primary">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder={CONTACT_FORM.fields.email.placeholder}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium text-muted-foreground">
                        {CONTACT_FORM.fields.company.label}
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder={CONTACT_FORM.fields.company.placeholder}
                        className={inputClass}
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-medium text-muted-foreground">
                        {CONTACT_FORM.fields.services.label}
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {CONTACT_FORM.services.map((service) => {
                          const active = selectedServices.includes(service);
                          return (
                            <button
                              key={service}
                              type="button"
                              onClick={() => toggleService(service)}
                              className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${
                                active
                                  ? "border-primary bg-primary/15 text-primary"
                                  : "border-border bg-surface text-muted-foreground hover:border-primary/40 hover:text-foreground"
                              }`}
                            >
                              {service}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium text-muted-foreground">
                        {CONTACT_FORM.fields.message.label} <span className="text-primary">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={CONTACT_FORM.fields.message.placeholder}
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    {status === "error" && (
                      <p className="rounded-lg bg-destructive/10 border border-destructive/30 px-4 py-2.5 text-xs text-destructive">
                        {errorMsg}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition hover:opacity-90 disabled:opacity-60"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" /> Envoi en cours…
                        </>
                      ) : (
                        <>
                          {CONTACT_FORM.cta}{" "}
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground/60">
                      <Shield className="h-3 w-3" />
                      {CONTACT_FORM.gdpr}
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
