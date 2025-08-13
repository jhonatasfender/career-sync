/* eslint-disable cypress/no-force */
import { faker } from "@faker-js/faker";

describe("Gerenciamento de Perfil", () => {
  before(() => {
    cy.signup();
  });

  beforeEach(() => {
    const { email, password } = Cypress.env("creds");
    cy.loginSession(email, password);

    cy.intercept("GET", "**/api/profile").as("getProfiles");
    cy.intercept("POST", "**/api/profile").as("createProfile");
    cy.intercept("PATCH", "**/api/profile/*").as("updateProfile");
    cy.intercept("DELETE", "**/api/profile/*").as("deleteProfile");
  });

  describe("Criar Links de Perfil", () => {
    it("Deve criar um novo perfil social com dados válidos", () => {
      cy.visit("/dashboard/profiles");
      cy.wait("@getProfiles");

      const profileData = {
        network: "LinkedIn",
        username: faker.internet.username(),
        url: faker.internet.url(),
        icon: "linkedin",
      };

      cy.get('button[data-cy="add-profile"]').should("not.be.disabled").click();

      cy.get('input[name="network"]').type(profileData.network);
      cy.get('input[name="username"]').type(profileData.username);
      cy.get('input[placeholder^="https"]').type(profileData.url);
      cy.get('input[name="icon"]').type(profileData.icon);

      cy.contains("button", "Create").click();

      cy.wait("@createProfile");
      cy.wait("@getProfiles");

      cy.get(".group").contains("h3", profileData.network).should("be.visible");
      cy.get(".group").contains("p", `@${profileData.username}`).should("be.visible");
      cy.get(".group")
        .contains("a", profileData.url)
        .should("have.attr", "href", profileData.url)
        .and("have.attr", "target", "_blank");
    });

    it("Deve exibir erro ao tentar criar perfil com URL inválida", () => {
      cy.visit("/dashboard/profiles");
      cy.wait("@getProfiles");

      cy.get('button[data-cy="add-profile"]').should("not.be.disabled").click();

      cy.get('input[name="network"]').type("Test Network");
      cy.get('input[name="username"]').type("testuser");
      cy.get('input[placeholder^="https"]').type("invalid-url");
      cy.get('input[name="icon"]').type("test");

      cy.contains("button", "Create").click();

      cy.contains("URL must start with https://").should("be.visible");
    });

    it("Deve criar múltiplos perfis corretamente", () => {
      cy.visit("/dashboard/profiles");
      cy.wait("@getProfiles");

      const profiles = [
        {
          network: "GitHub",
          username: faker.internet.username(),
          url: faker.internet.url(),
          icon: "github",
        },
        {
          network: "LinkedIn",
          username: faker.internet.username(),
          url: faker.internet.url(),
          icon: "linkedin",
        },
        {
          network: "Twitter",
          username: faker.internet.username(),
          url: faker.internet.url(),
          icon: "twitter",
        },
      ];

      for (const profile of profiles) {
        cy.get('button[data-cy="add-profile"]').should("not.be.disabled").click();

        cy.get('input[name="network"]').type(profile.network);
        cy.get('input[name="username"]').type(profile.username);
        cy.get('input[placeholder^="https"]').type(profile.url);
        cy.get('input[name="icon"]').type(profile.icon);

        cy.contains("button", "Create").click();

        cy.wait("@createProfile");
        cy.wait("@getProfiles");
      }

      for (const profile of profiles) {
        cy.get(".group").contains("h3", profile.network).should("be.visible");
        cy.get(".group").contains("p", `@${profile.username}`).should("be.visible");
      }
    });
  });

  describe("Visualizar Links de Perfil", () => {
    beforeEach(() => {
      cy.visit("/dashboard/profiles");
      cy.wait("@getProfiles");

      cy.get('button[data-cy="add-profile"]').should("not.be.disabled").click();
      cy.get('input[name="network"]').type("Test Network");
      cy.get('input[name="username"]').type("testuser");
      cy.get('input[placeholder^="https"]').type("https://example.com");
      cy.get('input[name="icon"]').type("test");
      cy.contains("button", "Create").click();
      cy.wait("@createProfile");
      cy.wait("@getProfiles");
    });

    it("Deve exibir corretamente os perfis existentes", () => {
      cy.visit("/dashboard/profiles");
      cy.wait("@getProfiles");

      cy.get(".group").should("have.length.at.least", 1);
      cy.get(".group").contains("h3", "Test Network").should("be.visible");
      cy.get(".group").contains("p", "@testuser").should("be.visible");
      cy.get(".group")
        .contains("a", "https://example.com")
        .should("have.attr", "href", "https://example.com")
        .and("have.attr", "target", "_blank");
    });
  });

  describe("Atualizar Links de Perfil", () => {
    beforeEach(() => {
      cy.visit("/dashboard/profiles");
      cy.wait("@getProfiles");

      cy.get('button[data-cy="add-profile"]').should("not.be.disabled").click();
      cy.get('input[name="network"]').type("Original Network");
      cy.get('input[name="username"]').type("originaluser");
      cy.get('input[placeholder^="https"]').type("https://original.com");
      cy.get('input[name="icon"]').type("original");
      cy.contains("button", "Create").click();
      cy.wait("@createProfile");
      cy.wait("@getProfiles");
    });

    it("Deve atualizar um perfil existente com sucesso", () => {
      cy.visit("/dashboard/profiles");
      cy.wait("@getProfiles");

      const updatedData = {
        network: "Updated Network",
        username: "updateduser",
        url: "https://updated.com",
        icon: "updated",
      };

      cy.get(".group")
        .contains("h3", "Original Network")
        .closest(".group")
        .trigger("mouseover")
        .find('[data-cy="edit-profile"]')
        .click({ force: true });

      cy.get('input[name="network"]').clear().type(updatedData.network);
      cy.get('input[name="username"]').clear().type(updatedData.username);
      cy.get('input[placeholder^="https"]').clear().type(updatedData.url);
      cy.get('input[name="icon"]').clear().type(updatedData.icon);

      cy.contains("button", "Save Changes").click();

      cy.wait("@updateProfile");
      cy.wait("@getProfiles");

      cy.get(".group").contains("h3", updatedData.network).should("be.visible");
      cy.get(".group").contains("p", `@${updatedData.username}`).should("be.visible");
      cy.get(".group").contains("a", updatedData.url).should("have.attr", "href", updatedData.url);
    });
  });

  describe("Excluir Links de Perfil", () => {
    beforeEach(() => {
      cy.visit("/dashboard/profiles");
      cy.wait("@getProfiles");

      cy.get('button[data-cy="add-profile"]').should("not.be.disabled").click();
      cy.get('input[name="network"]').type("Delete Test Network");
      cy.get('input[name="username"]').type("deletetestuser");
      cy.get('input[placeholder^="https"]').type("https://deletetest.com");
      cy.get('input[name="icon"]').type("deletetest");
      cy.contains("button", "Create").click();
      cy.wait("@createProfile");
      cy.wait("@getProfiles");
    });

    it("Deve excluir um perfil após confirmação", () => {
      cy.visit("/dashboard/profiles");
      cy.wait("@getProfiles");

      cy.get(".group").contains("h3", "Delete Test Network").should("be.visible");
      cy.get(".group")
        .contains("h3", "Delete Test Network")
        .closest(".group")
        .trigger("mouseover")
        .find('[data-cy="delete-profile"]')
        .click({ force: true });
      cy.contains("button", "Delete").click();

      cy.wait("@deleteProfile");
      cy.wait("@getProfiles");

      cy.get(".group").contains("h3", "Delete Test Network").should("not.exist");
    });

    it("Não deve excluir o perfil quando cancelar a ação", () => {
      cy.visit("/dashboard/profiles");
      cy.wait("@getProfiles");

      cy.get(".group").contains("h3", "Delete Test Network").should("be.visible");
      cy.get(".group")
        .contains("h3", "Delete Test Network")
        .closest(".group")
        .trigger("mouseover")
        .find('[data-cy="delete-profile"]')
        .click({ force: true });
      cy.contains("button", "Cancel").click();

      cy.get(".group").contains("h3", "Delete Test Network").should("be.visible");
    });
  });
});
