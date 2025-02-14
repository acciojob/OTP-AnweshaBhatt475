const codes = document.querySelectorAll('.code');

for (let i = 0; i < codes.length; i++) {
    codes[i].addEventListener('input', function () {
        // If a digit is entered and not the last field, move to the next field
        if (codes[i].value.length === 1 && i < codes.length - 1) {
            codes[i + 1].focus();
        }
    });

    codes[i].addEventListener('keydown', function (e) {
        // If backspace is pressed and not the first field, move to the previous field
        if (e.key === 'Backspace' && i > 0 && codes[i].value.length === 0) {
            codes[i - 1].focus();
        }
    });
}
cy.get(".code-container").find("input.code").eq(0).type(5);
cy.wait(500);
cy.focused().should("id", "code-2");