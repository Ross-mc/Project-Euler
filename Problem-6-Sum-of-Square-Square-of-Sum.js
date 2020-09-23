function sumSquareSquareSum(min, max){
    let sumSquare = 0;
    let sum = 0;
    let squareSum = 0;
    let result = 0
    while (min <= max){
        sumSquare = sumSquare + (min * min);
        sum = sum + min;
        min++;
    }
    squareSum = sum * sum;
    result = squareSum - sumSquare;
    console.log(result);
}
sumSquareSquareSum(1, 100);