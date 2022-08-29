import { data } from '../testData.js';

const findAll = async (_req, res) => {
    try{

    } catch (err){
        res.status(400).json(err);
    }

}

const wordsRoutes = (app) => {
    app.get('/words', findAll)
}

export default wordsRoutes;
