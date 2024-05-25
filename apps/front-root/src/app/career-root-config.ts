import { LifeCycles, registerApplication, start } from 'single-spa';

registerApplication({
  name: '@single-spa/welcome',
  app: () =>
    System.import<LifeCycles>(
      'https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js'
    ),
  activeWhen: ['/'],
});

// registerApplication({
//   name: '@career/head',
//   app: () => System.import('@career/head'),
//   activeWhen: (location) => location.pathname.startsWith('/test'),
// });

registerApplication(
  '@career/head',
  () => System.import('@career/head'),
  (location) => location.pathname.startsWith('/test'),
  { some: 'value' }
);

start({
  urlRerouteOnly: true,
});
