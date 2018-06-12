function humanReadable(seconds) {
  var HH = Math.floor(seconds / 3600);
  var MM = Math.floor(seconds % 3600 / 60);
  var SS = seconds % 3600 % 60;
  
  return (HH >= 10 ? HH : '0' + HH) + ':' + (MM >= 10 ? MM : '0' + MM) + ':' + (SS >= 10 ? SS : '0' + SS);
};