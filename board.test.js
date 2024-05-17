const createBoard = require('./gameboard.js');

beforeEach(() => {
    battleBoard = createBoard(); // Create a board before each test
});

it('should return an array length of 10', () => {
    expect(createBoard().length).toBe(10);
});

it('should return an 10', () => {
    expect(createBoard()[4]).toBe(5);
});