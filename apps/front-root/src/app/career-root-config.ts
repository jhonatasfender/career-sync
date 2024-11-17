import { registerApplication, start } from 'single-spa';

registerApplication({
  name: '@career/head',
  app: () => import('http://localhost:59284/career-head.js'),
  activeWhen: ['/'],
});

start({
  urlRerouteOnly: false,
});
