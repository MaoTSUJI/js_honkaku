'use strict';   // strictモードを有効にする

console.log('---------------------------');
console.log('5-35 literal_method---------------------------');
// let member = {
//     name: '山田太郎',
//     birth: new Date(1970, 5, 2),
//     toString() {
//         return this.name + '/ 誕生日: ' + this.birth.toLocaleDateString();
//     }
// };
// console.log(member.toString());

let name = '山田太郎';
let birth = new Date(1970, 5, 2);
let member = { name, birth};
console.log(member);

console.log('---------------------------');
console.log('5-37 literal_compute---------------------------');
let i = 0;
let member37 = {
    name: '山田太郎',
    birth: new Date(1970, 5, 2),
    ['memo' + ++i]: '正規会員',
    ['memo' + ++i]: '支部会員',
    ['memo' + ++i]: '関東',
}
console.log(member37);

