'use strict';   // strictモードを有効にする

console.log('---------------------------');
console.log('3-2. wrapper ---------------------------');
var flag = new Boolean(false);  // null以外のオブジェクトをtrueとみなす！！

if (flag) {
    console.log('flagはtrueです');
}
// 基本データ型をnew演算子を使ってインスタンス化するのは、原則避ける

console.log('---------------------------');
console.log('3-3. string.js ---------------------------');
var str1 = 'にわにはにわにわとりがいる';
console.log(str1);
console.log("indexOf: " + str1.indexOf('にわ'));
console.log("lastIndexOf: " + str1.lastIndexOf('にわ'));
console.log("str1.indexOf('にわ'): " + str1.indexOf('にわ', 3));
console.log("str1.indexOf('わ, 5'): " + str1.lastIndexOf('わ', 5));
console.log(str1.startsWith('にわ') );
console.log(str1.endsWith('にわ') );
console.log(str1.includes('にわ') );
var str2 = 'Wingsプロジェクト';
var str3 = '叱る';
var str4 = '    wings    ';
console.log(str2.charAt(4) );
console.log(str2.slice(5, 8) );
console.log(str2.substring(5, 8) );
console.log(str2.substr(5, 3) );
console.log(str2.split('s') );  // sを起点に文字を分解する
console.log(str1.split('わ', 3) );  // ３つの分解
console.log(str2.charCodeAt(0));    // 与えられたインデックスに位置する文字のUTF-16コードを表す
console.log(String.fromCharCode(87, 105, 110, 103) );
console.log(str2.concat('有限会社') );
console.log(str2.repeat(2) );
console.log(str4.trim() );  // スペース文字を削除してくれる
console.log(str2.length );
console.log(str3.length );