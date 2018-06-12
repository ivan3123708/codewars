function GetSum( a,b )
{
   let start = Math.min(a, b);
   let end = start === a ? b : a;
   let res = [];
   
   while(end >= start) {
     res.push(start);
     start++;
   }
   
   return res.reduce((a, b) => a + b);
}