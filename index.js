const express = require('express');
const Gun = require('gun');
const port = process.env.PORT || 4000;

const app = express();
app.use(Gun.serve);
app.use(express.static(__dirname));
app.use(express.static(__dirname + "/public"));

const server = app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
const gun = Gun({ file: 'data', web: server });


