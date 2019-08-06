/**
 * Test files for sandbox unit test. 
 * This file is just a test. 
 */



//Dependencies
const assert = require('assert');

//Test Function
describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://serviciosdigitales.imss.gob.mx/semanascotizadas-web/usuarios/IngresoAsegurado');
        const title = browser.getTitle();
        console.log(title)
        assert.strictEqual(title, 'Semanas Cotizadas-SISEC');
    });
});

//Inputs variables
const CURP = 'VAFC980429HMCSNR06'
const NSS = 14139892468
const Correo = 'cjvasquez_98@hotmail.com'
const captcha 

//Browser Information
console.log(browser.sessionId); 
console.log(browser.capabilities);
console.log(browser.config);
