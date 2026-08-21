import { ArrowUpRight, Zap } from "lucide-react";
import type { ReactNode } from "react";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span
      className="logo"
      aria-label="E-Power — Oficina de Bikes e Scooters Elétricas"
    >
      <span className="logo-mark" aria-hidden="true">
        <Zap size={compact ? 16 : 19} fill="currentColor" />
      </span>
      <span>
        <strong>E-POWER</strong>
        {!compact && <small>OFICINA ESPECIALIZADA</small>}
      </span>
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`section-heading ${align === "center" ? "center" : ""}`}>
      <span className="eyebrow">
        <Zap size={14} fill="currentColor" />
        {eyebrow}
      </span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export function ExternalLink({
  href,
  children,
  className = "button primary",
  label,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {children}
      <ArrowUpRight size={18} />
    </a>
  );
}
