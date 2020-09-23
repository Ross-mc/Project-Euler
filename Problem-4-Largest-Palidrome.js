let x = 999;
let y = 998;
let num;
let str;
let arr;
let count;
let i;
let j;

function palindrome(){
    count = 0;
    num = x * y;
    arr = num.toString().split("");
    if (arr.length % 2 == 0){
        for (i = 0; i<=(arr.length/2)-1; i++){
            if (arr[i] != arr[arr.length-i-1]){
                reset();
                return;
            } else {
                count = count+1;
            }
        }
    } else {
        for (j = 0; (j<=arr.length/2)-2; j++){
            if (arr[j] != arr[arr.length-j-1]){
                reset();
                return;
            } else {
                count = count+1;
            }
        }
    }
    if (arr.length % 2 == 0){
        if (count == arr.length / 2){
            console.log(x);
            console.log(y);
            console.log(num);
            return;
        } else{
            reset();
            return;
        }
    } else {
        if (count == (arr.length / 2) - 1){
            console.log(x);
            console.log(y);
            console.log(num);
            return;
        } else{
            reset();
            return;
        } 
    }
}




function reset(){
    y = y - 1;
    if (y == 900){
        y = 998;
        x = x - 1;
    }
    count = 0;
    str = '';
    arr = [];
    palindrome();
}
palindrome();