
import convert from 'xml-js';

const convertOptions = {compact: true, ignoreComment: true}

const queueElementToObject = (queue1, queue2, index) => {
    const obj1 = convert.xml2js(queue1[index].outerHTML, convertOptions)
    const obj2 = convert.xml2js(queue2[index].outerHTML, convertOptions)
    return [obj1, obj2]
}

const generateComparisonQueue = (assignmentQueue, answerQueue) => {
    let measureQueue = []
    for(let i = 0; i < answerQueue.length; i++){
        measureQueue.push(queueElementToObject(assignmentQueue, answerQueue, i))
    }
    return measureQueue
}

export default generateComparisonQueue;