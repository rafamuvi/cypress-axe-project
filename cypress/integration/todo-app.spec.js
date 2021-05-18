/// <reference types='cypress'/>

describe('Todo application', () => {

    beforeEach(() => {
        cy.visit('http://todomvc.com/examples/react');
        cy.injectAxe(); // Injects Axe into the tests to run the code
    });

    it('should log any accessibility failures', () => {
        cy.checkA11y(); // Makes the checks with default settings
    });

    it('should exclude specific elements on the page', () => {
        cy.checkA11y({ exclude: ['.learn'] }); // Makes the checks excluding CSS Selector '.learn'
    });

    it('should only test specific elements on the page', () => {
        cy.checkA11y('.learn'); // Makes the checks only in the CSS Selector '.learn'
    });

    it('should only include rules with serious and critical impacts', () => {
        cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] }); // Makes the checks only to critical and serious issues
    });

    it('should exclude specific accessibility rules', () => {
        cy.checkA11y(null, {
            rules: {
                'color-contrast': { enabled: false }
            }
        }); // Disables the color-contrast rule
    });
});