
//Merge and Binary Search
//Given an array of unsorted numbers, return the index of the following target if the target exists in the array. 
//If the target is not found, return null
let num = [45,12,6,89,2,5]
let target = 6;
function declare(left,right) {
    let main = num.length;
    num.length = left.length + right.length;
    if(left.length<right.length){
        num.push(left.shift())
    }
    else{
        num.push(right.shift())
    }
    return num[left,right]
}
function mergeSort(num) {
    let midIndex  = num.length/2 -1;
    const left= num.slice(0,midIndex);
    const right=num.slice(midIndex);
    while(target){
        left.indexOf(target);
        if(indexOf>=0)
        return left.indexOf(target);
        else if(left.includes(target)==false){
            return right.indexOf();
        }
        else{
            return null;
        }
    }
}
 console.log(mergeSort(num));


//Given an unsorted array of numbers return the sorted array in descending order

let arr=[123,89,5,23,9,56]
function merging(arr){
    

}





//Given the following array, search for the following target
let targetted = 34
let arr2 = [1,4,78,2,67,3];
