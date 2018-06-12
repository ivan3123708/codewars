function birdCode(arr){
  return arr
    .map((bird) => {
      bird = bird
        .toUpperCase()
        .replace(/-/g, ' ')
        .split(' ');

      switch (bird.length) {
        case 1:
          return bird.join(' ').slice(0, 4);
        case 2:
          return bird[0].slice(0, 2) + bird[1].slice(0, 2);
        case 3:
          return bird[0][0] + bird[1][0] + bird[2].slice(0, 2);
        case 4:
          return bird[0][0] + bird[1][0] + bird[2][0] + bird[3][0];
      }
      return bird
    });
};