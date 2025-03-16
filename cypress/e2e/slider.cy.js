describe('Swiper Gallery Test - Check #2 slide', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test - Check #3 slide', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Test - Full loop with 3 items', function () {
  it('Checks if gallery loops around in both directions.', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Rome');
    cy.get('.swiper-button-prev').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
    cy.get('.swiper-button-prev').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
    cy.get('.swiper-button-prev').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Rome');
  });
});

describe('Swiper Gallery Test - Description', function () {
  it('Checks if description of each slide is as expected.', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'London');
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
    cy.get('.swiper-slide-active').should('contain', 'France');
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Rome');
    cy.get('.swiper-slide-active').should('contain', 'Italy');
    cy.get('.swiper-button-prev').click();
  });
});

describe('Swiper Gallery Test - Responsive Behavior', function () {
  const viewports = [
    { device: 'Desktop', width: 1280, height: 800 },
    { device: 'Tablet', width: 768, height: 1024 },
    { device: 'Mobile', width: 375, height: 667 }
  ];

  viewports.forEach(viewport => {
    it(`Should correctly display gallery on ${viewport.device}`, function () {
      cy.viewport(viewport.width, viewport.height);
      cy.visit('http://localhost:3000');

      cy.get('.swiper').should('be.visible');

      cy.get('.swiper-button-next').should('be.visible').click();
      cy.wait(1000);
      cy.get('.swiper-slide-active').should('exist');

      cy.get('.swiper-button-prev').should('be.visible').click();
      cy.wait(1000);
      cy.get('.swiper-slide-active').should('exist');
    });
  });
});


describe('Swiper Gallery Test - UI Visibility Check', function () {
  it('Should display all essential gallery elements correctly', function () {
    cy.visit('http://localhost:3000');

    cy.get('.swiper').should('be.visible');

    cy.get('.swiper-slide').should('have.length.at.least', 3);

    cy.get('.swiper-slide-active').should('exist');

    cy.get('.swiper-button-next').should('be.visible').click();
    cy.wait(1000);
    cy.get('.swiper-slide-active').should('exist');

    cy.get('.swiper-button-prev').should('be.visible').click();
    cy.wait(1000);
    cy.get('.swiper-slide-active').should('exist');
  });
});

