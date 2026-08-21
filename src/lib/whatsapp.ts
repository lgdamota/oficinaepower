import type { Unit } from "@/data/units";

export function createAppointmentMessage(unit: Unit, service?: string) {
  return service
    ? `Olá! Conheci a E-Power pelo site e gostaria de solicitar uma avaliação para ${service} na unidade de ${unit.name}.`
    : `Olá! Conheci a E-Power pelo site e gostaria de agendar uma avaliação na unidade de ${unit.name} para minha bike ou scooter elétrica.`;
}

export function createWhatsAppUrl(
  unit: Unit,
  options: { service?: string; message?: string } = {},
) {
  const message =
    options.message ?? createAppointmentMessage(unit, options.service);
  return `https://wa.me/${unit.whatsapp}?text=${encodeURIComponent(message)}`;
}
