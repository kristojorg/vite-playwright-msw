import { HttpResponse, RequestHandler, http } from "msw";

export const handlers: Array<RequestHandler> = [
  http.get("https://jsonplaceholder.typicode.com/posts", () => {
    return HttpResponse.json(Array.from({ length: 200 }));
  }),
];
