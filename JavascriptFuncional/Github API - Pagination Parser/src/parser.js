// Você parou no video 11

// Isso é Currying na sintaxe antiga
// const mapper = function(fn){
//     return function(arr){
//         return map(arr, fn)
//     }
// }
        
        
const map = (arr, fn) => arr.map(fn)
// Agora com a nova sintaxe
const mapper = fn => arr => map(arr, fn)
const split = (str, delimiter) => str.split(delimiter)
const splitter = delimiter => str => split(str, delimiter)
const exec = (rx, str) => rx.exec(str)
const makeExec = rx => str => exec(rx, str)
const rxPage = makeExec(/[?|&]page=(\d+)/)
const rxRel = makeExec(/rel="(.+)"/)

const splitInSections = splitter(',')
const splitFields = mapper(splitter(';'))
const regexFields = mapper(section => [Number(rxPage(section[0])[1]), rxRel(section[1])[1]])

const isString = str => typeof str === 'string'
const isEmpty = str => str.length === 0

const assertStr = str => {
    if(!isString(str)){
        throw new Error('str must be a string')
    }

    if(isEmpty(str)){
        throw new Error('str is a invalid string')
    }
}

const parser = str => {
    assertStr(str)

    return regexFields(splitFields(splitInSections(str)))
    .reduce((acc, value, index) => {
        acc[value[1]] = value[0]
        return acc
    }, {})
}

module.exports = parser