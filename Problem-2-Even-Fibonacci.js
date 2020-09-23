function evenFibonacci(max){
    let arr = [1,2];
    let sum = 0;
    while (arr[arr.length-1]<max){
        arr.push(arr[arr.length-1] + arr[arr.length-2]);
    }
    if (arr[arr.length-1] > max){
        arr.pop();
    }
    for (let i = 0; i<arr.length; i++){
        if (arr[i] % 2 == 0){
            sum += arr[i];
        }
    }
    console.log(sum);
}
evenFibonacci(4000000);