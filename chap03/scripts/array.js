'use strict';   // strictモードを有効にする

console.log('---------------------------');
console.log('3.20 callback foreach---------------------------');
var data = [2,3,4,5];
data.forEach(function(value, index, array) {
    console.log(value * value);
})

console.log('---------------------------');
console.log('3.21 callback map---------------------------');
var result = data.map(function(value, index, array) {
    return value * value;
});
console.log(result);

console.log('---------------------------');
console.log('3.22 callback some---------------------------');
var data2 = [4, 9, 16, 25];
var result2 = data.some(function(value, index, array) {  // 1つでも条件に達してたらtrue
    return value % 3 === 0;
});
console.log(result2);

// everyメソッドは全部が条件に達していたらtue

console.log('---------------------------');
console.log('3.23 callback filter---------------------------');
var result3 = data2.filter(function(value, index, array) {
    return value % 2 === 1;
});
console.log(result3);

console.log('---------------------------');
console.log('3.24 callback sort---------------------------');
var ary = [5, 25, 10];
console.log(ary.sort());    // 文字列としてソートする
console.log(ary.sort(function(x, y) {
    return x - y;   // 数値としてソート
}));

console.log('---------------------------');
console.log('3.25 callback clazz---------------------------');
var classes = ['部長', '課長', '主任', '担当'];
var members = [
    { name: 'スズキ聖子', class: '主任'},
    { name: '山口寿夫', class: '部長'},
    { name: '井上太郎', class: '課長'},
    { name: '和田かずみ', class: '主任'},
    { name: '子守言うた', class: '担当'},
];
console.log(members.sort(function(x, y) {
    return classes.indexOf(x.class) - classes.indexOf(y.class);
}));

