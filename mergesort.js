var b = 3;

 function mergeSort(a) {
   if (a.length < 2) {
     return a;
   } else {
     var mijloc = Math.trunc(a.length/2);
     console.log(mijloc);
console.log(stanga);
console.log(dreapta);
     var stanga = a.slice(0, mijloc);
     var dreapta = a.slice(mijloc, a.length);
   }
   return merge(mergeSort(stanga), mergeSort(dreapta));
 }
 function merge(s, d) {
  var result = [];
   while (s.length && d.length) {
     if (s[0] <= d[0]) {
       result.push(s.shift());
     } else {
       result.push(d.shift());
     }
   }
   while (s.length) {
     result.push(s.shift());
   }
   while (d.length) {
     result.push(d.shift());
   }
   return result;
 }
console.log(mergeSort([2, 3, 1,5, 10, 15, 8]));