function product($a) {
  if ($a === NULL) {
    return NULL;
  }
  
  $res = $a[0];

  for ($i = 1; $i < count($a); $i++) {
    $res *= $a[$i];
  }
  
  return $res;
}