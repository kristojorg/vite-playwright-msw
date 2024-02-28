import { test, expect } from "@playwright/test";

test("gets 200, from msw", async ({ page }) => {
  // await page.route("**/posts", (route) => {
  //   route.fulfill({
  //     status: 200,
  //     body: JSON.stringify(Array.from({ length: 200 })),
  //   });
  // });

  await page.goto("http://localhost:5173");

  await expect(page.getByText("Number of posts is 200")).toBeVisible();
});
