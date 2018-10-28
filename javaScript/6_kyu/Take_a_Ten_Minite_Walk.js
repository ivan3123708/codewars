function isValidWalk(walk) {
  const obj = {
    'n': 0,
    's': 0,
    'e': 0,
    'w': 0
  };

  if (walk.length === 10) {
    for (let dir of walk) {
      obj[dir]++;
    }

    if (obj.n === obj.s && obj.e === obj.w) {
      return true;
    }
  }

  return false;
};