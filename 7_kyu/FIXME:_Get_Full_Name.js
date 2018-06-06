class Dinglemouse{
  constructor( firstName, lastName ){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  getFullName(){
    const first = this.firstName || '';
    const last = this.lastName || '';
    
     if (first && last) return first + ' ' + last;
     else if(first && !last) return first;
     else return last;
  }
};