import { faker } from "@faker-js/faker";

describe("Login Page", () => {
  it("should display login form", () => {
    cy.intercept("GET", "**/api/profile").as("profile");
    cy.intercept("GET", "**/api/summary").as("summary");
    cy.intercept("POST", "**/api/profile").as("createProfile");
    cy.intercept("GET", "**/api/experience").as("experience");

    cy.viewport(1920, 1080);
    cy.visit("http://localhost:5173");

    cy.contains("Get Started").click();

    cy.contains("Create one now").click();

    cy.get('input[name="name"]').type(faker.person.fullName());
    cy.get('input[name="username"]').type(faker.internet.username());
    cy.get('input[name="email"]').type(faker.internet.email());
    cy.get('input[name="password"]').type(faker.internet.password());
    cy.contains("Sign up").click();

    cy.contains("Go to Dashboard").click();

    /**
     * Personal basic info
     */
    cy.contains("Personal").click();
    cy.contains("Basic Info").click();

    cy.get('input[id="basics.name"]').type(faker.person.fullName());
    cy.get('input[id="basics.headline"]').type(faker.person.jobTitle());

    cy.get('input[id="basics.email"]').type(faker.internet.email());
    cy.get('input[id="basics.url"]').type(faker.internet.url());

    const ddd = faker.number.int({ min: 11, max: 99 });
    const firstPart = faker.number.int({ min: 91_000, max: 99_999 });
    const secondPart = faker.number.int({ min: 1000, max: 9999 });
    const phoneNumber = `+55 (${ddd}) ${firstPart}-${secondPart}`;

    cy.get('input[id="basics.phone"]').type(phoneNumber);

    cy.get('input[id="basics.location"]').type(faker.location.streetAddress());

    cy.contains("Save Changes").click();
    /**
     * fim
     */

    /**
     * Summary
     */
    cy.contains("Summary").click();
    cy.url().should("include", "/summary");
    cy.wait("@summary");

    cy.get(".prose").should("be.visible");
    cy.get('[contenteditable="true"]').should("exist").and("be.visible");

    cy.get('[contenteditable="true"]').should("be.visible").click();

    const summary = faker.lorem.paragraph().replace(/\n/g, " ");
    cy.get('[contenteditable="true"]').should("be.visible").type(summary);

    cy.get('[contenteditable="true"]').should("contain", summary);

    cy.contains("Save").click();
    /**
     * fim
     */

    /**
     * Profile
     */
    cy.contains("Profiles").click();
    cy.url().should("include", "/profiles");
    cy.wait("@profile");

    cy.repeat(3, () => {
      const network = faker.internet.domainWord();
      const username = faker.internet.username();
      const url = faker.internet.url();
      const icon = faker.helpers.arrayElement([
        "github",
        "linkedin",
        "twitter",
        "facebook",
        "instagram",
      ]);

      cy.get('button[data-cy="add-profile"]', { timeout: 10_000 })
        .should("be.visible")
        .should("not.be.disabled")
        .click();

      cy.get('input[name="network"]').type(network);
      cy.get('input[name="username"]').type(username);
      cy.get('input[placeholder="https://github.com/johndoe"]').type(url);
      cy.get('input[name="icon"]').type(icon);

      cy.get('div[role="dialog"]').contains("button", "Create").click();

      cy.wait("@createProfile");
      cy.wait("@profile");

      cy.get(".group").contains("h3", network).should("be.visible");
      cy.get(".group").contains("p", `@${username}`).should("be.visible");
      cy.get(".group")
        .contains("a", url)
        .should("be.visible")
        .should("have.attr", "href", url)
        .should("have.attr", "target", "_blank")
        .should("have.attr", "rel", "noopener noreferrer");
    });
    /**
     * fim
     */

    /**
     * Education
     */
    cy.contains("Professional").click();
    cy.contains("Experience").click();
    cy.url().should("include", "/experience");
    cy.wait("@experience");

    cy.get('button[data-cy="add-experience"]', { timeout: 10_000 })
      .should("be.visible")
      .should("not.be.disabled")
      .click();

    cy.get('input[name="company"]').type(faker.company.name());
    cy.get('input[name="position"]').type(faker.person.jobTitle());
    cy.get('input[name="startDate"]').type(faker.date.past().toISOString().split("T")[0]);
    cy.get('input[name="endDate"]').type(faker.date.future().toISOString().split("T")[0]);
    cy.get('input[id=":raj:-form-item"]').type(faker.internet.url());

    const experienceSummary = faker.lorem.paragraph();
    cy.get('[contenteditable="true"]').should("be.visible").click();

    cy.get('[contenteditable="true"]').should("be.visible").type(experienceSummary);

    cy.get('div[role="dialog"]').contains("button", "Create").click();
  });
});
