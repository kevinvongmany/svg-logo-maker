class Generator {
    constructor(shape, text) {
        this.shape = shape;
        this.text = text;
    }

    renderSvg() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${this.shape}

  ${this.text}

</svg>`}
    saveToFile(shape) {
        const filename = `${shape}.svg`;
        const filepath = `./output/${filename}`;
        fs.writeFileSync(filepath, this.renderSvg());
    }
}

module.exports = Generator;