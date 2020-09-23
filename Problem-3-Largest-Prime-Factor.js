let count = 1;
let nextPrime;

function largestPF(target){
    nextPrime = generatePrime(count);
    if (nextPrime == target){
        console.log(target);
        return;
    }
    if (target < 2){
        console.log(undefined);
        return;
    }
        else if (target == 2){
            console.log(2);
            return;
        }
            else if (target % nextPrime == 0) {
                    target = target / nextPrime;
                    largestPF(target);
                } else{
                    count = count+1;
                    largestPF(target);
                }
}
largestPF(600851475143);



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
    }return primes[nthPrime - 1];
}

