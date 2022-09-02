export const shuffleArray = arr => {
    for (let i = 0; i < arr.length; i++){
        let randomIdx = Math.floor(Math.random() * arr.length);
        [arr[i], arr[randomIdx]] = [arr[randomIdx], arr[i]];
    }

    return arr
}

export const groupBy = (array, property) => {
    return array.reduce((acc, obj) => {
      const key = obj[property];
      acc[key] = acc[key] || [];
      acc[key].push(obj);

      return acc;
    }, {}); // inital value for acc
}

export const getRank = (arr, num) => {
    let count = 0;

    for (let i = 0; i < arr.length; i++){
        let score = arr[i];

        if (score < num) count++;
    }

    let rank = Number(((count / arr.length) * 100).toFixed(2))

    return rank
}
