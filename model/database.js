const mongoose = require('mongoose');
const db = mongoose.connection;

const heritageSchema = new mongoose.Schema({
    category: { type: String, required: true },
    question: { type: String, required: true },
    company: { type: String, required: true },
    deleted: { type: Boolean, default: false }
})

const Heritage = new mongoose.model('Heritage', heritageSchema);

// db.once('open', () => {
//     const questionArray = [
//         '배열 arr이 있을때,  [...arr, newData] 와 arr.push(newData) 의 차이점을 설명하세요.','prototype chain은 무엇인가요?','비동기의 장점을 설명해보세요.','본인이 즐겨하는 디버깅 방법을 설명해보세요.','생성자란 무엇인가요?','bind 가 필요한 상황을 간단한 코드로 보여주세요.','CommonJS 스펙에 대해 설명해보세요.','본인이 생각하는 좋은 객체지향프로그래밍에 대해서 설명해보세요.','destructuring 예시코드를 작성해보세요.','클로저로 동작되는 상황을 예시코드로 보여주세요.'
//     ]

//     for(let i in questionArray){
//         const heritage = new Heritage({
//             category : 'front',
//             question : questionArray[i],
//             company : '뽀로로 단짝'
//         })
//         heritage.save();
//     }
// })

module.exports = { Heritage };
