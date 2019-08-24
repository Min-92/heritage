const categoryObj = {
    ios: 'ios', front: 'front', back: 'back'
}

const shuffleArray = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


const getRandomElements = (sourceArray, neededElements) => {
    const shuffledArray = shuffleArray(sourceArray);

    return shuffledArray.slice(0,neededElements);
}

const getCategoryArray = () => Object.keys(categoryObj);



module.exports = {
    categoryObj,
    getRandomElements,
    getCategoryArray
}
