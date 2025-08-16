import { test, expect } from '@playwright/test';

test('Crear un proyecto completo', async ({ page }) => {
  // 1️⃣ Abrir la página del formulario
  await page.goto('http://localhost:4200/crear-proyecto');

  // 2️⃣ Completar los campos del formulario
  await page.fill('input[name="name"]', 'Mi Proyecto - Playwright Test');
  await page.fill('textarea[name="description"]', 'Descripción de prueba');
  await page.fill('input[name="category"]', 'Angular');
  await page.fill('input[name="year"]', '2025');
  await page.fill('input[name="langs"]', 'TypeScript, HTML, CSS');

  // 4️⃣ Enviar el formulario
  await page.click('input[type="submit"]');

  // 5️⃣ Verificar que se muestre mensaje de éxito
  await expect(page.locator('.message.success')).toContainText(
    'El proyecto se ha creado correctamente'
  );

  // 6️⃣ (Opcional) Verificar que el enlace al proyecto exista
  const link = page.locator('.message.success a');
  await expect(link).toHaveAttribute('href', /\/proyecto\/\w+/);
});
