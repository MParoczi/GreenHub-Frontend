const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "development";

module.exports = {
  mode: "development",
  target: "web",
  devtool: "cheap-module-source-map",
  entry: "./public/index",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    stats: "minimal",
    overlay: true,
    historyApiFallback: true,
    disableHostCheck: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    https: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      favicon: "public/favicon.ico"
    }),
    new webpack.DefinePlugin({
      "process.env.MUSIC_GENRES": JSON.stringify([
        "Pop",
        "Electronic/Dance",
        "Hip-Hop",
        "Rock",
        "Jazz",
        "R&B",
        "Soul",
        "Indie",
        "Classical",
        "Metal",
        "Latin",
        "Reggae",
        "Blues",
        "Funk",
        "Punk",
        "Country",
        "Folk & acoustic",
        "Desi",
        "Arab",
        "Afro",
        "K-Pop"
      ])
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  }
};
