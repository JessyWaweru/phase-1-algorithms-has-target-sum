function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i=0;i<array.length;i++){
    const complement=target-array[i]
    for(let z=i+1;z<array.length;z++){
      if(array[z]===complement){
        return true
      }
      
    }
    return false
  }
}

/* 
  Write the Big O time complexity of your function here;quadratic(0(n^2))
*/

/* 
  Add your pseudocode here;
  function findComplement(array,target){
    for loop --let i=0,i<array.length,i++
    nested constant=target-i
    nested for loop --let z=i+1,z<array.length,z++
    nested if --(constant===z){
      return true}
      else false
    }
  }
*/

/*
  Add written explanation of your solution here;
  I need to write a function,that checks whether any pair of array elements equal to
   the target.Return true if so,false otherwise.will use a for loop to iterate over the
    array elements.Have a constant that finds target-each array element iterated.have 
    a nested for loop that does same thing with respect to the first.if its the
     complement,return true,else false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
