
import * as express from "express";
import * as path from "path";
import * as _ from "lodash";
import * as pug from "pug";

//const juice = require("juice");
//const sass = require('node-sass');
//const layout = require("./data/layout.json");

	//const blockEN = require("./data/blocks/en.json");
	//const blockAR = require("./data/blocks/ar.json");
	//const blocks = {'en': blockEN, 'ar': blockAR}
	//const tempImg = require("./data/tempIMG.json");

	//const commonElem = require("./data/blocks/commonElements.json");

	//const en = require("./data/locale/en.json");
	//const ar = require("./data/locale/ar.json");

	//const app = express();

	//const locale = { en, ar };

const _TEMPLATE = path.resolve("./views-ref/template.pug");
//const _STYLE = path.resolve(`./views-ref/style/main.sass`);
	//const _STORAGE = `http://localhost:3000/storage/`;

// const localeParse = (type, lang) => {
// 	const data = _.cloneDeep(layout[type]);

// 	_.each(data.days, (day, dayCnt) => {
// 		_.each(day.blocks, (block, blockCnt) => {
// 			block.title = _.get(locale[lang], block.title);
// 			block.cover = `${block.cover}`;
// 			block.desc = _.get(locale[lang][type], `day${dayCnt}.block${blockCnt}`);
// 		})
// 	})

// 	return data;
// }

//const selectLeng = (leng) => {
//	return blocks[leng]
//}	

//const switchingLayout = (leng) => {

//	return leng
//}	


const render = (data, textBlock, leng) => {
	// const cssBuffer = sass.renderSync({ file: _STYLE });
	// const style = cssBuffer.css.toString();

	// const html = pug.renderFile(_TEMPLATE, { data, style, commonElem,  leng, tempImg, textBlock});

	// return juice(html);
}

		//app.use(express.static(__dirname));

app.get('/:lang/:type', (req, res)=>{
		//const data = localeParse(req.params.type, req.params.lang);
		//let textBlock = selectLeng(req.params.lang)
		//let leng = switchingLayout(req.params.lang)
    	//const html = render(data, textBlock, leng);
    	//res.send(html)
});

// app.listen(3000, ()=>{
// 	console.log("listen on http://localhost:3000");
// });
