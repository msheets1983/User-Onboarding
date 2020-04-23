it('works!', () => {
    expect(5).to.eq(5)
    expect(6).to.eq(6)
})

const userName = 'Michael'
const userEmail = "michael.sheets83@gmail.com"
const password = 'Password1'

describe('User Onboarding', () => {
    it('can navigate to the site', () => {
        cy.visit('')
        cy.url().should('include', 'localhost')
    })

    it('Can input NAME, type NAME in it, and assertion.', () => {
        cy.get('input[name="name"]')
            .type(userName)
            .should('have.value', userName)
    })

    it('Can input EMAIL and type EMAIL in it, and assertion.', () => {
        cy.get('input[name="email"]')
            .type(userEmail)
            .should('have.value', userEmail)
    })

    it('Can input PASSWORD and type PASSWORD in it, and assertion.', () => {
        cy.get('input[name="userPassword"]')
            .type(password)
            .should('have.value', password)
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


    it('Has validation error if NAME < 3 chars', () => {
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

    it('Has validation error if EMAIL is not correct format', () => {
        cy.get('input[name="email"]')
            .type('password')
            .should('have.value', 'password')

        cy.get('.error')
            .contains('this must be a valid email')

        cy.wait(500)

        cy.get('input[name="email"]')
            .type('@')
            .should('have.value', 'password@')

        cy.get('.error')
            .contains('this must be a valid email')

        cy.wait(500)

        cy.get('input[name="email"]')
            .type('gmail.com')
            .should('have.value', 'password@gmail.com')

        cy.contains('this must be a valid email')
            .should('not.exist')

        cy.wait(500)
    })

    it('Has validation error if PASSWORD is < 6 characters', () => {
        cy.get('input[name="userPassword"]')
            .type('ab')
            .should('have.value', 'ab')

        cy.get('.error')
            .contains('this must be at least 6 characters')

        cy.wait(500)

        cy.get('input[name="userPassword"]')
            .type('cd')
            .should('have.value', 'abcd')

        cy.get('.error')
            .contains('this must be at least 6 characters')

        cy.wait(500)

        cy.get('input[name="userPassword"]')
            .type('ef')
            .should('have.value', 'abcdef')

        cy.contains('this must be at least 6 characters')
            .should('not.exist')

        cy.wait(500)
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
})