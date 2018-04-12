var excelAgent = require('./excelAgent.js');

var excelFile = './test.xlsx';
// first sheet's data
var sheet1 = excelAgent.read(excelFile)[0].data;
// second sheet's data
var sheet2 = excelAgent.read(excelFile)[1].data;

console.log('Data in sheet1: ')
console.dir(sheet1)

console.log('Data in sheet2: ')
console.dir(sheet2)