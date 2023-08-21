const {Triangle, Circle, Square } = require('./shapes.js');

//test ea.code via npm jest
describe('Shapes.js', () => {
     
    //Triangle class
    describe("Triangle", () => {
        it('creates a new trangle object and a new color when the inherited setColor() from the parent class is called', () => {
            const triangle = new Triangle();
            triangle.setColor('dodgerblue')
            expect(triangle.color).toEqual('dodgerblue');
        })
        test('when the render() method is called, the object returns the Triangle svg element with its corresponding fill attribute', () => {
            const triangle = new Triangle();
            triangle.setColor('rgba(0, 0, 0, 0.5)')
            expect(triangle.render()).toEqual(`<polygon points="150,15 243,176 57,176" fill="${triangle.color}"/>`);
            expect(triangle.render()).toBe(`<polygon points="150,15 243,176 57,176" fill="rgba(0, 0, 0, 0.5)"/>`);
        })
    });


    // Circle class
    describe('Circle', () => {
        it('creates a new circle object and a new color when the inherited setColor() from the parent class is called', () => {
            const circle = new Circle();
            circle.setColor('red');
            expect(circle.color).toEqual('red');
        })
        test('when the render() method is called, the object returns the Circle svg element with its corresponding fill attribute', () => {
            const circle = new Circle();
            circle.setColor('hsl(4.71239rad, 60%, 70%)');
            expect(circle.render()).toEqual(`<circle cx="150" cy="110" r="80" fill="${circle.color}" />`)
            expect(circle.render()).toBe(`<circle cx="150" cy="110" r="80" fill='hsl(4.71239rad, 60%, 70%)'/>`)
        })
    });

    describe('Square', () => {
        it('creates a new square object and a new color when the inherited setColor() from the parent class is called', () =>{
            const square = new Square();
            square.setColor('#D1FF33');
            expect(square.color).toEqual('#D1FF33');
        })
        test('when the render() method is called, the object returns the Square svg element with its corresponding fill attribute', () => {
            const square = new Square();
            square.setColor('#D1FF33');
            expect(square.render()).toEqual()`<rect x="68" y="30" width="160" height="160" fill="${square.color}" />`;
            expect(square.render()).toEqual()`<rect x="68" y="30" width="160" height="160" fill="#D1FF33" />`;
        })
    });
});


