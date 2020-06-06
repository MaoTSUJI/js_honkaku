// MyAppモジュールの定義
module MyApp {
    // Memberクラスの定義
    export class Member {
        // コンストラクター (firstName / lastNameプロパティを準備)
        constructor (private firstName: string,
            private lastName: string) {}

        // getNameメソッド
        public getName() : string {
            return this.lastName + this.firstName;
        }
    }
}

let m = new MyApp.Member('太郎', '山田');
console.log(m.getName());   // 結果: 山田太郎