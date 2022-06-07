
const sumDifference = (n) => {
    const numArray = [...Array(n + 1).keys()];
    const sumOfSquares = numArray.reduce((res, val) => res + (val ** 2));
    const squareOfSum = numArray.reduce((res, val) => res + val) ** 2;
    return squareOfSum - sumOfSquares;
}

module.exports = {
    sumDifference
}