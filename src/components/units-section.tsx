import { MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { units } from "@/data/units";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import { ExternalLink, SectionHeading } from "./ui";

export function UnitsSection() {
  return (
    <section className="section units-section" id="unidades">
      <div className="container">
        <SectionHeading
          eyebrow="Onde estamos"
          title="Nossas unidades"
          description="Escolha a unidade mais próxima e fale diretamente com nossa equipe."
        />
        <div className="units-grid">
          {units.map((unit) => (
            <article
              className="unit-card"
              id={`unidade-${unit.id}`}
              key={unit.id}
            >
              <span className="unit-card-icon">
                <MapPin aria-hidden="true" />
              </span>
              <div className="unit-card-heading">
                <h3>{unit.name}</h3>
                <p>{unit.city}</p>
              </div>
              <div className="unit-card-details">
                <p>
                  <MapPin aria-hidden="true" />
                  <span>{unit.address}</span>
                </p>
                <p>
                  <Phone aria-hidden="true" />
                  <span>{unit.phoneDisplay}</span>
                </p>
              </div>
              <div className="unit-card-actions">
                <ExternalLink
                  href={createWhatsAppUrl(unit)}
                  label={`Falar pelo WhatsApp com a unidade de ${unit.name}`}
                >
                  <MessageCircle aria-hidden="true" />
                  Falar com a unidade
                </ExternalLink>
                <ExternalLink
                  href={unit.mapsUrl}
                  className="button secondary"
                  label={`Como chegar à unidade de ${unit.name}`}
                >
                  <Navigation aria-hidden="true" />
                  Como chegar
                </ExternalLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
