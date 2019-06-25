import { expect } from 'chai';

describe('Our first test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});

describe('inner.html', () => {
    it('should day hello', (done) => {
        const index = fs.readFileSync('./src/index.html', "utf-8");
        jsdom.env(index, function(err, window) {
            const h1 = window.document.getElementByTagName('h1')[0];
            expect(h1.innerHTML).to.equal("Hello world?");
            done();
            window.close();
        });
    });
});
