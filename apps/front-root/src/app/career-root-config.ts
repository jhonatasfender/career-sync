import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import<LifeCycles>(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

registerApplication({
  name: "@career/head",
  app: () => System.import("@career/head"),
  activeWhen: [
    "/test",
    (location) => location.pathname.startsWith("/test"),
  ],
});

start({
  urlRerouteOnly: true,
});
