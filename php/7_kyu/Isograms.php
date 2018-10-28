function isIsogram($string) {
  $letters = new stdClass();

  for ($i = 0; $i < strlen($string); $i++) {
    $key = strtolower($string[$i]);
  
    if (isset($letters->$key)) {
      $letters->$key += 1;
    } else {
      $letters->$key = 1;
    }
  }

  foreach ($letters as $letter) {
    if ($letter > 1) {
      return false;
    }
  }
  
  return true;
}