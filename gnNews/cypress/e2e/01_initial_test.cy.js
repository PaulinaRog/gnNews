describe("Header component", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should navigate to home", () => {
    cy.get("[data-cy=logo]").click();
    cy.url().should("include", "/");
  });

  it("clicking should render list button", () => {
    cy.get("[data-cy=view-tiles]").click();
    cy.get("[data-cy=view-list]").should("be.visible");
  });
  it("clicking should render tiles button", () => {
    cy.get("[data-cy=view-list]").click();
    cy.get("[data-cy=view-tiles]").should("be.visible");
  });
  it("should change language", () => {
    cy.get("[data-cy=pl]").click();
    cy.contains("Zamknij");
    cy.get("[data-cy=en]").click();
    cy.contains("Close");
  });

  it("should open popup", () => {
    cy.get("[data-cy=popup]").click();
    cy.get(".popup").should("have.css", "display", "block");
  });

  it("should close popup", () => {
    cy.get("[data-cy=popup]").click();
    cy.get("[data-cy=close]").click();
    cy.get(".popup").should("have.css", "display", "none");
  });
});

describe("SideMenu", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("navigates to the selected country when a menu item is clicked", () => {
    cy.get("[data-cy=nav-country]").first().click();
    cy.url().should("include", "/country/");
  });

  it("hides the menu when the hide button is clicked", () => {
    cy.viewport(393, 851);
    cy.get(".side-menu-show").click();
    cy.get(".side-menu-hide").click();
    cy.get(".side-menu").should("not.be.visible");
  });

  it("shows the menu when the show button is clicked", () => {
    cy.viewport(393, 851);
    cy.get(".side-menu-show").click();
    cy.get(".side-menu").should("be.visible");
  });
});

describe("MainContent", () => {
  it("should download data from server", () => {
    cy.request("http://127.0.0.1:5173/").should((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
