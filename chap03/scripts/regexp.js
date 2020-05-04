'use strict';   // strictモードを有効にする

console.log('---------------------------');
console.log('3.37 match ---------------------------');
var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?/i;
var str = 'サポートサイトは、http://www.wings-msn.to/です';
str += 'サンプル紹介サイトHTTP://www.web-delo.com/もよろしく！';

var result = str.match(p);
for (var i = 0, len = result.length; i < len; i++) {
    console.log(result[i]);
}

console.log('---------------------------');
console.log('3.40 マルチラインモード---------------------------');
var p1 = /^[0-9]{1,}/gm;    // オプションにmを入れるとマルチラインモードになって、複数行判定する
var str1 = '101匹と\n7人の小人';
var result1 = str1.match(p1);
for (var i = 0, len = result1.length; i < len; i++) {
    console.log(result1[i]);
}

console.log('---------------------------');
console.log('3.41 Unicode ---------------------------');
let str2 = '叱ります';
console.log(str2.match(/^.ります$/g));

console.log('---------------------------');
console.log('3.43 exec ---------------------------');
var p3 = /(http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?)/gi;
var str3 = 'サポートサイトはhttp://www.wings.msn.to/です。';
str3 += 'サンプル紹介サイトHTTP://www.web-deli.com/もよろしく！'
while((result1 = p3.exec(str3)) !== null) {
  console.log(result1[0]);
}

console.log('---------------------------');
console.log('3.45 test ---------------------------');
var p4 = /(http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?)/gi;
var str41 = 'サポートサイトはhttp://www.wings.msn.to/です。';
var str42 = 'サポートサイト「サーバサイド技術の学び舎」をよろしく！';
console.log(str41.search(p4));
console.log(str42.search(p4));

console.log('---------------------------');
console.log('3.47 replace ---------------------------');
var p5 = /(http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?)/gi;
var str51 = 'サポートサイトはhttp://www.wings.msn.to/です。';
document.getElementById("replace").innerHTML = str51.replace(p5, '<a href="$1">$1</a>');