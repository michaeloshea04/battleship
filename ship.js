function createShip(length) {
    const ship = {
        length: length,
        hitCount: 0,
	    sunk: false,        
    };
    //method to increase number of hits
    ship.hit = function() {
        if(!ship.sunk) {
            ship.hitCount += 1;
            if(ship.hitCount === ship.length) {
                ship.sunk = true;
            }
        }
    }

    //method to check is the ship is sunk
    ship.isSunk = function () {
        return ship.sunk;
    }

    return ship;
}



module.exports = createShip;


