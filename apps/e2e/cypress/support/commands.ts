// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
// ***********************************************

import "./types";

Cypress.Commands.add("login", (email: string, password: string) => {
  cy.visit("/login");
  cy.get('input[name="email"]').type(email);
  cy.get('input[name="password"]').type(password);
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add("repeat", (count: number, callback: () => void) => {
  for (let i = 0; i < count; i++) {
    callback();
  }
});

Cypress.Commands.add("typeInContentEditable", (text: string) => {
  cy.get('[contenteditable="true"]').should("be.visible").click().type(text);
});

// Add more custom commands here
