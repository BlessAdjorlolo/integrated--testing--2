const {sum, subtract, multiply, divide} = require("./math");

beforeAll(()=>{
    console.log("Before All Test");
});

describe('Function', () =>{
    beforeEach(() => {
        console.log("Before Each");
    });
    
    it("Should sum two number", ()=>{
        expect(sum(2, 3)).toBe(5)
    });
    it("Should subtract two number", ()=>{
        expect(subtract(5, 3)).toBe(2)
    });

    it("Should multiply two number", () => {
        expect(multiply(3, 3)).toBe(9)
    });

    it("Should divide two number", ()=>{
        expect(divide(12, 3)).toBe(4)
    });

    afterEach(() => {
        console.log("After Each Test");
    })
});

afterAll(() => {
    console.log("Run After All Test")
});
