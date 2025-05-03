/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to login with email and password
       * @example cy.login('user@email.com', 'password123')
       */
      login(email: string, password: string): Chainable<Element>;

      /**
       * Custom command to repeat a block of code n times
       * @example cy.repeat(3, () => { cy.get('button').click() })
       */
      repeat(count: number, callback: () => void): void;

      /**
       * Custom command to type text in a contenteditable element
       * @example cy.typeInContentEditable('Some text to type')
       */
      typeInContentEditable(text: string): Chainable<Element>;

      loginSession(email: string, password: string): Chainable<void>;
      signup(): Chainable<void>;
    }
  }
}

export {};
