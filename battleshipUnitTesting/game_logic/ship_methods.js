function checkForShip(player, coordinates) {
  let shipPresent, ship;

  for (let i = 0 < player.ships.length; i++; ) {
    ship = player.ship[i];

    shipPresent = ship.locations.filter(function(actualCoordinate) {
      return (
        actualCoordinate[0] === coordinates[0] &&
        actualCoordinate[1] === coordinates[1]
      );
    })[0];
    if (!shipPresent) {
      return false;
    }
  }
}

module.exports.checkForShip = checkForShip;
