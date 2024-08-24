describe("API Tests", () => {
  const exampleData = require("../fixtures/example.json");
  const sampleForm = require("../fixtures/sampleForm.json");
  const authorization = `Bearer ${exampleData.ACCESS_TOKEN}`;
  const API_URL = Cypress.env("API_BASE_URL");


  it("retrieves my user information", () => {
    cy.request({
      method: "GET",
      url: `${API_URL}me`,
      headers: { authorization },
    }).should(({ status, body }) => {
      const { alias, email, language } = body;        //diariamente a API typeForm muda o nome de {alias > name} e vice e versa
      expect(status).to.eq(200);
      expect(alias).to.eq(exampleData.userAlias);     //verifique o yielded.body do console para validar em caso de erro
      expect(email).to.eq(exampleData.username);
      expect(language).to.eq("en");
    });
  });

  it("retrieves form responses", () => {
    cy.request({
      method: "GET",
      url: `${API_URL}forms/${exampleData.formId}/responses`,
      headers: { authorization },
    }).should(({ status, body }) => {
      expect(status).to.eq(200);
    });
  });

  context("Cleanup before start", () => {
    beforeEach(() => {
      cy.request({
        method: "GET",
        url: `${API_URL}forms`,
        headers: { authorization },
      }).then(({ status, body }) => {
        expect(status).to.eq(200);
        body.items.forEach((item) => {
          if (item.title === sampleForm.title) {
            cy.request({
              method: "DELETE",
              url: `${API_URL}forms/${item.id}`,
              headers: { authorization },
            }).should(({ status }) => {
              expect(status).to.eq(204);
            });
          }
        });
      });
    });
    it("creates a sample form", () => {
      cy.request({
        method: "POST",
        url: `${API_URL}forms`,
        headers: { authorization },
        body: sampleForm,
      }).should(({ status }) => {
        expect(status).to.eq(201);
      });
    });
  });
});
