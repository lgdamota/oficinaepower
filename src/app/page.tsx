import Image from "next/image";
import {
  ArrowDown,
  Clock3,
  MapPin,
  MessageCircle,
  Navigation,
  Quote,
  Star,
  Zap,
} from "lucide-react";
import { Header } from "@/components/header";
import { FaqAccordion } from "@/components/faq";
import { ContactForm } from "@/components/contact-form";
import { FloatingWhatsApp, Footer } from "@/components/footer";
import { ExternalLink, InstagramIcon, SectionHeading } from "@/components/ui";
import {
  services,
  testimonials,
  trustPoints,
  workshopFeatures,
} from "@/data/content";
import { appointmentMessage, siteConfig } from "@/data/site";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export default function Home() {
  const appointmentUrl = createWhatsAppUrl(appointmentMessage);
  return (
    <>
      <Header />
      <main id="conteudo">
        <section className="hero" id="inicio">
          <Image
            className="hero-image"
            src="/images/epower-hero.svg"
            alt="Espaço reservado para foto principal de uma bike ou scooter elétrica da E-Power"
            fill
            priority
            sizes="100vw"
          />
          <div className="hero-overlay" />
          <div className="hero-lines" aria-hidden="true" />
          <div className="container hero-content">
            <div className="hero-copy">
              <span className="hero-badge">
                <span>
                  <Zap size={15} fill="currentColor" />
                </span>
                Assistência técnica especializada em Niterói
              </span>
              <h1>
                Cuidado especializado para sua <em>mobilidade elétrica.</em>
              </h1>
              <p>
                Diagnóstico, revisão e manutenção de bikes e scooters elétricas
                em Icaraí.
              </p>
              <div className="hero-actions">
                <ExternalLink href={appointmentUrl}>
                  <MessageCircle size={19} />
                  Agendar atendimento
                </ExternalLink>
                <a className="button secondary" href="#servicos">
                  Conhecer os serviços
                  <ArrowDown size={18} />
                </a>
              </div>
              <div className="location-line">
                <MapPin size={17} />
                {siteConfig.address}
              </div>
            </div>
          </div>
          <div className="trust-strip">
            <div className="container trust-grid">
              {trustPoints.map(({ title, icon: Icon }) => (
                <div key={title}>
                  <span>
                    <Icon />
                  </span>
                  <strong>{title}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section about" id="sobre">
          <div className="container split-grid">
            <div className="image-composition reveal-frame">
              <Image
                src="/images/epower-fachada.svg"
                alt="Espaço reservado para foto da fachada ou interior da oficina E-Power"
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
              />
              <span className="image-label">
                <Zap fill="currentColor" />
                Sua oficina em Icaraí
              </span>
              <div className="corner-mark" aria-hidden="true">
                E<span>/</span>P
              </div>
            </div>
            <div className="about-copy">
              <SectionHeading
                eyebrow="Sobre a E-Power"
                title={
                  <>
                    Especialistas em <span>mobilidade elétrica</span>
                  </>
                }
              />
              <p className="lead">
                A E-Power é uma oficina especializada em manutenção e
                assistência técnica para bikes e scooters elétricas. Localizada
                em Icaraí, oferecemos atendimento direcionado às necessidades de
                cada veículo, com foco em segurança, transparência e confiança.
              </p>
              <div className="service-grid">
                {workshopFeatures.map(({ title, icon: Icon }) => (
                  <div className="service-item" key={title}>
                    <span>
                      <Icon />
                    </span>
                    <strong>{title}</strong>
                  </div>
                ))}
              </div>
              <ExternalLink href={appointmentUrl} className="text-link">
                Falar com um especialista
              </ExternalLink>
            </div>
          </div>
        </section>

        <section className="section services-section" id="servicos">
          <div className="container">
            <SectionHeading
              eyebrow="Cuidados para sua mobilidade elétrica"
              title={
                <>
                  Serviços <span>especializados</span>
                </>
              }
              description="Conheça as possibilidades de atendimento e consulte nossa equipe para confirmar o serviço adequado ao seu veículo."
              align="center"
            />
            <div className="specialized-services-grid">
              {services.map((service) => {
                const evaluationUrl = createWhatsAppUrl(
                  `Olá! Conheci a E-Power pelo site e gostaria de solicitar uma avaliação para o serviço de ${service.title}.`,
                );
                const Icon = service.icon;
                return (
                  <article
                    className="specialized-service-card"
                    key={service.title}
                  >
                    <span className="specialized-service-icon">
                      <Icon aria-hidden="true" />
                    </span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <ExternalLink
                      href={evaluationUrl}
                      className="button primary card-button"
                      label={`Solicitar avaliação para ${service.title} pelo WhatsApp`}
                    >
                      Solicitar avaliação
                    </ExternalLink>
                  </article>
                );
              })}
            </div>
            <p className="services-disclaimer">
              Os serviços apresentados são possibilidades de atendimento. A
              realização depende da avaliação e da confirmação da equipe
              E-Power.
            </p>
          </div>
        </section>

        <section className="section workshop" id="assistencia">
          <div className="workshop-glow" aria-hidden="true" />
          <div className="container workshop-grid">
            <div className="workshop-copy">
              <SectionHeading
                eyebrow="Assistência técnica"
                title={
                  <>
                    Seu veículo elétrico merece{" "}
                    <span>atendimento especializado.</span>
                  </>
                }
              />
              <p>
                Diagnóstico, revisão e manutenção especializada para cuidar da
                segurança e do desempenho da sua bike ou scooter elétrica.
              </p>
              <div className="workshop-features">
                {workshopFeatures.map(({ title, icon: Icon }) => (
                  <div key={title}>
                    <Icon />
                    <span>{title}</span>
                  </div>
                ))}
              </div>
              <ExternalLink
                href={createWhatsAppUrl(
                  "Olá! Gostaria de solicitar uma avaliação para minha bike ou scooter elétrica.",
                )}
              >
                <MessageCircle size={18} />
                Solicitar avaliação pelo WhatsApp
              </ExternalLink>
            </div>
            <div className="image-composition workshop-image">
              <Image
                src="/images/epower-oficina.svg"
                alt="Espaço reservado para foto de veículo elétrico em avaliação na oficina E-Power"
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
                loading="lazy"
              />
              <div className="tech-stamp">
                <Zap fill="currentColor" />
                <span>
                  <strong>Assistência</strong>especializada
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="section testimonials" id="feedbacks">
          <div className="container">
            <SectionHeading
              eyebrow="Experiências E-Power"
              title={
                <>
                  O que nossos <span>clientes dizem</span>
                </>
              }
              description="Este espaço será atualizado com avaliações reais e verificadas de clientes."
              align="center"
            />
            <div className="testimonial-grid">
              {testimonials.map((item, index) => (
                <article
                  className="testimonial-card"
                  key={`${item.name}-${index}`}
                >
                  <Quote className="quote-icon" />
                  <div
                    className="stars"
                    aria-label={`${item.rating} de 5 estrelas`}
                  >
                    {Array.from({ length: item.rating }).map((_, star) => (
                      <Star key={star} fill="currentColor" />
                    ))}
                  </div>
                  <p>“{item.text}”</p>
                  <div className="reviewer">
                    <span aria-hidden="true">{index + 1}</span>
                    <div>
                      <strong>{item.name}</strong>
                      <small>Conteúdo provisório • Cliente E-Power</small>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="reviews-cta">
              {siteConfig.googleReviewsUrl ? (
                <ExternalLink
                  href={siteConfig.googleReviewsUrl}
                  className="button secondary"
                >
                  Confira nossas avaliações no Google
                </ExternalLink>
              ) : (
                <span>
                  <Star fill="currentColor" />
                  Link oficial das avaliações será adicionado em breve
                </span>
              )}
            </div>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="container faq-grid">
            <div className="faq-intro">
              <SectionHeading
                eyebrow="Tire suas dúvidas"
                title={
                  <>
                    Perguntas <span>frequentes</span>
                  </>
                }
                description="Encontre respostas rápidas ou fale diretamente com nossa equipe."
              />
              <div className="faq-help">
                <MessageCircle />
                <div>
                  <strong>Ainda tem alguma dúvida?</strong>
                  <p>Converse com a E-Power pelo WhatsApp.</p>
                  <ExternalLink href={appointmentUrl} className="text-link">
                    Falar com a equipe
                  </ExternalLink>
                </div>
              </div>
            </div>
            <FaqAccordion />
          </div>
        </section>

        <section className="section contact" id="contato">
          <div className="container">
            <SectionHeading
              eyebrow="Estamos em Icaraí"
              title={
                <>
                  Cuide da sua mobilidade elétrica <span>com atenção.</span>
                </>
              }
              description="Entre em contato para agendar atendimento ou solicitar uma avaliação na E-Power."
              align="center"
            />
            <div className="contact-grid">
              <div className="contact-info">
                <h3>{siteConfig.fullName}</h3>
                <p>{siteConfig.tagline}</p>
                <div className="contact-details">
                  <a
                    href={siteConfig.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <MapPin />
                    </span>
                    <div>
                      <small>Endereço</small>
                      <strong>{siteConfig.address}</strong>
                    </div>
                  </a>
                  <a
                    href={createWhatsAppUrl(
                      "Olá! Conheci a E-Power pelo site.",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <MessageCircle />
                    </span>
                    <div>
                      <small>WhatsApp</small>
                      <strong>{siteConfig.whatsappDisplay}</strong>
                    </div>
                  </a>
                  <div>
                    <span>
                      <Clock3 />
                    </span>
                    <div>
                      <small>Horário</small>
                      <strong>{siteConfig.hours}</strong>
                    </div>
                  </div>
                </div>
                <div className="contact-actions">
                  <ExternalLink href={appointmentUrl}>
                    <MessageCircle size={18} />
                    Chamar no WhatsApp
                  </ExternalLink>
                  <ExternalLink
                    href={siteConfig.mapsUrl}
                    className="button secondary"
                  >
                    <Navigation size={18} />
                    Como chegar
                  </ExternalLink>
                </div>
                {siteConfig.instagramUrl ? (
                  <a
                    className="social-link"
                    href={siteConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon />
                    Siga a E-Power no Instagram
                  </a>
                ) : (
                  <span className="social-link disabled">
                    <InstagramIcon />
                    Instagram oficial em breve
                  </span>
                )}
              </div>
              <ContactForm />
            </div>
            <div className="map-placeholder">
              <div>
                <MapPin />
                <strong>E-Power em Icaraí</strong>
                <span>{siteConfig.address}</span>
                <ExternalLink href={siteConfig.mapsUrl} className="text-link">
                  Abrir no Google Maps
                </ExternalLink>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
