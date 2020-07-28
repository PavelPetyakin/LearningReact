const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
  // api: path.resolve(__dirname, 'src/api'),
  // assets: path.resolve(__dirname, 'src/assets'),
  // components: path.resolve(__dirname, 'src/components'),
  // images: path.resolve(__dirname, 'src/assets/images'),
  // hooks: path.resolve(__dirname, 'src/hooks'),
  postSccConfig: path.join("./config/postcss.config.js"),
  pages: path.join(__dirname, "src/pages"),
  reducers: path.resolve(__dirname, 'src/reducers'),
  // layouts: path.resolve(__dirname, "src/layouts"),
  stores: path.resolve(__dirname, 'src/reducers'),
  src: path.resolve(__dirname, "src/"),
  // types: path.resolve(__dirname, "src/types"),
};

module.exports = {
    entry: "./src/app.tsx",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "main.js"
    },
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: false,
        port: 3000,
        host: "0.0.0.0",
        historyApiFallback: true
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".svg", ".png"],
        alias: {
            // api: PATHS.api,
            // assets: PATHS.assets,
            // components: PATHS.components,
            // images: PATHS.images,
            // hooks: PATHS.hooks,
            reducers: PATHS.reducers,
            pages: PATHS.pages,
            // layouts: PATHS.layouts,
            stores: PATHS.stores,
            src: PATHS.src,
            // types: PATHS.types,
        }
    },
    module: {
        rules: [
            {
                test: /\.(ts)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader",
                    },
                    {
                        loader: "thread-loader",
                        options: {
                            workers: 3,
                            workerParallelJobs: 50,
                            poolRespawn: false,
                            poolParallelJobs: 50,
                        },
                    },
                ],
                resolve: {
                    extensions: [".ts", ".tsx", ".js"],
                },
            },
            // CSS
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                            config: { path: PATHS.postSccConfig },
                        },
                    }
                ]
            },
            // Sass
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[path][name]__[local]--[hash:base64:5]",
                            },
                            localsConvention: "camelCase",
                            url: true,
                            import: true,
                            importLoaders: 2
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                            config: { path: PATHS.postSccConfig },
                        },
                    },
                    {
                        loader: "sass-loader",
                        // options: { sourceMap: true },
                    }
                ]
            },
            // Images
            {
                test: /\.(jpe?g|png|gif|ico)/,
                loader: require.resolve("url-loader"),
                options: {
                    limit: 1000,
                    name: "images/[name].[ext]"
                }
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                    {
                        loader: "react-svg-loader",
                        options: {
                            jsx: true,
                        },
                    },
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
};