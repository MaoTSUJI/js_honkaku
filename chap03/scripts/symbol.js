// 'use strict';   // strictモードを有効にする

// console.log('---------------------------');
// console.log('symbol ---------------------------');
// let sym1 = Symbol('sym');
// let sym2 = Symbol('sym');
// console.log(sym1 === sym2); // 異なるインスタンスなのでfalse
// console.log(!!sym1);
// const MONDAY = 0;
// const TUESDAY = 1;
// if (week === MONDAY) {
//     console.log("jo");
// }

with (console) {    // with命令 オブジェクト名を省略できて、コードがシンプルに書ける
    log(Math.abs(-100));
    log(Math.max(1,2,3));
    log(Math.min(1,2,3));
    log(Math.pow(5,3));
    log(Math.clz32(1));
    log(Math.sign(-5));
    log(Math.sign(6));
    log(Math.ceil(6.5));    // 切り上げ
    log(Math.floor(6.5));    // 切り捨て    // num以下の最大の整数
    log(Math.round(6.5));    // 四捨五入
    log(Math.trunc(6.5));    // 小数部分を単純に切り捨て
    log(Math.PI);
}