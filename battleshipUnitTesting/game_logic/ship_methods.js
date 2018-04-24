function checkForShip(player, coordinates) {
  let shipPresent;
  let ship;

  for (let i = 0; i < player.ships.length; i++) {
    ship = player.ships[i];

    shipPresent = ship.locations.filter(function(actualCoordinate) {
      return (
        actualCoordinate[0] === coordinates[0] &&
        actualCoordinate[1] === coordinates[1]
      );
    })[0];
    if (!shipPresent) {
      return false;
    }
      return true;
  }
}

module.exports.checkForShip = checkForShip;
