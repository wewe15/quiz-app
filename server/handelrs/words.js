import { data } from '../testData.js';

let words = data.wordList

const shuffleArray = arr => {
    for (let i = 0; i < arr.length; i++){
        let randomIdx = Math.floor(Math.random() * arr.length);
        [arr[i], arr[randomIdx]] = [arr[randomIdx], arr[i]];
    }
    return arr
}

const findAll = async (_req, res) => {
    try{
        let randWords = await shuffleArray(words.slice(0, 10));

        if (!randWords) return res.status(404).json("Words Not Found");

        res.status(200).json(randWords)
    } catch (err){
        res.status(400).json(err);
    }
}

const wordsRoutes = (app) => {
    app.get('/words', findAll)
}

export default wordsRoutes;
