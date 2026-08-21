"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle, Send } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/whatsapp";

type FormValues = { name: string; phone: string; vehicle: string; subject: string; message: string };
const initialValues: FormValues = { name: "", phone: "", vehicle: "", subject: "", message: "" };

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (Object.values(values).some((value) => !value.trim())) { setError("Preencha todos os campos para continuar."); return; }
    setError("");
    const text = `Olá! Meu nome é ${values.name}.\nTelefone: ${values.phone}.\nTipo de veículo: ${values.vehicle}.\nAssunto: ${values.subject}.\nMensagem: ${values.message}`;
    window.open(createWhatsAppUrl(text), "_blank", "noopener,noreferrer");
  }

  const update = (field: keyof FormValues, value: string) => setValues((current) => ({ ...current, [field]: value }));

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="form-title"><span><MessageCircle /></span><div><strong>Conte o que você precisa</strong><p>Responderemos pelo WhatsApp.</p></div></div>
      <div className="form-grid">
        <label><span>Nome</span><input value={values.name} onChange={(e) => update("name", e.target.value)} autoComplete="name" placeholder="Seu nome" /></label>
        <label><span>Telefone</span><input value={values.phone} onChange={(e) => update("phone", e.target.value)} autoComplete="tel" inputMode="tel" placeholder="(21) 99999-9999" /></label>
        <label><span>Tipo de veículo</span><select value={values.vehicle} onChange={(e) => update("vehicle", e.target.value)}><option value="">Selecione</option><option>Bike elétrica</option><option>Scooter elétrica</option><option>Outro veículo elétrico</option></select></label>
        <label><span>Assunto</span><input value={values.subject} onChange={(e) => update("subject", e.target.value)} placeholder="Ex.: avaliação técnica" /></label>
        <label className="full"><span>Mensagem</span><textarea value={values.message} onChange={(e) => update("message", e.target.value)} rows={4} placeholder="Descreva brevemente como podemos ajudar" /></label>
      </div>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="button primary form-submit" type="submit"><Send size={18} />Enviar pelo WhatsApp</button>
      <small className="privacy-note">Seus dados não são armazenados neste site.</small>
    </form>
  );
}
