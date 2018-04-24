var expect = require("chai").expect;

describe("checkForShip", function() {
  var checkForShip = require("../game_logic/ship_methods").checkForShip;
  it("should correctly report no ship at a given players coordinate", function() {
    player = {
      ships: [
        {
          locations: [[0, 0]]
        }
      ]
    };
    expect(checkForShip(player, [0, 0])).to.be.false;
  });

  it("should handle ships located at more than one coordinate", function() {
    player = {
      ships: [
        {
          locations: [[0, 0], [0, 1]]
        }
      ]
    };
    expect(checkForShip(player, [0, 1])).to.be.true;
    expect(checkForShip(player, [0, 0])).to.be.true;
    expect(checkForShip(player, [9, 9])).to.be.false;
  });
  
  it("should handle checking multiple ships", function() {
    player = {
      ships: [
        {
          locations: [[0, 0], [0, 1]]
        },
        {
          locations: [[1, 0], [1, 1]]
        },
        {
          locations: [[2, 0], [2, 1], [2, 2], [2, 3]]
        }
      ]
    };
    expect(checkForShip(player, [0, 1])).to.be.true;
    expect(checkForShip(player, [0, 0])).to.be.true;
    expect(checkForShip(player, [1, 1])).to.be.true;
    expect(checkForShip(player, [9, 9])).to.be.false;
  });
});
