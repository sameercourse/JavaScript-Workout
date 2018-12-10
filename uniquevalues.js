// A program to find out the unique values that are present in the array 
//We are using two pointers corresponding to the 1st and 2nd elements in the array 
//Loop from the 2nd element of the array and check if the element is different as that of the first poniter
// if it is different increment the first pointer and assign the second pointer value to the first pointer 
//if it's not the case just leave it the second pointer will increase 
// Here we are moving all the unique values to the left side and returning the pointer position

// Assume that the array is sorted 

function count_unique(arr){

    var i=0;

    for(var j=1 ; j<arr.length ; j++){

        if(arr[i]!==arr[j]){
            i++;
            arr[i]=arr[j];
        }


    }
    return i+1;


}