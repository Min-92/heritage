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
    const result = [];

    const shuffledArray = shuffleArray(sourceArray);

    for(let i = 0; i < Math.min(neededElements, shuffledArray.length); i++){
        result.push(shuffledArray[i]);
    }
    return result;
}

const getCategoryArray = () => {
    const categoryArray = [];
    for (let value in categoryObj) {
        categoryArray.push(value);
    }
    return categoryArray;
}


module.exports = {
    categoryObj,
    getRandomElements,
    getCategoryArray
}
