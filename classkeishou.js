//クラス
//構成要素
//コンストラクタ:new演算子を使ってインスタンス化したときに1度だけ実行する(constructor)
//メソッド:特定の処理を記述したもの
//プロパティ:クラス内で利用できる変数


class Slope{
  constructor(size, angle){
    this.size = size;    //プロパティ
    this.angle = angle;  //プロパティ
  }

  getsize(){  //メソッド
    return(this.size);  //このクラスのコンストラクタのプロパティのsizeを返す処理

  }

}

class Step extends Slope{ //StepクラスはSlopeクラスを継承

  //これにより、Stepはsizeとangleをプロパティとして持ち、getsizeをメソッドとして持つ

  //親クラスのコンストラクタを継承して拡張して、新しいプロパティを追加
  constructor(size, angle, strength){

    super(size, angle,); //仕様上親クラスのコンストラクタを呼ぶ必要がある
    this.strength = strength; //新たなプロパティを追加

  }

  //親クラスにはないメソッドを作る
  Distance(){
    return(this.size * this.angle);

  }

  //メソッドのオーバーライド:親クラスのメソッドを継承してちょっと変更したメソッドを作る
  getsize(){
      return(super.getsize() + '!'); //super.method(...) は親クラスのメソッドを呼び出す。
  }

  getstrength(){
    return(this.strength);
  }

}

let saka = new Step(21,21,'つよい');
console.log(akachin.Distance());
console.log(akachin.getsize());
console.log(akachin.getstrength());