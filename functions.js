//This function is a generic way of dealing with the problems which involves two arrays and the elements within them should correspond to each other
//Using the pattern we can reduce the complexity of the algorithm 

function frequency_counting(arr1,arr2){

var obj1={};
var obj2={};

//creating the corrsponding objects for the arrays. The objects store the count of the elememts
for(var a1 of arr1){

    obj1[a1] = ( obj1[a1] || 0 ) + 1;
}
for(var a2 of arr2){

    obj2[a2] = ( obj2[a2] || 0 ) + 1;
}
//Individual objects created i.e obj1, obj2

//Now it's time to check for the falsy condition i.e in this example we're checking if the elemts in the arr1 has the corresponding elemts in the arr2

    for(var key in obj1) {
        
        if(!(key in obj2)){
            return false;//returning false if the key(element in arr1 is not in arr2)
        }

        if(obj1[key]!==obj2[key]){
            return false; //return false if the count of an element in arr1 is nt matching with the count of the corresponding element in arr2
        }

    }

return true;// if the above 2 conditions are passed then return true;


}

//examples to check if [1,2,3,4,5,3,3] array has the corresponding element in [1,2,2,3,3,3,4,5,5,6,7,8,9]
//Instead of nesting the for loops 3 times, creating individual objects makes the programs more efficient 