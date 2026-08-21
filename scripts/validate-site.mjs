import { chromium } from "playwright-core";

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const baseUrl = "http://localhost:3000";
const widths = [320, 375, 430, 768, 1024, 1440, 1920];
const results = [];
const failures = [];

function check(condition, message) {
  if (!condition) failures.push(message);
}

const browser = await chromium.launch({
  executablePath: chromePath,
  headless: true,
});

try {
  for (const width of widths) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    const consoleErrors = [];
    const pageErrors = [];
    const failedRequests = [];

    page.on("console", (message) => {
      if (message.type() === "error") consoleErrors.push(message.text());
    });
    page.on("pageerror", (error) => pageErrors.push(error.message));
    page.on("requestfailed", (request) =>
      failedRequests.push(`${request.url()} — ${request.failure()?.errorText}`),
    );

    const response = await page.goto(baseUrl, { waitUntil: "networkidle" });
    check(response?.ok(), `[${width}px] A página não respondeu com HTTP 2xx.`);

    const dimensions = await page.evaluate(() => ({
      documentWidth: document.documentElement.scrollWidth,
      viewportWidth: document.documentElement.clientWidth,
      bodyWidth: document.body.scrollWidth,
    }));
    const overflow = Math.max(
      dimensions.documentWidth - dimensions.viewportWidth,
      dimensions.bodyWidth - dimensions.viewportWidth,
    );
    check(
      overflow <= 1,
      `[${width}px] Scroll horizontal detectado: ${overflow}px.`,
    );
    check(
      consoleErrors.length === 0,
      `[${width}px] Erros no console: ${consoleErrors.join(" | ")}`,
    );
    check(
      pageErrors.length === 0,
      `[${width}px] Erros de página: ${pageErrors.join(" | ")}`,
    );
    check(
      failedRequests.length === 0,
      `[${width}px] Requisições falharam: ${failedRequests.join(" | ")}`,
    );

    const heroVisible = await page.locator("#inicio h1").isVisible();
    const footerVisible = await page.locator("footer").isVisible();
    check(
      heroVisible && footerVisible,
      `[${width}px] Hero ou footer não está visível.`,
    );

    results.push({ width, overflow, consoleErrors: consoleErrors.length });
    await page.close();
  }

  const page = await browser.newPage({ viewport: { width: 375, height: 812 } });
  await page.goto(baseUrl, { waitUntil: "networkidle" });

  const menuButton = page.locator(".menu-toggle");
  await menuButton.click();
  check(
    (await menuButton.getAttribute("aria-expanded")) === "true",
    "Menu mobile não marcou aria-expanded=true.",
  );
  check(
    await page
      .locator("#mobile-navigation")
      .evaluate((el) => el.classList.contains("open")),
    "Menu mobile não abriu.",
  );
  await page.keyboard.press("Escape");
  check(
    await page
      .locator("#mobile-navigation")
      .evaluate((el) => !el.classList.contains("open")),
    "Menu mobile não fechou com Escape.",
  );

  await menuButton.click();
  await page.locator("#mobile-navigation a[href='#servicos']").click();
  await page.waitForTimeout(500);
  check(
    new URL(page.url()).hash === "#servicos",
    "Link do menu mobile não navegou para #servicos.",
  );

  check(
    (await page.locator("#servicos .service-capsule").count()) === 6,
    "A seção de serviços não contém as 6 categorias esperadas.",
  );
  await page.locator("#inicio a[href='#servicos']").click();
  await page.waitForTimeout(500);
  check(
    new URL(page.url()).hash === "#servicos",
    "O CTA Conhecer os serviços não navegou para #servicos.",
  );
  check(
    await page
      .locator("#mobile-navigation")
      .evaluate((el) => !el.classList.contains("open")),
    "Menu mobile não fechou após selecionar um link.",
  );

  const faqButtons = page.locator(".faq-item button");
  check(
    (await faqButtons.count()) === 8,
    "O FAQ não contém as 8 perguntas esperadas.",
  );
  await faqButtons.nth(1).click();
  check(
    (await faqButtons.nth(1).getAttribute("aria-expanded")) === "true",
    "A segunda pergunta do FAQ não abriu.",
  );
  check(
    (await faqButtons.nth(0).getAttribute("aria-expanded")) === "false",
    "O FAQ manteve mais de uma resposta aberta.",
  );
  await faqButtons.nth(1).press("Enter");
  check(
    (await faqButtons.nth(1).getAttribute("aria-expanded")) === "false",
    "O FAQ não respondeu ao teclado.",
  );

  check(
    (await page.locator("#unidades .unit-card").count()) === 3,
    "A seção de unidades não contém os três cards esperados.",
  );
  const expectedUnits = [
    ["icarai", "5521974914677", "Icaraí"],
    ["botafogo", "5521964452129", "Botafogo"],
    ["flamengo", "5521972161402", "Flamengo"],
  ];
  for (const [id, number, name] of expectedUnits) {
    const card = page.locator(`#unidade-${id}`);
    const whatsappHref = await card
      .locator("a[href^='https://wa.me/']")
      .getAttribute("href");
    const mapsHref = await card
      .locator("a[href^='https://www.google.com/maps/search/']")
      .getAttribute("href");
    check(
      whatsappHref?.startsWith(`https://wa.me/${number}?text=`),
      `WhatsApp incorreto no card de ${name}: ${whatsappHref}`,
    );
    check(
      whatsappHref
        ? decodeURIComponent(whatsappHref).includes(`unidade de ${name}`)
        : false,
      `Mensagem sem a unidade ${name}: ${whatsappHref}`,
    );
    check(
      Boolean(mapsHref?.includes("api=1&query=")),
      `Google Maps incorreto no card de ${name}: ${mapsHref}`,
    );
  }

  const dialog = page.locator(".unit-dialog");
  const heroTrigger = page
    .locator("#inicio")
    .getByRole("button", { name: "Agendar avaliação" });
  await heroTrigger.click();
  check(
    await dialog.evaluate((element) => element.open),
    "O seletor não abriu.",
  );
  check(
    await page.evaluate(() => document.body.classList.contains("dialog-open")),
    "O scroll do body não foi bloqueado com o seletor aberto.",
  );
  check(
    await page.locator(".unit-dialog-option").first().isFocused(),
    "O foco inicial não foi levado para uma opção do seletor.",
  );
  await page.keyboard.press("Escape");
  check(
    !(await dialog.evaluate((element) => element.open)),
    "O seletor não fechou com Escape.",
  );
  check(await heroTrigger.isFocused(), "O foco não retornou ao CTA de origem.");

  await page.evaluate(() => {
    window.open = (url) => {
      window.__openedUrl = String(url);
      return null;
    };
  });
  await page.locator("#servicos .service-capsule").first().click();
  await page.getByRole("button", { name: /unidade de Botafogo/ }).click();
  const serviceUrl = await page.evaluate(() => window.__openedUrl ?? "");
  check(
    serviceUrl.startsWith("https://wa.me/5521964452129?text="),
    "A seleção de Botafogo não abriu o número correto.",
  );
  check(
    decodeURIComponent(serviceUrl).includes(
      "para Freios na unidade de Botafogo",
    ),
    "A mensagem do serviço não preservou serviço e unidade.",
  );

  await page.locator(".floating-whatsapp").click();
  check(
    await dialog.evaluate((element) => element.open),
    "O botão flutuante não abriu o seletor.",
  );
  await page.getByRole("button", { name: "Fechar seleção de unidade" }).click();

  const form = page.locator(".contact-form");
  await form.getByRole("button", { name: "Enviar pelo WhatsApp" }).click();
  check(
    await form.getByRole("alert").isVisible(),
    "O formulário não exibiu erro ao ser enviado vazio.",
  );
  await form.getByLabel("Nome").fill("Cliente Teste");
  await form
    .getByLabel("Tipo de veículo")
    .selectOption({ label: "Bike elétrica" });
  await form
    .getByLabel("Unidade de atendimento")
    .selectOption({ label: "Flamengo — Rio de Janeiro" });
  await form.getByLabel("Serviço desejado").fill("Avaliação");
  await form.getByLabel("Mensagem").fill("Gostaria de avaliar meu veículo.");

  await form.getByRole("button", { name: "Enviar pelo WhatsApp" }).click();
  const openedUrl = await page.evaluate(() => window.__openedUrl ?? "");
  const decodedFormUrl = decodeURIComponent(openedUrl);
  check(
    openedUrl.startsWith("https://wa.me/5521972161402?text="),
    "O formulário não abriu a URL correta do WhatsApp.",
  );
  check(
    decodedFormUrl.includes("Cliente Teste") &&
      decodedFormUrl.includes("Bike elétrica") &&
      decodedFormUrl.includes("unidade de Flamengo") &&
      decodedFormUrl.includes("Gostaria de avaliar meu veículo."),
    "A mensagem montada pelo formulário está incompleta.",
  );

  const mapLinks = await page
    .locator(`a[href^="https://www.google.com/maps/search/"]`)
    .count();
  check(
    mapLinks === 3,
    "Links do Google Maps não foram encontrados nas áreas esperadas.",
  );

  await page.close();
} finally {
  await browser.close();
}

console.log("\nValidação por viewport:");
for (const result of results) {
  console.log(
    `- ${result.width}px: overflow=${result.overflow}px, consoleErrors=${result.consoleErrors}`,
  );
}

if (failures.length) {
  console.error("\nFalhas encontradas:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(
  "\nTodos os testes automatizados de responsividade e interação passaram.",
);
