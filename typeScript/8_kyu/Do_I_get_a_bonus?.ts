export class Kata {
    public static bonusTime(salary:number, bonus:boolean):string {
      return bonus ? '\u00A3' + salary + '0' : '\u00A3' + salary;
    }
};