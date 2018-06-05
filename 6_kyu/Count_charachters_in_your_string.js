function count (string) {  
  var res = {};

  for (var i = 0; i < string.length; i++) {
    if (res[string[i]]) res[string[i]]++;
    else res[string[i]] = 1;
  };

  return res;
};