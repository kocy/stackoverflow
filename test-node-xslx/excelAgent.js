var xlsx = require('node-xlsx');

exports.read = function(_file) {
    var xlsObject = xlsx.parse(_file);

    return xlsObject ? xlsObject : [];
}