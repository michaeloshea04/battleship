const createShip = require('./ship.js');

beforeEach(() => {
    battleship = createShip(4); // Create a battleship before each test
});

it('should initialize a ship with the correct length', () => {
    expect(battleship.length).toBe(4);
});

it('should initialize a ship with 0 hits and not be sunk', () => {
    expect(battleship.hitCount).toBe(0);
    expect(battleship.sunk).toBe(false);
});

it('should increase hit count when hit() is called', () => {
    battleship.hit();
    expect(battleship.hitCount).toBe(1);
});

it('should mark the ship as sunk when hit count equals its length', () => {
    battleship.hit(); // 1 hit
    battleship.hit(); // 2 hits
    battleship.hit(); // 3 hits
    battleship.hit(); // 4 hits (sunk)
    expect(battleship.sunk).toBe(true);
});

it('should not allow additional hits after the ship is sunk', () => {
    battleship.hit(); // 1 hit
    battleship.hit(); // 2 hits
    battleship.hit(); // 3 hits
    battleship.hit(); // 4 hits (sunk)
    battleship.hit(); // Additional hit (should not affect hit count)
    expect(battleship.hitCount).toBe(4);
});

it('should correctly determine if the ship is sunk', () => {
    expect(battleship.isSunk()).toBe(false); // Not sunk yet
    battleship.hit(); // 1 hit
    battleship.hit(); // 2 hits
    battleship.hit(); // 3 hits
    battleship.hit(); // 4 hits (sunk)
    expect(battleship.isSunk()).toBe(true); // Now it's sunk
});
