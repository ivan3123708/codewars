function addedChar(s1, s2){
  var start;
  var end;

  for (var i = 0; i < s1.length; i++) {
    start = s2.indexOf(s1[i]);
    end = s2.indexOf(s1[i]) + 1;

    s2 = s2.slice(0, start) + s2.slice(end, s2.length);
  }

  return s2[0];
};