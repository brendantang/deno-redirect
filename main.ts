import { serve } from "https://deno.land/std@0.186.0/http/server.ts";

const url = Deno.env.get("URL");

if (!(typeof url == "string")) {
  throw ("URL not defined");
} else {
  await serve(function (_req: Request): Response {
    return Response.redirect(url);
  }, {
    onListen: () => {
      console.log(`Redirecting to ${url}`);
    },
  });
}
