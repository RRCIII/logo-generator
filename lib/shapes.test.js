const {Triangle, Circle, Square } = require('./shapes.js');

describe('Shapes', () => {
    //Triangle class

    describe("Triangle", () => {
        it('creates a new trangle object and a new color is set from the inherited setColor() from the parent class', () => {
            const triangle = new Triangle();
            triangle.setColor('dodgerblue')
            expect(triangle.color).toEqual('dodgerblue');
        })
        it('when the render() method is called, the object returns the Triangle svg element with its corresponding fill attribute', () => {
            const triangle = new Triangle();
            triangle.setColor('rgba(0, 0, 0, 0.5)')
            expect(triangle.render()).toEqual(`<polygon points="150,15 243,176 57,176" fill="${triangle.color}"/>`)
            expect(triangle.render()).toEqual(`<polygon points="150,15 243,176 57,176" fill="rgba(0, 0, 0, 0.5)"/>`)
        })
    })
})