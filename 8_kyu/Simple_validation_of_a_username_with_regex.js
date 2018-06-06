function validateUsr(username) {
  if(username.length >= 4 && username.length <= 16) {
    return /^[a-z0-9_]+$/g.test(username);
  }
  return false;
};