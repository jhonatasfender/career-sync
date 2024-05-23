/* eslint-disable @typescript-eslint/prefer-namespace-keyword */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-var */

// declare namespace System {
//   interface SystemI {
//     import<T = any>(name: string): Promise<any>;
//     import<T = any>(name: 'aurelia-framework'): Promise<typeof Aurelia>;
//     import<T = any>(name: 'isomorphic-fetch'): Promise<typeof fetch>;
//   }

//   export default SystemI;
// }

// declare namespace System {
//   function import<T = any>(name: string): Promise<T>;
// }

declare var System: {
  import<T = any>(name: string): Promise<T>;
};
