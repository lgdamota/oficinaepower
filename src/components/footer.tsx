import { AtSign, MapPin, MessageCircle } from "lucide-react";
import { navItems, siteConfig } from "@/data/site";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import { Logo } from "./ui";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>{siteConfig.tagline}</p>
          <strong>E-Power — Cuidado para sua mobilidade elétrica.</strong>
        </div>
        <div>
          <h3>Navegação</h3>
          <nav aria-label="Navegação do rodapé">
            {navItems.map((item) => (
              <a key={item.id} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div>
          <h3>Fale com a gente</h3>
          <a
            href={createWhatsAppUrl(
              "Olá! Conheci a E-Power pelo site e gostaria de mais informações.",
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle />
            {siteConfig.whatsappDisplay}
          </a>
          {siteConfig.instagramUrl ? (
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AtSign />
              Instagram
            </a>
          ) : (
            <span className="muted-link">
              <AtSign />
              Instagram oficial em breve
            </span>
          )}
        </div>
        <div>
          <h3>Onde estamos</h3>
          <a
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin />
            {siteConfig.address}
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} E-Power. Todos os direitos reservados.
        </span>
        {siteConfig.developmentCredit && (
          <span>{siteConfig.developmentCredit}</span>
        )}
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={createWhatsAppUrl(
        "Olá! Conheci a E-Power pelo site e gostaria de mais informações.",
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com a E-Power no WhatsApp"
    >
      <MessageCircle fill="currentColor" />
      <span>Fale no WhatsApp</span>
    </a>
  );
}
