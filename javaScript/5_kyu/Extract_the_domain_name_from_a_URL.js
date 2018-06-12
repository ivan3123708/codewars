function domainName(url){
  return url.match(/(\w)(.*?)[\w-]+/g).filter((x) => x !== 'http' && x !== 'https' && x !== 'www')[0];
};