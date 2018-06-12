class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  
  guess(n) {
    if(this.lives <= 0) throw new Error('Alreade dead');
    if(n !== this.number) {
    	this.lives--;
    	if(this.lives < 0) {
    		throw new Error('Ypu died bitch');
    	} else {
    		return false;
    	}
    } else {
    	return true;
    }
  }
};