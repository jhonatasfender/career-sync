import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./app";

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
