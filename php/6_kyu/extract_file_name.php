function fileNameExtractor(string $dirtyFileName): string {
  $final = '';
  $pattern = '/^\d+_/';
  
  $res = preg_filter($pattern, '', $dirtyFileName);
  $res = preg_split('/\./', $res);
  
  for ($i = 0; $i < count($res) - 1; $i++) {
    $final .= $res[$i] . '.';
  }
  
  return substr($final, 0, -1);
}