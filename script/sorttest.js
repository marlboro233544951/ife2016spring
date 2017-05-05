var items = [
  {name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic' },
  { name: 'Zeros', value: 37 }
];

var a = Object.prototype.toString.call(items);
console.log(a);

items.sort(function (a, b) {
//   if (a.value > b.value) {
//     return 1;
//   }
//   if (a.value < b.value) {
//     return -1;
//   }
//   // a 必须等于 b
//   return 0;
// 
  return a-b;
});
items.forEach(function(item,index,obj){
  console.log(item);
});