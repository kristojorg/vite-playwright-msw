import { test as base, expect } from "@playwright/test";
import { http } from "msw";
import type { MockServiceWorker } from "playwright-msw";
import { createWorkerFixture } from "playwright-msw";

import { handlers } from "../src/msw/handlers";

const test = base.extend<{
  worker: MockServiceWorker;
  http: typeof http;
}>({
  worker: createWorkerFixture(handlers, {
    // don't wait for page load because local requests hsould be passed through
    waitForPageLoad: false,
  }),
  http,
});

export { expect, test };
