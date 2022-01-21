const express = require('express')

const app = express();

app.get('/', (res) => {
    console.log('/: received a request.');
    res.send('hello')
});

app.listen(8000, () => {
    console.log("listening port 8000...");
})