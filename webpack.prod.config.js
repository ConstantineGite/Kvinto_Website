const fs = require("fs");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const nodeModules = {};
fs.readdirSync("node_modules")
	.filter(x => [".bin"].indexOf(x) === -1)
	.forEach(mod => {
		nodeModules[mod] = `commonjs ${mod}`;
	});

const loaders = {
	js: {
		test: /\.js?/,
		use: "babel-loader"
	},
	ts: {
		test: /\.tsx?$/,
		exclude: /\/node_modules\//,
		use: ["babel-loader", "ts-loader"]
	},
	json: {
		test: /\.json$/,
		use: "json-loader"
	},
	sass: {
		test: /\.sass$/,
		use: ExtractTextPlugin.extract({
			fallback: "style-loader",
			use: ["css-loader", "sass-loader"]
		})
	},
	media: {
		test: /\.(jpg|jpeg|gif|png|woff|woff2|eot|ttf|svg|otf)$/,
		exclude: /\/node_modules\//,
		use: {
			loader: "file-loader",
			options: {
				name: "style/fonts/[name].[ext]"
			}
		}
	}
};

const front = name => ({
	target: "web",
	mode: "production",
	context: `${__dirname}/source/${name}/`,
	entry: ["babel-polyfill", `${__dirname}/source/${name}/front/ts/index.ts`],
	resolve: {
		extensions: [".ts", ".js", ".tsx", ".jsx"]
	},
	output: {
		path: `${__dirname}/public/${name}/`,
		filename: `${name}.min.js`
	},
	module: {
		rules: [loaders.ts, loaders.json, loaders.sass, loaders.media]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: `./style/${name}.min.css`,
			disable: false,
			allChunks: true
		})
	]
});

const server = () => ({
	target: "node",
	mode: "production",
	externals: nodeModules,
	context: `${__dirname}/source/server/`,
	entry: ["babel-polyfill", `${__dirname}/source/server/ts/index.ts`],
	resolve: {
		extensions: [".ts", ".js", ".json"]
	},
	output: {
		path: `${__dirname}/build/`,
		filename: `index.min.js`
	},
	optimization: {
		minimize: true
	},
	module: {
		rules: [loaders.ts, loaders.json]
	}
});
// 
// module.exports = server();
// module.exports = [server(), front("main-screen"), front("touch-screen"), front("control-panel")];
module.exports = [server(), front("")];