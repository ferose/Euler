/**
 * Created by Ferose on 10/16/2014.
 */
const _ = require("lodash")

function simpleSolution(target) {
    var numbers = _.range( target )
    var filtered = _.filter(numbers, function(num) {return num % 3 == 0 || num % 5 == 0})
    var sum = _.reduce(filtered, function(memo, num) {return memo+num})
    return sum
}

function efficientSolution(target) {
    function sumDivisibleBy(num) {
        var p = Math.floor(target/num)
        return num*p*(p+1)/2
    }
    return sumDivisibleBy(3)+sumDivisibleBy(5)-sumDivisibleBy(15)
}

console.log(simpleSolution(1000))
console.log(efficientSolution(1000))
console.log(efficientSolution(1000000000))