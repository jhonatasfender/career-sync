import { LifeCycles, registerApplication, start } from 'single-spa';

console.log('test');

// registerApplication({
//   name: '@single-spa/welcome',
//   app: () =>
//     System.import<LifeCycles>(
//       'https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js'
//     ),
//   activeWhen: ['/'],
// });

// registerApplication({
//   name: '@career/root-config',
//   app: () => System.import('@career/root-config'),
//   activeWhen: ['/'],
// });

// registerApplication({
//   name: '@career/head',
//   app: () => System.import('@career/head'),
//   activeWhen: (location) => location.pathname.startsWith('/test'),
// });

// registerApplication(
//   '@career/head',
//   () => System.import('@career/head'),
//   (location) => location.pathname.startsWith('/test'),
//   { some: 'value' }
// );

registerApplication({
  name: '@career/head',
  app: () => System.import<LifeCycles>('@career/head'),
  activeWhen: ['/'],
});

start({
  urlRerouteOnly: false,
});
