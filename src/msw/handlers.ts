import { HttpResponse, RequestHandler, http, passthrough } from "msw";

export const handlers: Array<RequestHandler> = [
  http.get("https://jsonplaceholder.typicode.com/posts", () => {
    return HttpResponse.json(Array.from({ length: 200 }));
  }),
  // this one doesn't work
  http.get("http://localhost:5173/*", passthrough),

  // this one does work
  // http.get("http://localhost:5173/*", ({ request }) => {
  //   return fetch(request);
  // }),
];
