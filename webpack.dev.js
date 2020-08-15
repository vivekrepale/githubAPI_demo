const path = require("path");
const Dotenv = require("dotenv-webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./app/index.js",
  mode: "development",
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "index"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./app/index.html",
    }),
    new Dotenv(),
  ],
  devServer: {
    before: (index, server) => {
      server._watch("./index/**/*.html");
    },
    contentBase: path.join(__dirname, "index"),
    hot: true,
    port: 3000,
    // host: "0.0.0.0",
    open: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/i,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-react",
              [
                "@babel/preset-env",
                {
                  targets: { node: "12" },
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.s[a/c]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg|pdf)$/,
        use: [
          {
            loader: "file-loader",
            options: { name: "[path][name]-[hash:8].[ext]" },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
      {
        test: /\.svg$/,
        use: "svg-inline-loader",
      },
      // { type: "javascript/auto", test: /\.json$/, use: "file-loader" },
    ],
  },
};
