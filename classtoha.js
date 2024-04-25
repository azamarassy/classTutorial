//クラス
//構成要素
//コンストラクタ:new演算子を使ってインスタンス化したときに1度だけ実行する(constructor)
//メソッド:特定の処理を記述したもの
//プロパティ:クラス内で利用できる変数



// Box.js : 長方形クラス*/
 
class Box{
    // コンストラクタ（クラスをインスタンス化＜new＞したときに実行される処理、初期化）
    constructor(width, height){
        //プロパティ
        this.width = width;        // 幅  このクラスにはwidthという変数(プロパティ)があることが宣言できる。＋その変数にはwidthを代入する
        this.height = height;        // 高さ  このクラスにはheightという変数(プロパティ)があることが宣言できる。＋その変数にはheightを代入する
    }
    // メソッド（インスタンスを通して呼び出すことができる関数）
    showMenseki(){
        console.log(this.width * this.height);    // 面積をコンソールに表示

    }
    // 面積を返すメソッド
    getMenseki(){
        return ( this.width * this.height );
    }
}


let box = new Box(100, 200);  //幅100, 高さ200のboxという名前のBoxを作る
box.showMenseki(); //BoxというクラスにあるshowMensekiという処理(メソッド)を実行
console.log("面積は、" + box.getMenseki() );

// これ以降、boxというインスタンスを通してBoxクラスにアクセスできる。
// この時点でconstructorの引数widthには100が、heightには200が代入される。

