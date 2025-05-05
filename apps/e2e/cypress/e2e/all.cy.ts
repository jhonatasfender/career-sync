import { faker } from "@faker-js/faker";

describe("Resume Builder: End-to-End Flow", () => {
  before(() => {
    cy.signup();
  });

  beforeEach(() => {
    const { email, password } = Cypress.env("creds");
    cy.loginSession(email, password);

    cy.intercept("GET", "**/api/profile").as("profile");
    cy.intercept("GET", "**/api/summary").as("summary");
    cy.intercept("GET", "**/api/experience").as("experience");
    cy.intercept("GET", "**/api/education").as("education");
    cy.intercept("GET", "**/api/skill").as("skills");
    cy.intercept("GET", "**/api/language").as("languages");
    cy.intercept("GET", "**/api/award").as("awards");
    cy.intercept("GET", "**/api/certification").as("certifications");
    cy.intercept("GET", "**/api/project").as("projects");
    cy.intercept("GET", "**/api/publication").as("publications");
    cy.intercept("GET", "**/api/volunteer").as("volunteers");
    cy.intercept("GET", "**/api/reference").as("references");
    cy.intercept("GET", "**/api/interest").as("interests");

    cy.intercept("POST", "**/api/profile").as("createProfile");
    cy.intercept("POST", "**/api/experience").as("createExperience");
    cy.intercept("POST", "**/api/education").as("createEducation");
    cy.intercept("POST", "**/api/skill").as("createSkills");
    cy.intercept("POST", "**/api/language").as("createLanguage");
    cy.intercept("POST", "**/api/award").as("createAward");
    cy.intercept("POST", "**/api/certification").as("createCertification");
    cy.intercept("POST", "**/api/project").as("createProject");
    cy.intercept("POST", "**/api/publication").as("createPublication");
    cy.intercept("POST", "**/api/volunteer").as("createVolunteer");
    cy.intercept("POST", "**/api/reference").as("createReference");
    cy.intercept("POST", "**/api/interest").as("createInterest");
  });

  it("Fills out Basic Information section", () => {
    cy.visit("/dashboard/basic");

    const ddd = faker.number.int({ min: 11, max: 99 });
    const firstPart = faker.number.int({ min: 91_000, max: 99_999 });
    const secondPart = faker.number.int({ min: 1000, max: 9999 });
    const phoneNumber = `+55 (${ddd}) ${firstPart}-${secondPart}`;

    cy.get('input[id="basics.name"]').type(faker.person.fullName());
    cy.get('input[id="basics.headline"]').type(faker.person.jobTitle());
    cy.get('input[id="basics.email"]').type(faker.internet.email());
    cy.get('input[id="basics.url"]').type(faker.internet.url());
    cy.get('input[id="basics.phone"]').type(phoneNumber);
    cy.get('input[id="basics.location"]').type(faker.location.streetAddress());

    cy.contains("Save Changes").click();
  });

  it("Adds a summary to the resume", () => {
    cy.visit("/dashboard/summary");
    cy.wait("@summary");

    const summary = faker.lorem.paragraph().replace(/\n/g, " ");
    cy.typeInContentEditable(summary);
    cy.contains("Save").click();
  });

  it("Creates profile links", () => {
    cy.visit("/dashboard/profiles");
    cy.wait("@profile");

    cy.repeat(3, () => {
      cy.get('button[data-cy="add-profile"]').should("not.be.disabled").click();

      const network = faker.internet.domainWord();
      const username = faker.internet.username();
      const url = faker.internet.url();
      const icon = faker.helpers.arrayElement(["github", "linkedin", "twitter"]);

      cy.get('input[name="network"]').type(network);
      cy.get('input[name="username"]').type(username);
      cy.get('input[placeholder^="https"]').type(url);
      cy.get('input[name="icon"]').type(icon);

      cy.contains("button", "Create").click();

      cy.wait("@createProfile");
      cy.wait("@profile");

      cy.get(".group").contains("h3", network).should("be.visible");
      cy.get(".group").contains("p", `@${username}`).should("be.visible");
      cy.get(".group")
        .contains("a", url)
        .should("have.attr", "href", url)
        .and("have.attr", "target", "_blank");
    });
  });

  it("Creates professional experiences", () => {
    cy.visit("/dashboard/experience");
    cy.wait("@experience");

    cy.repeat(3, () => {
      cy.get('button[data-cy="add-experience"]').click();

      const company = faker.company.name();
      const position = faker.person.jobTitle();
      const startDate = faker.date.past().toISOString().split("T")[0];
      const endDate = faker.date.future().toISOString().split("T")[0];
      const website = faker.internet.url();
      const expSummary = faker.lorem.paragraph();

      cy.get('input[name="company"]').type(company);
      cy.get('input[name="position"]').type(position);
      cy.get('input[name="startDate"]').type(startDate);
      cy.get('input[name="endDate"]').type(endDate);
      cy.get('div[role="dialog"]').contains("Company Website").parent().find("input").type(website);
      cy.typeInContentEditable(expSummary);

      cy.contains("button", "Create").click();

      cy.wait("@createExperience");
      cy.wait("@experience");

      cy.get(".group").contains("h3", company).should("be.visible");
      cy.get(".group").contains("p", position).should("be.visible");
      cy.get(".group").contains("p", `${startDate} - ${endDate}`).should("be.visible");
      cy.get(".group").contains("p", expSummary).should("be.visible");
      cy.get(".group").contains("a", "Visit Company Website").should("be.visible");
    });
  });

  it("Creates education entries", () => {
    cy.visit("/dashboard/education");
    cy.wait("@education");

    cy.repeat(3, () => {
      cy.get('button[data-cy="add-education"]').click();

      const institution = `${faker.company.name()} University`;
      const area = faker.person.jobArea();
      const studyType = faker.helpers.arrayElement(["Bachelor", "Master", "PhD"]);
      const gpa = faker.number.float({ min: 2, max: 4 }).toFixed(2);
      const startDate = faker.date.past().toISOString().split("T")[0];
      const endDate = faker.date.future().toISOString().split("T")[0];
      const website = faker.internet.url();
      const summary = faker.lorem.paragraph();

      cy.get('input[name="institution"]').type(institution);
      cy.get('input[name="area"]').type(area);
      cy.get('input[name="studyType"]').type(studyType);
      cy.get('input[name="gpa"]').type(gpa);
      cy.get('div[role="dialog"]').contains("Website").parent().find("input").type(website);
      cy.typeInContentEditable(summary);
      cy.get('input[name="startDate"]').type(startDate);
      cy.get('input[name="endDate"]').type(endDate);

      cy.contains("button", "Create").click();

      cy.wait("@createEducation");
      cy.wait("@education");

      cy.get(".group").contains("h3", institution).should("be.visible");
      cy.get(".group").contains("p", area).should("be.visible");
      cy.get(".group").contains("p", `${startDate} - ${endDate}`).should("be.visible");
      cy.get(".group").contains("p", summary).should("be.visible");
      cy.get(".group")
        .contains("a", "Visit Website")
        .should("be.visible")
        .should("have.attr", "target", "_blank")
        .should("have.attr", "rel", "noopener noreferrer");
    });
  });

  it("Creates skill entries", () => {
    cy.visit("/dashboard/skills");
    cy.wait("@skills");

    cy.repeat(3, () => {
      cy.get('button[data-cy="add-skill"]').click();

      const name = faker.hacker.noun();
      const desc = faker.hacker.phrase();
      const level = faker.number.int({ min: 1, max: 5 });
      const kw1 = faker.hacker.verb();
      const kw2 = faker.hacker.adjective();

      cy.get('input[name="name"]').type(name);
      cy.get('input[name="description"]').type(desc);

      cy.get('[role="slider"]')
        .focus()
        .then(() => {
          Cypress._.times(level - 1, () => cy.focused().type("{rightarrow}"));
        });

      cy.get('input[data-cy="keywords-input"]').type(`${kw1}{enter}${kw2}{enter}`);

      cy.contains("button", "Create").click();

      cy.wait("@createSkills");
      cy.wait("@skills");

      cy.get(".group").contains("h3", name).should("be.visible");
      cy.get(".group").contains("p", desc).should("be.visible");
      cy.get(".group").contains("span", kw1).should("be.visible");
      cy.get(".group").contains("span", kw2).should("be.visible");
      cy.get(".group")
        .contains("span", `${level * 20}%`)
        .should("be.visible");
    });
  });

  it("Creates language entries", () => {
    cy.visit("/dashboard/languages");
    cy.wait("@languages");

    cy.repeat(3, () => {
      cy.get('button[data-cy="add-language"]').click();

      const name = faker.helpers.arrayElement([
        "English",
        "Spanish",
        "German",
        "French",
        "Italian",
        "Japanese",
        "Portuguese",
      ]);
      const desc = faker.hacker.phrase();
      const level = faker.number.int({ min: 1, max: 5 });

      cy.get('input[name="name"]').type(name);
      cy.get('input[name="description"]').type(desc);

      cy.get('[role="slider"]')
        .focus()
        .then(() => {
          Cypress._.times(level - 1, () => cy.focused().type("{rightarrow}"));
        });

      cy.contains("button", "Create").click();

      cy.wait("@createLanguage");
      cy.wait("@languages");

      cy.get(".group").contains("h3", name).should("be.visible");
      cy.get(".group").contains("p", desc).should("be.visible");
      cy.get(".group")
        .contains("span", `${level * 20}%`)
        .should("be.visible");
    });
  });

  it("Creates award entries", () => {
    cy.visit("/dashboard/awards");
    cy.wait("@awards");

    cy.repeat(3, () => {
      cy.get('button[data-cy="add-awards"]').click();

      const title = faker.company.catchPhrase();
      const awarder = faker.company.name();
      const date = faker.date.past().toISOString().split("T")[0];
      const url = faker.internet.url();
      const summary = faker.lorem.paragraph();

      cy.get('input[name="title"]').type(title);
      cy.get('input[name="awarder"]').type(awarder);
      cy.get('input[name="date"]').type(date);
      cy.get('div[role="dialog"]').contains("Website").parent().find("input").type(url);
      cy.typeInContentEditable(summary);
      cy.contains("button", "Create").click();

      cy.wait("@createAward");
      cy.wait("@awards");

      cy.get(".group").contains("h3", title).should("be.visible");
      cy.get(".group").contains("p", awarder).should("be.visible");
      cy.get(".group").contains("p", date).should("be.visible");
      cy.get(".group").contains("p", summary).should("be.visible");
      cy.get(".group")
        .contains("a", "Visit Website")
        .should("be.visible")
        .should("have.attr", "target", "_blank")
        .should("have.attr", "rel", "noopener noreferrer");
    });
  });

  it("Creates certification entries", () => {
    cy.visit("/dashboard/certifications");
    cy.wait("@certifications");

    cy.repeat(3, () => {
      cy.get('button[data-cy="add-certifications"]').click();

      const certName = `${faker.company.buzzNoun()} Certification`;
      const issuer = faker.company.name();
      const date = faker.date.past().toISOString().split("T")[0];
      const url = faker.internet.url();
      const summary = faker.lorem.paragraph();

      cy.get('input[name="name"]').type(certName);
      cy.get('input[name="issuer"]').type(issuer);
      cy.get('input[name="date"]').type(date);
      cy.get('div[role="dialog"]').contains("Website").parent().find("input").type(url);
      cy.typeInContentEditable(summary);

      cy.contains("button", "Create").click();

      cy.wait("@createCertification");
      cy.wait("@certifications");

      cy.get(".group").contains("h3", certName).should("be.visible");
      cy.get(".group").contains("p", issuer).should("be.visible");
      cy.get(".group").contains("p", date).should("be.visible");
      cy.get(".group").contains("p", summary).should("be.visible");
      cy.get(".group")
        .contains("a", "Visit Website")
        .should("be.visible")
        .should("have.attr", "target", "_blank")
        .should("have.attr", "rel", "noopener noreferrer");
    });
  });

  it("Creates project entries", () => {
    cy.visit("/dashboard/projects");
    cy.wait("@projects");

    cy.repeat(3, () => {
      cy.get('button[data-cy="add-projects"]').click();

      const name = `${faker.commerce.productName()} App`;
      const description = faker.company.catchPhrase();
      const startDate = faker.date.past().toISOString().split("T")[0];
      const endDate = faker.date.future().toISOString().split("T")[0];
      const url = faker.internet.url();
      const summary = faker.lorem.paragraph();
      const kw1 = faker.hacker.noun();
      const kw2 = faker.hacker.verb();

      cy.get('input[name="name"]').type(name);
      cy.get('input[name="description"]').type(description);
      cy.get('input[name="startDate"]').type(startDate);
      cy.get('input[name="endDate"]').type(endDate);
      cy.get('div[role="dialog"]').contains("Website").parent().find("input").type(url);
      cy.typeInContentEditable(summary);
      cy.get('input[data-cy="keywords-input"]').type(`${kw1}{enter}${kw2}{enter}`);

      cy.contains("button", "Create").click();

      cy.wait("@createProject");
      cy.wait("@projects");

      cy.get(".group").contains("h3", name).should("be.visible");
      cy.get(".group").contains("p", description).should("be.visible");
      cy.get(".group").contains("p", summary).should("be.visible");
      cy.get(".group").contains("span", kw1).should("be.visible");
      cy.get(".group").contains("span", kw2).should("be.visible");
      cy.get(".group")
        .contains("a", "Website")
        .should("be.visible")
        .should("have.attr", "target", "_blank")
        .should("have.attr", "rel", "noopener noreferrer");
    });
  });

  it("Creates publication entries", () => {
    cy.visit("/dashboard/publications");
    cy.wait("@publications");

    cy.repeat(3, () => {
      cy.get('button[data-cy="add-publications"]').click();

      const title = faker.lorem.words(3);
      const publisher = faker.company.name();
      const date = faker.date.past().toISOString().split("T")[0];
      const url = faker.internet.url();
      const summary = faker.lorem.paragraph();

      cy.get('input[name="name"]').type(title);
      cy.get('input[name="publisher"]').type(publisher);
      cy.get('input[name="date"]').type(date);
      cy.get('div[role="dialog"]').contains("Website").parent().find("input").type(url);
      cy.typeInContentEditable(summary);

      cy.contains("button", "Create").click();

      cy.wait("@createPublication");
      cy.wait("@publications");

      cy.get(".group").contains("h3", title).should("be.visible");
      cy.get(".group").contains("p", publisher).should("be.visible");
      cy.get(".group").find("span").contains(date).should("be.visible");
      cy.get(".group").contains("p", summary).should("be.visible");
      cy.get(".group")
        .contains("a", "Website")
        .should("be.visible")
        .should("have.attr", "target", "_blank")
        .should("have.attr", "rel", "noopener noreferrer");
    });
  });

  it("Creates volunteer entries", () => {
    cy.visit("/dashboard/volunteer");
    cy.wait("@volunteers");

    cy.repeat(3, () => {
      cy.get('button[data-cy="add-volunteers"]').click();

      const organization = `${faker.company.name()} Foundation`;
      const position = faker.person.jobTitle();
      const startDate = faker.date.past().toISOString().split("T")[0];
      const endDate = faker.date.future().toISOString().split("T")[0];
      const location = `${faker.location.city()}, ${faker.location.country()}`;
      const url = faker.internet.url();
      const summary = faker.lorem.paragraph();

      cy.get('input[name="organization"]').type(organization);
      cy.get('input[name="position"]').type(position);
      cy.get('input[name="startDate"]').type(startDate);
      cy.get('input[name="endDate"]').type(endDate);
      cy.get('input[name="location"]').type(location);
      cy.get('div[role="dialog"]').contains("Website").parent().find("input").type(url);
      cy.typeInContentEditable(summary);

      cy.contains("button", "Create").click();

      cy.wait("@createVolunteer");
      cy.wait("@volunteers");

      cy.get(".group").contains("h3", organization).should("be.visible");
      cy.get(".group").contains("p", position).should("be.visible");
      cy.get(".group").find("span").contains(startDate).should("be.visible");
      cy.get(".group").contains("p", summary).should("be.visible");
      cy.get(".group")
        .contains("a", "Website")
        .should("be.visible")
        .should("have.attr", "target", "_blank")
        .should("have.attr", "rel", "noopener noreferrer");
    });
  });

  it("Creates reference entries", () => {
    cy.visit("/dashboard/references");
    cy.wait("@references");

    cy.repeat(3, () => {
      cy.get('button[data-cy="add-references"]').click();

      const refName = faker.person.fullName();
      const description = faker.person.jobTitle();
      const url = faker.internet.url();
      const summary = faker.lorem.paragraph();

      cy.get('input[name="name"]').type(refName);
      cy.get('input[name="description"]').type(description);
      cy.get('div[role="dialog"]').contains("Website").parent().find("input").type(url);
      cy.typeInContentEditable(summary);

      cy.contains("button", "Create").click();

      cy.wait("@createReference");
      cy.wait("@references");

      cy.get(".group").contains("h3", refName).should("be.visible");
      cy.get(".group").contains("p", description).should("be.visible");
      cy.get(".group").contains("p", summary).should("be.visible");
      cy.get(".group")
        .contains("a", "Website")
        .should("be.visible")
        .should("have.attr", "target", "_blank")
        .should("have.attr", "rel", "noopener noreferrer");
    });
  });

  it("Creates interest entries", () => {
    cy.visit("/dashboard/interests");
    cy.wait("@interests");

    cy.repeat(3, () => {
      cy.get('button[data-cy="add-interests"]').should("not.be.disabled").click();

      const name = faker.hacker.noun();
      const kw1 = faker.hacker.adjective();
      const kw2 = faker.hacker.verb();

      cy.get('input[name="name"]').type(name);
      cy.get('input[data-cy="keywords-input"]').type(`${kw1}{enter}${kw2}{enter}`);

      cy.contains("button", "Create").click();
      cy.wait("@createInterest");
      cy.wait("@interests");

      cy.get(".group").contains("h3", name).should("be.visible");
      cy.get(".group").contains("span", kw1).should("be.visible");
      cy.get(".group").contains("span", kw2).should("be.visible");
    });
  });
});
