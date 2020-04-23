it('works!', () => {
    expect(5).to.eq(5)
    expect(6).to.eq(6)
})

describe('Friends Form', () => {
    it('can navigate to the site', () => {
        cy.visit('')
        cy.url().should('include', 'localhost')
    })

    it('Can input NAME, type NAME in it, and assertion.', () => {
        cy.get('input[name="name"]')
            .type('Michael')
            .should('have.value', 'Michael')
    })

    it('Can input EMAIL and type EMAIL in it, and assertion.', () => {
        cy.get('input[name="email"]')
            .type('Michael.sheets83@gmail.com')
            .should('have.value', 'Michael.sheets83@gmail.com')
    })

    it('Can input PASSWORD and type PASSWORD in it, and assertion.', () => {
        cy.get('input[name="userPassword"]')
            .type('password')
            .should('have.value', 'password')
    })

    it('Can check TERMS OF SERVICE, and assertion.', () => {
        cy.get(`input[name="terms"]`)
            .check()
            .should('have.checked')
    })
    it('Can click SUBMIT, and assertion.', () => {
        cy.contains('Submit')
            .click()

            cy.wait(500)
    })


    it('has validation error if NAME < 3 chars', () =>{
        cy.get('input[name="name"]')
        .type('a')
        .should('have.value', 'a')

        cy.get('.error')
        .contains('this must be at least 3 characters')

        cy.wait(500)

        cy.get('input[name="name"]')
        .type('b')
        .should('have.value', 'ab')

        cy.get('.error')
        .contains('this must be at least 3 characters')

        cy.wait(500)

        cy.get('input[name="name"]')
        .type('c')
        .should('have.value', 'abc')

        cy.contains('this must be at least 3 characters')
        .should('not.exist')
    })

    })