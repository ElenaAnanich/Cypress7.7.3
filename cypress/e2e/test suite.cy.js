describe("pet store", () => {
  it("should create, changed pet", () => {
    cy.request("POST", "https://petstore.swagger.io/v2/pet", {
      id: 300,
      name: "Olga",
      photoUrls: [],
    }).then((response) => {
      expect(response.status).be.eql(200);
      cy.request("PUT", "https://petstore.swagger.io/v2/pet", {
        id: 300,
        tags: [],
        name: "Elen",
        photoUrls: [],
      }).then((response) => {
        expect(response.status).be.eql(200);
      });
    });
  });
  it("should delete user", () => {
    cy.request("POST", "https://petstore.swagger.io/v2/pet", {
      id: 300,
      name: "Elen",
      photoUrls: [],
    }).then((response) => {
      expect(response.status).be.eql(200);
      expect(response.body).be.eql({
        id: 300,
        tags: [],
        name: "Elen",
        photoUrls: [],
      });
    });
    cy.request("DELETE", "https://petstore.swagger.io/v2/pet/300", {
      id: 300,
    }).then((response) => {
      expect(response.status).be.eq(200);
    });
  });
});