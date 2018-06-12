function isSantaClausable(obj) {
  const methods = ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'];
  let isSanta = true;
  
  methods.forEach((method) => {
    if (!(obj[method] && typeof obj[method] === 'function')) isSanta = false;
  });

  return isSanta;
};