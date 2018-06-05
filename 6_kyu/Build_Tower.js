function towerBuilder(nFloors) {
  var tower = [];

  for (var i = 1; i <= nFloors; i++) {
    var floor = '';

    for (var j = 0; j < nFloors - i; j++) {
      floor += ' ';
    }

    for (var k = 0; k < i * 2 - 1; k++) {
      floor += '*';
    }

    for (var l = 0; l < nFloors - i; l++) {
      floor += ' ';
    }

    tower.push(floor);
  }

  return tower;
};