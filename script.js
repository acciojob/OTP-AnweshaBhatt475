() => { 
    cy.visit(baseUrl + "/main.html"); // Ensure this visit is correct
    
    cy.focused().should("have.id", "code-1");
    cy.get(".code-container").find("input.code").eq(0).type(5);
    cy.focused().should("have.id", "code-2");
    
    cy.get(".code").eq(1).type(1);
    cy.focused().should("have.id", "code-3");
    
    cy.get(".code").eq(2).type(7);
    cy.focused().should("have.id", "code-4");
    
    cy.get(".code").eq(3).type(2);
    cy.focused().should("have.id", "code-5");
    
    cy.get(".code").eq(4).type(9);
    cy.focused().should("have.id", "code-6");
    
    cy.get(".code").eq(5).type(6);
}
const codes = document.querySelectorAll('.code');

for (let i = 0; i < codes.length; i++) {
    codes[i].addEventListener('input', function () {
        // Move to the next input field
        if (codes[i].value.length === 1 && i < codes.length - 1) {
            codes[i + 1].focus();
        }
    });

    codes[i].addEventListener('keydown', function (e) {
        // Move to the previous input field if backspace is pressed
        if (e.key === 'Backspace' && i > 0) {
            if (codes[i].value.length === 0) {
                codes[i - 1].focus();
            } else {
                codes[i].value = ''; // Clear the current input field
            }
        }
    });
}
