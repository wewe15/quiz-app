import { data } from '../testData.js';
import { shuffleArray, groupBy } from './utils.js'

let words = data.wordList

const findAll = (_req, res) => {
    try{
        const randWords = shuffleArray(words.slice(0, 6));

        const groupWords = groupBy(words, "pos");
        const adverbWords = shuffleArray(groupWords.adverb.slice(0, 1))
        const verbWords = shuffleArray(groupWords.verb.slice(0, 1))
        const nounWords = shuffleArray(groupWords.noun.slice(0, 1))
        const adjectiveWords = shuffleArray(groupWords.adjective.slice(0, 1))

        if (!randWords) return res.status(404).json("Words Not Found");

        res.status(200).json(randWords.concat(
            verbWords,
            nounWords,
            adjectiveWords,
            adverbWords
        ))
    } catch (err){
        res.status(400).json(err);
    }
}

const wordsRoutes = (app) => {
    app.get('/words', findAll)
}

export default wordsRoutes;
