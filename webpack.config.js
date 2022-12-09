//cıktı dosyasının hangi dizine gidecegini belirlemek için bir nodejs pakatine ihtiyacımız var
const path=require("path");
module.exports={
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"bundle.js"
    },
    devServer:{
        //hangi klasör içindeki dosyalar taranacak
        contentBase:path.resolve(__dirname,"dist"),
        port:8080,
        //compress:true sıkıstırılsınmı diye soruyor
        historyApiFallback:true
    },
    module:{
        rules:[
            {
                test:/\.js$/,//tüm js dosyaalrına bakılsın
                loader:"babel-loader",
                exclude:/node_modules/ //node_modules taranmasın
            },
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            }
            ,
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            }
        ]
    }
}