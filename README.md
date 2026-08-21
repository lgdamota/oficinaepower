# E-Power — landing page editorial

Site institucional da oficina E-Power, especializada em manutenção de bikes e scooters elétricas em Icaraí, Niterói. Construído com Next.js, React, TypeScript e Lucide React.

## Executar localmente

```bash
npm run dev
```

Abra `http://localhost:3000`.

## Onde editar o conteúdo

- **Serviços, benefícios, perguntas, feedbacks e caminhos das imagens:** `src/data/content.ts`
- **WhatsApp, endereço, horário, Instagram, avaliações do Google e mapa:** `src/data/site.ts`
- **Textos e composição das seções:** `src/app/page.tsx`
- **Paleta, tipografia e responsividade:** `src/app/globals.css`
- **Metadados e dados estruturados:** `src/app/layout.tsx`

## Fotografias

Os arquivos atuais em `public/images/` são áreas provisórias, pois fotografias reais não estavam disponíveis no repositório durante o redesign. Substitua-os por fotos reais da E-Power mantendo os mesmos nomes, ou altere os caminhos no objeto `siteImages` em `src/data/content.ts`.

Prefira WebP/AVIF em boa resolução. O layout usa `object-fit: cover`; o foco de cada fotografia pode ser refinado com `object-position` em `src/app/globals.css`.

## Feedbacks

O array `testimonials` começa vazio para impedir a publicação de depoimentos fictícios. Preencha apenas com avaliações reais e autorizadas. O link oficial de avaliações deve ser informado em `siteConfig.googleReviewsUrl`.

## Validação

```bash
npm run lint
npm run typecheck
npm run build
```

Com o servidor local ativo, execute:

```bash
npm run validate:ui
```

O roteiro cobre 320, 375, 430, 768, 1024, 1440 e 1920 px, overflow horizontal, console, menu mobile, navegação interna, FAQ, WhatsApp, formulário e Google Maps.

Para metadados absolutos, configure `NEXT_PUBLIC_SITE_URL` com a URL pública do site.
