let count = 1;//counter for working through the prime list
let nextPrime;//the nextPrime generated

function largestPF(target){
    nextPrime = generatePrime(count);//generate nth prime
    if (nextPrime == target){//if the prime is equal to the target, we have found the largest
        //prime factor and we can exit the function, logging the target as the answer
        console.log(target);
        return;
    }
    if (target < 2){//2 is smallest prime
        console.log(undefined);
        return;
    }
        else if (target == 2){
            console.log(2);//2 is smallest prime
            return;
        }
            else if (target % nextPrime == 0) {//if the target is equally divisible by the current
                //prime number, we divide the target by prime and set as the new target/ run the func
                //again
                    target = target / nextPrime;
                    largestPF(target);
                } else{//if the target is not equally divisible, we increase the count
                    //and run the func again. As count has increased by 1, this produces
                    //the next prime number
                    count = count+1;
                    largestPF(target);
                }
}
largestPF(600851475143);



//This is my homebrewed function for working out the nthPrime using Erasthonese sieve
function generatePrime(nthPrime){   
    let primes = [2];//as 2 is the first prime
    for (let i = 3; primes.length<=nthPrime; i++){//3(i) being one bigger than 2
        //we generate all prime numbers, so we stop the for loop when the length
        //of the array is = to the user input(nthPrime)
        primes.push(i);//we push the number(whether its prime or not)
        for (let j = 0; j<primes.length-1;j++){//we loop through the entire array of primes
            //excluding the last number, which we test below
            if (i % primes[j] == 0){//if the new number is equally divisible by any of the
                //numbers currently in the list, then it can't be prime
                primes.pop();//so we pop it off the list
                break;//and break the nested for loop, returning to the outside for loop
            }
        }
    }return primes[nthPrime - 1];//we return the requested nth prime
}

