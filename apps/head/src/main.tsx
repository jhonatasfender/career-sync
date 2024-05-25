// import { StrictMode } from 'react';
// import * as ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';

// import App from './app/app';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement,
// );
// root.render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StrictMode>,
// );

import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./app/app";

const lifeCycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  // errorBoundary(err:any, info:any, props:any) {
  //   // Customize the root error boundary for your microfrontend here.
  //   return null;
  // },
});

export const { bootstrap, mount, unmount } = lifeCycles;
