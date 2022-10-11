/// <reference types="cypress" />
// About API testing: https://docs.cypress.io/api/commands/request#Method-and-URL
describe("Check https://api.publicapis.org/entries request", () => {
    it("Get 200 status", () => {
        cy.request({
            method: "GET",
            url: `https://api.publicapis.org/entries`,
        }).as("getEntries");

        cy.get("@getEntries").should((response: any) => {
            expect(response.status).to.eq(200);
            expect(response).to.have.property("headers");
            expect(response.body).to.have.property("entries")
        });
    });
});
