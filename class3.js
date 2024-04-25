//クラス
//構成要素
//コンストラクタ:new演算子を使ってインスタンス化したときに1度だけ実行する(constructor)
//メソッド:特定の処理を記述したもの
//プロパティ:クラス内で利用できる変数

class Animal {
    constructor(name) {
     //プロパティ
      this.speed = 0;
      this.name = name;
    }
    //メソッド
    run(speed) {
      this.speed += speed;
      alert(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
      this.speed = 0;
      alert(`${this.name} stopped.`);
    }
  }
  
  //インスタンス
  let animal = new Animal("My animal");


 
class Rabbit extends Animal {
    //メソッド
    hide() {
      alert(`${this.name} hides!`);
    }
  }

  //Rabbit クラスのオブジェクトは、rabbit.hide() のように Rabbit のメソッドと、rabbit.run() のように Animal メソッド両方が利用可能
  
  let rabbit = new Rabbit("White Rabbit");
  
  rabbit.run(5); // White Rabbit runs with speed 5.
  rabbit.hide(); // White Rabbit hides!