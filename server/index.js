import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import wordsRoutes from './handelrs/words.js';
import rankRoutes from './handelrs/rank.js';

const app = express();
const port = '3001';

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(cors());

app.get('/', function (_req, res) {
    res.send('Hello World!');
});

wordsRoutes(app);
rankRoutes(app);

app.use((_req, res) => {
    res.status(404).json({message: 'oh you are lost.'})
})


app.listen(port, function () {
    console.log(`starting app on port: ${port}`);
})

export default app;
