const assert = require('assert');

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://serviciosdigitales.imss.gob.mx/semanascotizadas-web/usuarios/IngresoAsegurado');
        const title = browser.getTitle();
        console.log(title)
        assert.strictEqual(title, 'Semanas Cotizadas-SISEC');
    });
});

const CURP 
const NSS
const Correo
const captcha

console.log(browser.sessionId); 
console.log(browser.capabilities);
console.log(browser.config);
