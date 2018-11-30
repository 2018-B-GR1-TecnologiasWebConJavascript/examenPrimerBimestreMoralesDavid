"use strict";
exports.__esModule = true;
var fs = require("fs");
var arregloRespuesta = [
    {
        tipo: "uno"
    }
];
exports.readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, 'utf-8', function (error, data) {
            if (error) {
                reject(error);
            }
            else {
                resolve(JSON.parse(data));
            }
        });
    });
};
exports.readFile("data.json")
    .then(function (contenido) {
    for (var variable in contenido) {
        console.log(contenido);
    }
})["catch"](function (error) {
    console.log("error");
});
