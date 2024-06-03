const express = require('express');
const router = require('./routes');

const app = express();

app.use('/', routes);

const port = 1245;
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;
