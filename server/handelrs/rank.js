import { data } from '../testData.js';

let scores = data.scoresList;

const getRank = (arr, num) => {
    let count = 0;

    for (let i = 0; i < arr.length; i++){
        let score = arr[i];

        if (score < num) count++;
    }

    let rank = Number(((count / arr.length) * 100).toFixed(2))

    return rank
}

const createRank = async (req, res) => {
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
