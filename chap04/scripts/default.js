'use strict';   // strictモードを有効にする

console.log('---------------------------');
console.log('4.29 引数のデフォルト---------------------------');
function getTriangle(base = 1, height = 1) {
    return base * height / 2;
}

console.log(getTriangle(5));

console.log('---------------------------');
console.log('4.30 default new2---------------------------');
function multi(a= 1, b) {
    return a * b;
}
console.log(multi());
// 他の引数をデフォルト値にすると、参照できるのは自信より前に定義されたものだけ！
// cannnot access before initializationと出る。

//  引数が明示的に渡されなかった場合に、デフォルト値が使用される。
// null, false, 0, 空文字が渡されたときは、デフォルト値が使用されることはない。
// undefinedは未定義なので、デフォルト値が適用される
// デフォルト値を持つ仮引数は末尾で宣言すべき

// 引数が渡されなかったとき、undefinedで処理される

// function required() {
//     throw new Error('引数が不足しています');
// }

// function hoge( value = required() ) {
//     return value;
// }
// hoge();


console.log('---------------------------');
console.log('4.37 rest_param---------------------------');
function sum(...nums) {
    let result = 0;
    for (let num of nums) {
        if (typeof num !== 'number')  {
            throw new Error('指定値が数値ではありません: ' + typeof num);
        }
        result += num;
    }
    return result;
}
try {
    console.log(sum(1,2,3,4,5));
} catch (e) {
    window.alert(e.message);
}

console.log('---------------------------');
console.log('4.38 spread---------------------------');
console.log(Math.max(15,2,6,3,3));
console.log(Math.max([15,2,6,3,3]));    // 配列は認識されない
// applyメソッドで、第2引数(配列)を引数としてメソッドを実行する
console.log(Math.max.apply(null, [15,2,6,3,3]));
// 実引数(配列)の前に...を付与することで、　配列が展開されたものがmaxメソッドに渡される
console.log(Math.max(...[15,2,6,3,3]));

console.log('---------------------------');
console.log('4.41 named_args_new---------------------------');
function getTriangle41({base = 1, height = 1}) {
    return base * height / 2;
}

console.log(getTriangle41({ base: 5, height: 4 }))

console.log('---------------------------');
console.log('4.42 named_args_props---------------------------');
function show({name}) { // nameプロパティだけを分割代入によって取り出す。
    console.log(name);
};

let member = {
    mid: 'Y0001',
    name: '山田太郎',
    address: 't_yamada@abc.com'
};
show(member);