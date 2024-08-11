const Generator = require('../generator');

describe('SVG Generator', () => {
    test('should create the svg based on inputs', () => {
        const generator = new Generator('<circle cx="150" cy="100" r="80" fill="blue" />', '<text x="150" y="125" font-size="60" text-anchor="middle">SVG</text>');
        expect(generator.renderSvg()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="blue" />

  <text x="150" y="125" font-size="60" text-anchor="middle">SVG</text>

</svg>`);
    });
});