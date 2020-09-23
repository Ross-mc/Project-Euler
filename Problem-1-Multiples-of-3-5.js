function sumOfMultiples(x,y,z){
    let sum = 0;
    for (let i = 1; i<z; i++){
        if (i % x == 0 || i % y == 0){
            sum += i
        }
    }
console.log(sum);
}

sumOfMultiples(3, 5, 1000);