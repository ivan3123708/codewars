function incrementString (strng) {
  var endsWithNum = strng.match(/\d+$/);

  if (!endsWithNum) {
    return strng + 1;
  } else if (/9$/.test(strng[strng.length - 1])) {
    var str = strng;
    var num = '';
    var numInc;

    for (var i = strng.length - 1; i >= 0; i--) {
      if (/9$/.test(strng[strng.length - 1])) {
        if (strng[i] == 9) {
          num += strng[i];
          str = str.slice(0, -1);
        }
      }
    }

    numInc = (parseInt(num) + 1).toString();
    
    if (num.length !== numInc.length  && str[str.length - 1] === '0') {
      return str.slice(0, -1) + numInc;
    } else {
      return str + numInc;
    }
  } else {
    var numInc = parseInt(strng[strng.length - 1]) + 1;
    return strng.slice(0, -1) + numInc;
  }
}