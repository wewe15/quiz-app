import { data } from '../testData.js';

const createRank = async (_req, res) => {
    try{

    } catch (err){
        res.status(400).json(err);
    }

}

const rankRoutes = (app) => {
    app.post('/rank', createRank)
}

export default rankRoutes;
