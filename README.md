# E-Power — Oficina de Bikes e Scooters Elétricas

Landing page responsiva em Next.js, React, TypeScript, Tailwind CSS e Lucide React.

## Executar localmente

```bash
npm run dev
```

Abra `http://localhost:3000`.

## Validações

```bash
npm run lint
npm run typecheck
npm run build
```

Com o servidor local ativo, execute a validação automatizada de responsividade e interações no Chrome instalado:

```bash
npm run validate:ui
```

O roteiro cobre as larguras de 320, 375, 430, 768, 1024, 1440 e 1920 px, overflow horizontal, erros de console, menu mobile, navegação, FAQ, links de WhatsApp, formulário e Google Maps.

## Onde editar o conteúdo

- **Dados da oficina, horário, Instagram, Google Maps e avaliações:** `src/data/site.ts`
- **Serviços e feedbacks provisórios:** `src/data/content.ts`
- **Perguntas frequentes:** `src/data/content.ts`, no array `faqItems`
- **Mensagens e número do WhatsApp:** `src/data/site.ts` e `src/lib/whatsapp.ts`
- **Imagens:** `public/images/`
- **Metadados e dados estruturados:** `src/app/layout.tsx`
- **Cores, espaçamentos e responsividade:** `src/app/globals.css`
- **Crédito de desenvolvimento:** campo `developmentCredit` em `src/data/site.ts`

## Substituição das imagens

Os arquivos SVG em `public/images/` são placeholders locais claramente identificados. Ao receber as fotos reais, prefira convertê-las para WebP/AVIF e atualize os caminhos no `src/app/page.tsx`.

Nomes recomendados:

- `epower-hero.webp`
- `epower-fachada.webp`
- `epower-oficina.webp`

## Publicação e Open Graph

Defina `NEXT_PUBLIC_SITE_URL` com a URL pública do site para gerar URLs absolutas corretas nos metadados, por exemplo:

```env
NEXT_PUBLIC_SITE_URL=https://www.dominio-da-epower.com.br
```

Nenhum horário, avaliação, marca atendida ou procedimento técnico não confirmado foi adicionado. A lista de serviços em `src/data/content.ts` é editorial e deve ser validada com a E-Power antes da publicação final.
