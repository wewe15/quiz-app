import { data } from '../testData.js';
import { getRank } from './utils.js'

let scores = data.scoresList;

const createRank = (req, res) => {
    try{
        const score  = req.body.score

        if(!score) return res.status(404).json("score should not be empty");

        let rank = getRank(scores, score)

        res.status(201).json(rank)
    } catch (err){
        res.status(400).json(err);
    }

}

const rankRoutes = (app) => {
    app.post('/rank', createRank)
}

export default rankRoutes;
