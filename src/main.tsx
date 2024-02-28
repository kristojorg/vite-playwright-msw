import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }
  console.log("Not Enabling mocking");

  // This is commented out because we don't want to use the service worker
  // to mock requests in playwright. We want to use playwright-msw and playwrights
  // built in route mocking.

  // const { worker } = await import("./msw/browser");

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  // return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
