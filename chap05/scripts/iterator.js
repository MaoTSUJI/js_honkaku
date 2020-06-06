'use strict';   // strictモードを有効にする

console.log('---------------------------');
console.log('5.46 ---------------------------');

let data_ary = ['one', 'two', 'three'];
let data_str = 'あいうえお';
let data_map = new Map([['Mon', '月曜'],['Tue', '火曜'],['Wed', '水曜']]);

for(let d of data_ary) {
    console.log(d);
}
for(let d of data_str) {
    console.log(d);
}
for(let [key, value] of data_map) {
    console.log(`${key} : ${value}`)
}
// イテレータを利用してることを表現
let itr = data_ary[Symbol.iterator]();  // 配列内の要素を列挙するためのイテレータ(オブジェクト)を返す
let d;
while(d = itr.next()) { // nextメソッドは次の要素を取り出す
    if(d.done) { break; }   // イテレータが終端に到達したか (次の要素がないかどうか)
    console.log(d.done);
    console.log(d.value);   // dの次の要素の値
}

console.log('---------------------------');
console.log('5.48 iterator_my.js ---------------------------');
class MyIterator {
    // 引数経由で渡された配列をdataプロパティに設定
    constructor(data) {
        this.data = data;
        this[Symbol.iterator] = function*() {
            let current = 0;
            // next()メソッドの中でthisを使うと、自分自身(イテレータ)になってしまう。
            // next()メソッド内でMyIteratorのメンバにアクセスするために、thatに置き換える
            let that = this;
            while(current < that.data.length) {
                yield that.data[current++];
            }
        }
    }

}

// MyIteratorクラスで保持された配列を列挙
let itr48 = new MyIterator(['one', 'two', 'three']);
for(let value of itr48) {
    console.log(value);
}

console.log('---------------------------');
console.log('5.49 gen.js ---------------------------');
function* myGenerator() {
    yield 'あいうえお'; // returnとよく似た命令で、関数の値を呼び出し元に返す。
    // ↑で処理を一旦中断するだけで、次呼ばれたら↓の処理を順次行う
    yield 'かきくけこ';
    yield 'さしすせそ';
}
for(let t of myGenerator()) {
    console.log(t);
}

console.log('---------------------------');
console.log('5.50 gen_prime.js ---------------------------');
// 素数を求めるジェネレーター
function* genPrimes() {
    let num = 2;    // 素数の開始値
    while (true) {
        if (isPrime(num)) { yield num; }
        num++;
    }
}
// 引数valueが素数かどうかを判定
function isPrime(value) {
    let prime = true;   // 素数かどうかを表すフラグ
    // 2~Math.sqrt(value)で、valueを割り切れる値があるかを判定
    for (let i = 2; i <= Math.floor(Math.sqrt(value)); i++) {
        if(value % i === 0) {
            prime = false;  // 割り切れたら素数でない
            break;
        }
    }
    return prime;
}

for(let value of genPrimes()) {
    // 素数が101以上になったら終了
    if(value > 100) { break; }
    console.log(value);
}
// ジェネレータは何かしらの反復する値を生成する用途では、
// メモリ消費を最小限に留めるので有効な手段となる。

console.log('---------------------------');
console.log('5.52 proxy.js ---------------------------');
let data52 = { red: '赤色', yellow: '黄色'};
let proxy = new Proxy(data52, {
    get(target, prop) {
        return prop in target ? target[prop] : '?';
    }
});
proxy.red = 'レッド';
console.log(proxy.red);
console.log(data52.red);