import { test, expect } from "./test";

test("gets 200, from msw", async ({ page }) => {
  // this does work, but we want to use MSW to define our mocks.
  // await page.route("**/posts", (route) => {
  //   route.fulfill({
  //     status: 200,
  //     body: JSON.stringify(Array.from({ length: 200 })),
  //   });
  // });

  await page.goto("http://localhost:5173");

  await expect(page.getByText("Number of posts is 200")).toBeVisible();
});
