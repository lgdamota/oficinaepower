"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle, Send } from "lucide-react";
import { getUnitById, units } from "@/data/units";
import { createWhatsAppUrl } from "@/lib/whatsapp";

type FormValues = {
  name: string;
  unit: string;
  vehicle: string;
  service: string;
  message: string;
};
const initialValues: FormValues = {
  name: "",
  unit: "",
  vehicle: "",
  service: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (Object.values(values).some((value) => !value.trim())) {
      setError("Preencha todos os campos para continuar.");
      return;
    }
    setError("");
    const unit = getUnitById(values.unit);
    if (!unit) {
      setError("Selecione uma unidade de atendimento para continuar.");
      return;
    }
    const text = `Olá! Conheci a E-Power pelo site e gostaria de atendimento na unidade de ${unit.name}.\nMeu nome é ${values.name}.\nTipo de veículo: ${values.vehicle}.\nServiço desejado: ${values.service}.\nMensagem: ${values.message}`;
    window.open(
      createWhatsAppUrl(unit, { message: text }),
      "_blank",
      "noopener,noreferrer",
    );
  }

  const update = (field: keyof FormValues, value: string) =>
    setValues((current) => ({ ...current, [field]: value }));

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="form-title">
        <span>
          <MessageCircle />
        </span>
        <div>
          <strong>Conte o que você precisa</strong>
          <p>Responderemos pelo WhatsApp.</p>
        </div>
      </div>
      <div className="form-grid">
        <label>
          <span>Nome</span>
          <input
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            autoComplete="name"
            placeholder="Seu nome"
          />
        </label>
        <label>
          <span>Tipo de veículo</span>
          <select
            value={values.vehicle}
            onChange={(e) => update("vehicle", e.target.value)}
          >
            <option value="">Selecione</option>
            <option>Bike elétrica</option>
            <option>Scooter elétrica</option>
            <option>Outro veículo elétrico</option>
          </select>
        </label>
        <label className="full">
          <span>Unidade de atendimento</span>
          <select
            value={values.unit}
            onChange={(e) => update("unit", e.target.value)}
            required
          >
            <option value="">Selecione uma unidade</option>
            {units.map((unit) => (
              <option value={unit.id} key={unit.id}>
                {unit.name} — {unit.city}
              </option>
            ))}
          </select>
        </label>
        <label className="full">
          <span>Serviço desejado</span>
          <input
            value={values.service}
            onChange={(e) => update("service", e.target.value)}
            placeholder="Ex.: avaliação de freios"
          />
        </label>
        <label className="full">
          <span>Mensagem</span>
          <textarea
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            rows={4}
            placeholder="Descreva brevemente como podemos ajudar"
          />
        </label>
      </div>
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
      <button className="button primary form-submit" type="submit">
        <Send size={18} />
        Enviar pelo WhatsApp
      </button>
      <small className="privacy-note">
        Seus dados não são armazenados neste site.
      </small>
    </form>
  );
}
