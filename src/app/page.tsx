import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  Clock3,
  MapPin,
  MessageCircle,
  Navigation,
  Star,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { FaqAccordion } from "@/components/faq";
import { FloatingWhatsApp, Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ExternalLink, InstagramIcon, SectionHeading } from "@/components/ui";
import {
  serviceCategories,
  testimonials,
  workshopBenefits,
  workshopFacts,
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
          <div className="hero-word" aria-hidden="true">
            E-POWER
          </div>
          <div className="container hero-grid">
            <div className="hero-media">
              <Image
                src="/images/bike2.png"
                alt="Oficina especializada em bicicleta elétrica"
                fill
                priority
                quality={90}
                sizes="(max-width: 800px) 100vw, 55vw"
              />
            </div>
            <div className="hero-copy">
              <span className="eyebrow">
                Oficina especializada em mobilidade elétrica
              </span>
              <h1>
                Manutenção especializada para sua bike ou{" "}
                <span>scooter elétrica.</span>
              </h1>
              <p>
                Diagnóstico, revisão e manutenção com atendimento especializado
                em Icaraí, Niterói.
              </p>
              <div className="hero-actions">
                <ExternalLink href={appointmentUrl}>
                  <MessageCircle />
                  Agendar avaliação
                </ExternalLink>
                <a className="button secondary" href="#servicos">
                  Conhecer os serviços
                  <ArrowDown />
                </a>
              </div>
              <div className="location-line">
                <MapPin />
                Rua Gavião Peixoto, 31 — Icaraí
              </div>
            </div>
          </div>
        </section>

        <section className="section benefits">
          <div className="container">
            <SectionHeading
              eyebrow="Cuidado técnico"
              title={
                <>
                  Por que cuidar da sua mobilidade elétrica com a{" "}
                  <span>E-Power?</span>
                </>
              }
              description="Uma oficina preparada para avaliar os sistemas mecânicos e elétricos da sua bike ou scooter."
            />
            <div className="benefits-layout">
              <div className="benefit-column">
                {workshopBenefits.slice(0, 3).map((item) => (
                  <Benefit key={item.title} {...item} />
                ))}
              </div>
              <div className="benefits-media">
                <Image
                  src="/images/oficina3.png"
                  alt="Área técnica da oficina E-Power especializada em mobilidade elétrica"
                  fill
                  quality={90}
                  sizes="(max-width: 800px) 100vw, 38vw"
                />
              </div>
              <div className="benefit-column">
                {workshopBenefits.slice(3).map((item) => (
                  <Benefit key={item.title} {...item} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section services-section" id="servicos">
          <div className="container services-intro">
            <SectionHeading
              eyebrow="Serviços mecânicos e técnicos"
              title={
                <>
                  Cuidado completo para o seu <span>veículo elétrico</span>
                </>
              }
              description="Da avaliação inicial à manutenção preventiva, cada serviço é realizado de acordo com as necessidades do veículo."
            />
            <ExternalLink href={appointmentUrl}>
              Solicitar uma avaliação
            </ExternalLink>
          </div>
          <div className="container services-layout">
            <div className="services-media">
              <Image
                src="/images/oficina2.png"
                alt="Serviços mecânicos e técnicos realizados na oficina E-Power"
                fill
                quality={90}
                sizes="(max-width: 800px) 100vw, 38vw"
              />
            </div>
            <div className="service-capsules">
              {serviceCategories.map(({ title, description, icon: Icon }) => {
                const url = createWhatsAppUrl(
                  `Olá! Conheci a E-Power pelo site e gostaria de agendar uma avaliação para o serviço de ${title}.`,
                );
                return (
                  <a
                    className="service-capsule"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={title}
                    aria-label={`Solicitar avaliação para ${title}`}
                  >
                    <span>
                      <Icon />
                    </span>
                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                    <ArrowRight className="capsule-arrow" />
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section about" id="sobre">
          <div className="container about-grid">
            <div className="about-media">
              <Image
                src="/images/oficina1.png"
                alt="Estrutura da oficina E-Power especializada em bikes e scooters elétricas"
                fill
                quality={90}
                sizes="(max-width: 800px) 100vw, 48vw"
              />
            </div>
            <div className="about-copy">
              <SectionHeading
                eyebrow="Sobre a oficina"
                title={
                  <>
                    Uma oficina especializada em bikes e{" "}
                    <span>scooters elétricas</span>
                  </>
                }
              />
              <p className="lead">
                A E-Power oferece atendimento especializado para quem busca
                cuidar da segurança, do funcionamento e do desempenho da sua
                bike ou scooter elétrica. Estamos em Icaraí, com uma estrutura
                preparada para avaliação e manutenção.
              </p>
              <div className="fact-list">
                {workshopFacts.map(({ title, icon: Icon }) => (
                  <div key={title}>
                    <span>
                      <Icon />
                    </span>
                    <strong>{title}</strong>
                  </div>
                ))}
              </div>
              <ExternalLink href={appointmentUrl} className="text-link">
                Conversar com a equipe
              </ExternalLink>
            </div>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="container faq-shell">
            <div className="faq-card">
              <SectionHeading
                eyebrow="Perguntas frequentes"
                title={
                  <>
                    Ficou com alguma <span>dúvida?</span>
                  </>
                }
                description="Informações objetivas sobre avaliação e manutenção na oficina."
              />
              <FaqAccordion />
            </div>
          </div>
        </section>

        <section className="section testimonials" id="feedbacks">
          <div className="container">
            <div className="reviews-heading">
              <SectionHeading
                eyebrow="Experiências reais"
                title={
                  <>
                    O que nossos <span>clientes dizem</span>
                  </>
                }
                description="Transparência também significa publicar somente avaliações reais e verificadas."
              />
              {siteConfig.googleReviewsUrl && (
                <ExternalLink
                  href={siteConfig.googleReviewsUrl}
                  className="button secondary"
                >
                  Ver no Google
                </ExternalLink>
              )}
            </div>
            {testimonials.length ? (
              <div className="testimonial-grid">
                {testimonials.map((item) => (
                  <article
                    className="testimonial-card"
                    key={`${item.name}-${item.text}`}
                  >
                    <div
                      className="stars"
                      aria-label={`${item.rating} de 5 estrelas`}
                    >
                      {Array.from({ length: item.rating }).map((_, index) => (
                        <Star key={index} fill="currentColor" />
                      ))}
                    </div>
                    <p>“{item.text}”</p>
                    <strong>{item.name}</strong>
                  </article>
                ))}
              </div>
            ) : (
              <div className="reviews-empty">
                <div>
                  <Star />
                  <strong>Avaliações reais em breve</strong>
                </div>
                <p>
                  Este espaço está preparado para receber feedbacks verdadeiros
                  e autorizados. Enquanto o link oficial do Google não estiver
                  cadastrado, nenhum depoimento fictício será exibido.
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="final-cta">
          <div className="container final-cta-content">
            <span className="eyebrow">Atendimento em Icaraí</span>
            <h2>Sua bike ou scooter precisa de atenção?</h2>
            <p>Fale com a E-Power e agende uma avaliação especializada.</p>
            <div>
              <ExternalLink href={appointmentUrl}>
                <MessageCircle />
                Agendar pelo WhatsApp
              </ExternalLink>
              <ExternalLink href={siteConfig.mapsUrl} className="button light">
                <Navigation />
                Como chegar
              </ExternalLink>
            </div>
          </div>
        </section>

        <section className="section contact" id="contato">
          <div className="container contact-heading">
            <SectionHeading
              eyebrow="Contato"
              title={
                <>
                  Vamos avaliar o que seu veículo <span>precisa.</span>
                </>
              }
              description="Envie as informações pelo WhatsApp ou visite a oficina em Icaraí."
            />
          </div>
          <div className="container contact-grid">
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
                  href={appointmentUrl}
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
                  <MessageCircle />
                  Chamar no WhatsApp
                </ExternalLink>
                <ExternalLink
                  href={siteConfig.mapsUrl}
                  className="button secondary"
                >
                  <Navigation />
                  Traçar rota
                </ExternalLink>
                <ExternalLink
                  href={siteConfig.googleReviewsUrl}
                  className="button secondary"
                >
                  <Star />
                  Ver avaliações no Google
                </ExternalLink>
              </div>
              {siteConfig.instagramUrl && (
                <a
                  className="social-link"
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon />
                  Instagram da E-Power
                </a>
              )}
            </div>
            <ContactForm />
          </div>
          <div className="container map-card">
            <div>
              <MapPin />
              <span>
                <strong>E-Power em Icaraí</strong>
                {siteConfig.address}
              </span>
            </div>
            <ExternalLink href={siteConfig.mapsUrl} className="text-link">
              Abrir no Google Maps
            </ExternalLink>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

function Benefit({
  title,
  description,
  icon: Icon,
}: (typeof workshopBenefits)[number]) {
  return (
    <article className="benefit-item">
      <span>
        <Icon />
      </span>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
