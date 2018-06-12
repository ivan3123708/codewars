function validPass(password){
  return /^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z]{3,20}$/.test(password) ? 'VALID' : 'INVALID';
};