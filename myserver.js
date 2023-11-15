const express = require('express');
const app = express();

const PORT = process.env.PORT  || 3001;

app.listen(PORT, () => {
        console.log('Server running on port ' + PORT);
});

app.get( '/', (req, resp) => {
    resp.send('REST root get is working');
});

app.get( '/user', (req, resp) => {
    resp.send('USER mapping');
});