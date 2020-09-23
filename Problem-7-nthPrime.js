function generatePrime(nthPrime){   
    let primes = [2];
    for (let i = 3; primes.length<=nthPrime; i++){
        primes.push(i);
        for (let j = 0; j<primes.length-1;j++){
            if (i % primes[j] == 0){                           
                primes.pop();
                break;
            }
        }
    }console.log(primes[nthPrime - 1])
}

generatePrime(10001);