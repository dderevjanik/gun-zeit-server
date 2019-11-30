const express = require('express');
const Gun = require('gun');

const app = express();
app.use(Gun.serve);
app.use(express.static(__dirname));
app.use(express.static(__dirname + "/public"));

const server = app.listen(3000);
const gun = Gun({ file: 'data', web: server });
console.log(gun);
