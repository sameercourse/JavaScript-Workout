//This simple function is used to find out the first pair or set of elements which sums to ZERO in the array

//The approach to this type of problem, which involves an array containing set of numbers and we need to find out a pair satisfying the givin condition 

// In this case I'm assuming the array to be sorted and the objective is to findout the first pair of elements which sums to ZERO 

//We are not using a nested loop to find out the pair instead we are using two pointers pointing to the first and the last index of the array

function firstsum(arr){

var left=0;
var right=arr.length=1;

while(left<right){ // left < right to make sure that both the pointers should not be the same or exceed each other because we are assuming sorted array

var sum=arr[left]+arr[right];

if(sum==0){

    return [arr[left],arr[right]];
}
else if(sum>0){

    right--;// right elemtn is way more large than left so decrease the right pointer

}
else{

    left++; // if the sum is <0 then the  right most elemtn is not enough to make the sum zero so increase the left pointer 
}



}

}