function declareWinner(fighter1, fighter2, firstAttacker) {
  var first = fighter1.name === firstAttacker ? fighter1 : fighter2;
  var second = fighter2.name === firstAttacker ? fighter1 : fighter2;
  
  while (second.health > 0 && first.health > 0) {
    second.health -= first.damagePerAttack;
    if (second.health <= 0) break;
    first.health -= second.damagePerAttack;
    if (first.health <= 0) break;
  }
  
  return first.health > second.health ? first.name : second.name;
};