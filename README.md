# E-Power — landing page editorial

Site institucional da oficina E-Power, especializada em manutenção de bikes e scooters elétricas, com unidades em Icaraí, Botafogo e Flamengo. Construído com Next.js, React, TypeScript e Lucide React.

## Executar localmente

```bash
npm run dev
```

Abra `http://localhost:3000`.

## Onde editar o conteúdo

- **Serviços, benefícios, perguntas, feedbacks e caminhos das imagens:** `src/data/content.ts`
- **Unidades, endereços, telefones, WhatsApp e mapas:** `src/data/units.ts`
- **Dados institucionais, horário, Instagram e avaliações do Google:** `src/data/site.ts`
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

O roteiro cobre 320, 375, 430, 768, 1024, 1440 e 1920 px, overflow horizontal, console, menu mobile, navegação interna, FAQ, seletor acessível de unidade, os três WhatsApps, formulário e Google Maps.

## Atualizar unidades

Edite exclusivamente o array `units` em `src/data/units.ts`. Os cards, o seletor, o formulário, o footer, as mensagens do WhatsApp e os links do Google Maps usam esse array como fonte única. A URL do mapa é gerada automaticamente a partir do endereço, sem chave de API.

Para metadados absolutos, configure `NEXT_PUBLIC_SITE_URL` com a URL pública do site.
