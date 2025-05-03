import "./types";

import { faker } from "@faker-js/faker";

Cypress.Commands.add("login", (email: string, password: string) => {
  cy.visit("/auth/login");
  cy.get('input[name="identifier"]').type(email);
  cy.get('input[name="password"]').type(password);
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add("loginSession", (email: string, password: string) => {
  cy.session([email, password], () => {
    cy.login(email, password);
    cy.url().should("include", "/dashboard");
  });

  cy.visit("/dashboard");
});

Cypress.Commands.add("signupViaUI", () => {
  const creds = { email: faker.internet.email(), password: faker.internet.password() };

  cy.session(creds.email, () => {
    cy.viewport(1920, 1080);
    cy.visit("/");
    cy.contains("Get Started").click();
    cy.contains("Create one now").click();

    cy.get('input[name="name"]').type(faker.person.fullName());
    cy.get('input[name="username"]').type(faker.internet.username());
    cy.get('input[name="email"]').type(creds.email);
    cy.get('input[name="password"]').type(creds.password);
    cy.contains("Sign up").click();
    cy.contains("Go to Dashboard").click();
  });

  Cypress.env("creds", creds);
});

Cypress.Commands.add("repeat", (count: number, cb: () => void) => {
  for (let i = 0; i < count; i++) cb();
});

Cypress.Commands.add("typeInContentEditable", (text: string) => {
  cy.get('[contenteditable="true"]')
    .should("be.visible")
    .click()
    .type(text, { parseSpecialCharSequences: false });
});
