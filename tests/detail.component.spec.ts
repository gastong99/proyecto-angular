import { test, expect } from '@playwright/test';

test.describe('Detalle de proyecto', () => {

  const proyectoId = '689ffa3824e89d3105a857c9'; // Puedes usar un proyecto de prueba en tu DB

  test.beforeEach(async ({ page }) => {
    // Abrir la página de detalles del proyecto
    await page.goto(`http://localhost:4200/proyecto/${proyectoId}`);
  });

  test('Debería mostrar los datos del proyecto', async ({ page }) => {
    // Validar que se vea el nombre, descripción y categoría
    await expect(page.locator('h1')).not.toBeEmpty();
    await expect(page.locator('h3')).not.toBeEmpty();
    await expect(page.locator('p.category')).not.toBeEmpty();
    await expect(page.locator('p.langs')).not.toBeEmpty();
  });

  test('Botón Editar debe redirigir a editar-proyecto', async ({ page }) => {
    await page.click('a.button-edit'); // Clic en "Editar"
    await expect(page).toHaveURL(/\/editar-proyecto\//); // URL contiene /editar-proyecto/
  });

  test('Mostrar confirmación al presionar Borrar y Cancelar', async ({ page }) => {
    await page.click('a.button-delete'); // Clic en "Borrar"
    await expect(page.locator('span.confirm')).toBeVisible(); // Confirmación aparece
    await page.click('a.button-edit'); // Clic en "Cancelar"
    await expect(page.locator('span.confirm')).toHaveCount(0); // Confirmación desaparece
  });

  // Test de eliminación (opcional, usar solo si hay un proyecto de prueba)
  test.skip('Eliminar proyecto', async ({ page }) => {
    await page.click('a.button-delete');
    await page.click('a.button-delete:has-text("Eliminar definitivamente")');
    // Validar que ya no exista el proyecto (puede variar según tu implementación)
    await expect(page).toHaveURL('http://localhost:4200/proyectos');
  });

});
