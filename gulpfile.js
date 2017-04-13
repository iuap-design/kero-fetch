'use strict';

var gulp = require('gulp');
var path = require('path');
var envPath = process.cwd();
const fs = require('fs');
const jsdoc2md = require('jsdoc-to-markdown');
/**
 * 根据源文件地址数组、输出目录产出最终api
 * @param  {array} sourceArr 文件地址
 * @param  {string} rsPath   输出目录地址
 */
function produceAPI(sourceArr, rsPath) {
    var apidocsPath = path.join(envPath, 'docs');
    const output = jsdoc2md.renderSync({ files: sourceArr })
    var isexist = fs.existsSync(apidocsPath);
    if (!isexist) {
        fs.mkdirSync(apidocsPath);
    }
    fs.writeFileSync(path.join(apidocsPath, rsPath), output)
}

gulp.task('docs', function() {
    //dataTable 源文件
    var dtSrcPath = ['index.js', 'server-dataTable.js', 'server-fire.js','server-processXHRError.js','server-util.js'];

    //dataTable和row 源文件绝对路径地址
    var dtAbsolutePath = [];
    for (var i = 0; i < dtSrcPath.length; i++) {
        dtAbsolutePath.push(path.join(envPath, 'src/' + dtSrcPath[i]));
        // console.log("dataTable--"+dtAbsolutePath[i]);
    }



    produceAPI(dtAbsolutePath, 'kero-fetch.md');
})
