
//Merge and Binary Search
//Given an array of unsorted numbers, return the index of the following target if the target exists in the array. 
//If the target is not found, return null
let num = [45,12,6,89,2,5]
let target = 6;

function mergeSort(l,h) {
    if(l<h){
        mid=(l+h)/2;
        mergeSort(l,mid);
        mergeSort(mid+1,h);
        merge(l,mid,h);
    }
}
 function binarySearch(l,h,target){
    if(l==h){
        if (num[l]==target);
        return l;
    }
    else{}
    mid=(l+h)/2;
    if(target==num[mid]);
    return mid;
    }
    if(target<num[mid]){
        return binarySearch(l,mid-1,target);
    }
    else if(target>num[mid]);{
        return binarySearch(mid+1,h,target);
    }
    return null;

    let num1=(num.mergeSort);
    let num2=(num1.binarySearch);
    console.log(num2)


//Given an unsorted array of numbers return the sorted array in descending order
// let arr=[123,89,5,23,9,56]
function merge(left, right) {
  let sortedArr1 = []
      while (left.length && right.length){
    if (left[0] > right[0]) {
      sortedArr1.push(left.shift())
    } else {
      sortedArr1.push(right.shift())
    }
  }
  return [...sortedArr1, ...left, ...right]
}
function mergeSort(arr) {
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left,right);
   console.log( merge(left, right));
}
let arrs = [[123,89,5,23,9,56]];
console.log(mergeSort(arrs));

// Given the following array, search for the following target
// let target = 34
// let arr2 = [1,4,78,2,67,3];

function merge(left, right) {
  let sortedArr2 = []
      while (left.length && right.length){
    if (left[0] < right[0]) {
      sortedArr2.push(left.shift())
    } else {
      sortedArr2.push(right.shift())
    }
  }
  return [...sortedArr2, ...left, ...right]
}
function mergeSort(arr) {
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left,right);
   console.log( merge(left, right));
}
let arr2 = [1,4,78,2,67,3];
console.log(mergeSort(arr2));
function binary(arr, target){
  let leftIndex= 0;
  let rightIndex = arr.length-1;
  while(leftIndex <= rightIndex){
      let middle = Math.floor((leftIndex+rightIndex)/2);
      if (arr[middle] === target){
          return middle;
      }
      else if(arr[middle]>target){
          rightIndex = middle-1
      }
      else{
          leftIndex=middle+1
      }
  }
  return null;
}
let targett = 34;
console.log(binary(arr2,target));








