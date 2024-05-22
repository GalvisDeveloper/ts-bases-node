import { emailTemplate } from '../../src/fundations/01-template';


describe('Template', () => {
   
    test('Email Template should have a name', () => {
        expect(emailTemplate).toMatch(/{{name}}/);
    });

    test('Email Template should have a div', () => {
        expect(emailTemplate).toContain('<div>');
    });

    test('Email Template should have a h1', () => {
        expect(emailTemplate).toContain('<h1>');
    });

    test('Email Template should have a p', () => {
        expect(emailTemplate).toContain('<p>');
    });

    test('Email Template should have a greeting', () => {
        expect(emailTemplate).toContain('¡Hello!,');
    });


});