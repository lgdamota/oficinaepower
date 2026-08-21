import { ArrowUpRight, Wrench } from "lucide-react";
import type { ReactNode } from "react";

export function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="18" height="18" x="3" y="3" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span
      className="logo"
      aria-label="E-Power — Oficina de Bikes e Scooters Elétricas"
    >
      <span className="logo-mark" aria-hidden="true">
        <Wrench size={compact ? 16 : 19} />
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
      <span className="eyebrow">{eyebrow}</span>
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
