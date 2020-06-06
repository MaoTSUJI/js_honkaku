'use strict';   // strictモードを有効にする

console.log('---------------------------');
console.log('5.30 class ---------------------------');
class Member {  // 匿名クラスも表現できる
    // コンストラクター
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // firstNameプロパティ
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }

    // lastNameプロパティ
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }

    // メソッド
    getName() {
        return this.lastName + this.firstName;
    }
}

let m = new Member('太郎', '山田'); // クラスを定義した後に呼び出す
console.log(m.getName());
console.log(m.firstName);
// class命令で定義されたクラスは、内部的には関数
// JavaScriptにいわゆるクラスが導入されたわけではなく、
// あくまで「Functionオブジェクト」で表現していたクラスをより分かりやすく表現できるようにした
// プロトタイプのオブジェクト思考構文を多い包むシンタックスシュガー（糖衣構文）

// ただし、class命令で定義されたクラスは、Functionオブジェクトによるそれとは等価ではない

// let a = Member('真緒', '辻');   // クラスはnew演算子がないとだめ
console.log('---------------------------');
console.log('5.32 static ---------------------------');
class Area {
    static getTriangle(base, height) {  // 静的メソッド
        return base * height / 2;
    }
}
console.log(Area.getTriangle(10, 5));

console.log('---------------------------');
console.log('5.33 class_extends ---------------------------');
class BusinessMember extends Member {
    // 引数にclazzを追加
    constructor(firstName, lastName, clazz) {
        // オーバーライド
        // 基底クラスで定義された機能を派生クラスで再定義すること
        super(firstName, lastName); // 基底クラスのコンストラクターを参照
        this.clazz = clazz;
    }

    // 役職込の名前を返すよう修正
    getName() {
        return super.getName() + '/役職: ' + this.clazz;
    }
    work() {
        return this.getName() + 'は働いています。';
    }
}

let bm = new BusinessMember('花子', '山田', '課長');
console.log(bm.getName());  // 継承元のメソッドが利用できることを確認
console.log(bm.work());