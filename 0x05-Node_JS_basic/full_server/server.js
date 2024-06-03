import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    req.dbFilePath = process.argv[2];
    next();
});

app.use('/', routes);

const port = 1245;
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;
