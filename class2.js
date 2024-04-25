//クラス
//構成要素
//コンストラクタ:new演算子を使ってインスタンス化したときに1度だけ実行する(constructor)
//メソッド:特定の処理を記述したもの
//プロパティ:クラス内で利用できる変数


 
class Slope{
constructor(length,angle,strength){
this.length = length;
this.angle = angle;
this.strength = strength;
}



getQuality(){
    return ( this.length * this.angle * this.strength );
}


}


let fullbokki = new Slope(30,90,100);
console.log(fullbokki.getQuality());