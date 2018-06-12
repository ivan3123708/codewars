function findOdd(A) {
  var odd = [];
  
  for (var i = 0; i < A.length; i++) {
    var count = 0;

    for (var j = 0; j < A.length; j++) {
      if (A[i] === A[j]) count++;
    }

    if (count % 2 !== 0) odd.push(A[i]);
  }

  return odd[0];
};