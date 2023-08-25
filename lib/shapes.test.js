const {Triangle, Circle, Square } = require('./shapes.js');

//test ea.code via npm jest
describe('Shapes.js', () => {
     
    //Triangle class
    describe("Triangle", () => {
        it('creates a new triangle object and a new color when the inherited setColor() from the parent class is called', () => {
            const triangle = new Triangle();
            triangle.setColor('dodgerblue')
            expect(triangle.color).toEqual('dodgerblue');
        })
    });


    // Circle class
    describe('Circle', () => {
        it('creates a new circle object and a new color when the inherited setColor() from the parent class is called', () => {
            const circle = new Circle();
            circle.setColor('red');
            expect(circle.color).toEqual('red');
        })
    });

    describe('Square', () => {
        it('creates a new square object and a new color when the inherited setColor() from the parent class is called', () =>{
            const square = new Square();
            square.setColor('#D1FF33');
            expect(square.color).toEqual('#D1FF33');
        })
    });
});


