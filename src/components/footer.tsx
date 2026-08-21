import { MapPin, MessageCircle } from "lucide-react";
import { navItems, siteConfig } from "@/data/site";
import { units } from "@/data/units";
import { UnitSelectorTrigger } from "./unit-selector";
import { InstagramIcon, Logo } from "./ui";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>{siteConfig.tagline}</p>
          <strong>E-Power — Mobilidade elétrica inteligente.</strong>
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
          <UnitSelectorTrigger
            className="footer-action"
            showArrow={false}
            ariaLabel="Escolher uma unidade para falar com a E-Power"
          >
            <MessageCircle />
            Escolher unidade no WhatsApp
          </UnitSelectorTrigger>
          {siteConfig.instagramUrl ? (
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
              Instagram
            </a>
          ) : (
            <span className="muted-link">
              <InstagramIcon />
              Instagram oficial em breve
            </span>
          )}
        </div>
        <div>
          <h3>Nossas unidades</h3>
          {units.map((unit) => (
            <a href={`#unidade-${unit.id}`} key={unit.id}>
              <MapPin />
              {unit.name} — {unit.city}
            </a>
          ))}
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
    <UnitSelectorTrigger
      className="floating-whatsapp"
      showArrow={false}
      ariaLabel="Conversar com a E-Power no WhatsApp"
    >
      <MessageCircle fill="currentColor" />
      <span>Fale no WhatsApp</span>
    </UnitSelectorTrigger>
  );
}
