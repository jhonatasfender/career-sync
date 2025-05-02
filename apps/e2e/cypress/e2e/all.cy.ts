import { faker } from "@faker-js/faker";

describe("Login Page", () => {
  it("should display login form", () => {
    cy.intercept("GET", "**/api/profile").as("profile");
    cy.intercept("GET", "**/api/summary").as("summary");
    cy.intercept("POST", "**/api/profile").as("createProfile");
    cy.intercept("GET", "**/api/experience").as("experience");
    cy.intercept("POST", "**/api/experience").as("createExperience");
    cy.intercept("GET", "**/api/education").as("education");
    cy.intercept("POST", "**/api/education").as("createEducation");
    cy.intercept("GET", "**/api/skill").as("skills");
    cy.intercept("POST", "**/api/skill").as("createSkills");

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

    // /**
    //  * Personal basic info
    //  */
    // cy.contains("Personal").click();
    // cy.contains("Basic Info").click();

    // cy.get('input[id="basics.name"]').type(faker.person.fullName());
    // cy.get('input[id="basics.headline"]').type(faker.person.jobTitle());

    // cy.get('input[id="basics.email"]').type(faker.internet.email());
    // cy.get('input[id="basics.url"]').type(faker.internet.url());

    // const ddd = faker.number.int({ min: 11, max: 99 });
    // const firstPart = faker.number.int({ min: 91_000, max: 99_999 });
    // const secondPart = faker.number.int({ min: 1000, max: 9999 });
    // const phoneNumber = `+55 (${ddd}) ${firstPart}-${secondPart}`;

    // cy.get('input[id="basics.phone"]').type(phoneNumber);

    // cy.get('input[id="basics.location"]').type(faker.location.streetAddress());

    // cy.contains("Save Changes").click();
    // /**
    //  * fim
    //  */

    // /**
    //  * Summary
    //  */
    // cy.contains("Summary").click();
    // cy.url().should("include", "/summary");
    // cy.wait("@summary");

    // cy.get(".prose").should("be.visible");
    // cy.get('[contenteditable="true"]').should("exist").and("be.visible");

    // const summary = faker.lorem.paragraph().replace(/\n/g, " ");
    // cy.typeInContentEditable(summary);

    // cy.get('[contenteditable="true"]').should("contain", summary);

    // cy.contains("Save").click();
    // /**
    //  * fim
    //  */

    // /**
    //  * Profile
    //  */
    // cy.contains("Profiles").click();
    // cy.url().should("include", "/profiles");
    // cy.wait("@profile");

    // cy.repeat(3, () => {
    //   const network = faker.internet.domainWord();
    //   const username = faker.internet.username();
    //   const url = faker.internet.url();
    //   const icon = faker.helpers.arrayElement([
    //     "github",
    //     "linkedin",
    //     "twitter",
    //     "facebook",
    //     "instagram",
    //   ]);

    //   cy.get('button[data-cy="add-profile"]', { timeout: 10_000 })
    //     .should("be.visible")
    //     .should("not.be.disabled")
    //     .click();

    //   cy.get('input[name="network"]').type(network);
    //   cy.get('input[name="username"]').type(username);
    //   cy.get('input[placeholder="https://github.com/johndoe"]').type(url);
    //   cy.get('input[name="icon"]').type(icon);

    //   cy.get('div[role="dialog"]').contains("button", "Create").click();

    //   cy.wait("@createProfile");
    //   cy.wait("@profile");

    //   cy.get(".group").contains("h3", network).should("be.visible");
    //   cy.get(".group").contains("p", `@${username}`).should("be.visible");
    //   cy.get(".group")
    //     .contains("a", url)
    //     .should("be.visible")
    //     .should("have.attr", "href", url)
    //     .should("have.attr", "target", "_blank")
    //     .should("have.attr", "rel", "noopener noreferrer");
    // });
    // /**
    //  * fim
    //  */

    // /**
    //  * Experience
    //  */
    // cy.contains("Professional").click();
    // cy.contains("Experience").click();
    // cy.url().should("include", "/experience");
    // cy.wait("@experience");

    // cy.repeat(3, () => {
    //   cy.get('button[data-cy="add-experience"]', { timeout: 10_000 })
    //     .should("be.visible")
    //     .should("not.be.disabled")
    //     .click();

    //   const company = faker.company.name();
    //   const position = faker.person.jobTitle();
    //   const startDate = faker.date.past().toISOString().split("T")[0];
    //   const endDate = faker.date.future().toISOString().split("T")[0];
    //   const companyWebsite = faker.internet.url();
    //   const experienceSummary = faker.lorem.paragraph();

    //   cy.get('input[name="company"]').type(company);
    //   cy.get('input[name="position"]').type(position);
    //   cy.get('input[name="startDate"]').type(startDate);
    //   cy.get('input[name="endDate"]').type(endDate);
    //   cy.get('div[role="dialog"]')
    //     .contains("Company Website")
    //     .parent()
    //     .find("input")
    //     .type(companyWebsite);

    //   cy.typeInContentEditable(experienceSummary);

    //   cy.get('div[role="dialog"]').contains("button", "Create").click();

    //   cy.wait("@createExperience");
    //   cy.wait("@experience");

    //   cy.get(".group").contains("h3", company).should("be.visible");
    //   cy.get(".group").contains("p", position).should("be.visible");
    //   cy.get(".group").contains("p", `${startDate} - ${endDate}`).should("be.visible");
    //   cy.get(".group").contains("p", experienceSummary).should("be.visible");
    //   cy.get(".group").contains("a", "Visit Company Website").should("be.visible");

    //   /**
    //    * Education Info
    //    */
    //   cy.contains("Education").click();
    //   cy.url().should("include", "/education");
    //   cy.wait("@education");

    //   cy.repeat(3, () => {
    //     cy.get('button[data-cy="add-education"]', { timeout: 10_000 })
    //       .should("be.visible")
    //       .should("not.be.disabled")
    //       .click();

    //     const institution = `${faker.company.name()} University`;
    //     const area = faker.person.jobArea();
    //     const studyType = faker.helpers.arrayElement(["Bachelor", "Master", "PhD", "Diploma"]);
    //     const gpa = faker.number.float({ min: 2, max: 4 }).toFixed(2);
    //     const startDate = faker.date.past().toISOString().split("T")[0];
    //     const endDate = faker.date.future().toISOString().split("T")[0];
    //     const website = faker.internet.url();
    //     const summary = faker.lorem.paragraph();

    //     cy.get('input[name="institution"]').type(institution);
    //     cy.get('input[name="area"]').type(area);
    //     cy.get('input[name="studyType"]').type(studyType);
    //     cy.get('input[name="gpa"]').type(gpa);
    //     cy.get('div[role="dialog"]').contains("Website").parent().find("input").type(website);
    //     cy.typeInContentEditable(summary);
    //     cy.get('input[name="startDate"]').type(startDate);
    //     cy.get('input[name="endDate"]').type(endDate);

    //     cy.get('div[role="dialog"]').contains("button", "Create").click();

    //     cy.wait("@createEducation");
    //     cy.wait("@education");

    //     cy.get(".group").contains("h3", institution).should("be.visible");
    //     cy.get(".group").contains("p", area).should("be.visible");
    //     cy.get(".group").contains("p", `${startDate} - ${endDate}`).should("be.visible");
    //     cy.get(".group").contains("p", summary).should("be.visible");
    //     cy.get(".group")
    //       .contains("a", "Visit Website")
    //       .should("be.visible")
    //       .should("have.attr", "target", "_blank")
    //       .should("have.attr", "rel", "noopener noreferrer");
    //   });
    // });

    /**
     * Skill Info
     */
    cy.contains("Professional").click();
    cy.contains("Skills").click();
    cy.url().should("include", "/skills");
    cy.wait("@skills");

    cy.repeat(3, () => {
      cy.get('button[data-cy="add-skill"]', { timeout: 10_000 })
        .should("be.visible")
        .should("not.be.disabled")
        .click();

      const name = faker.hacker.noun();
      const description = faker.hacker.phrase();
      const level = faker.number.int({ min: 1, max: 5 });
      const kw1 = faker.hacker.verb();
      const kw2 = faker.hacker.adjective();

      cy.get('input[name="name"]').type(name);
      cy.get('input[name="description"]').type(description);

      cy.get('[role="slider"]')
        .focus()
        .then(() => {
          Cypress._.times(level - 1, () => {
            cy.focused().type("{rightarrow}");
          });
        });

      cy.get('input[data-cy="keywords-input"]').type(`${kw1}{enter}${kw2}{enter}`);

      cy.get('div[role="dialog"]').contains("button", "Create").click();

      cy.wait("@createSkills");
      cy.wait("@skills");

      cy.get(".group").contains("h3", name).should("be.visible");
      cy.get(".group").contains("p", description).should("be.visible");
      cy.get(".group").contains("span", kw1).should("be.visible");
      cy.get(".group").contains("span", kw2).should("be.visible");
      cy.get(".group")
        .contains("span", `${level * 20}%`)
        .should("be.visible");
    });
  });
});
