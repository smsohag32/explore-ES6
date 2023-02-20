/*Write an arrow function that will take 3 parameters, will multiply 
the parameters and will return the result */

const multiply = (num1, num2, num3) => num1 * num2 * num3 ;
console.log(multiply(2,2,3));

// Write the following sentence in three lines and print the result:
// I am a web developer. I love to code. I love to eat biryani.

const template = `I am a web developer.
I love to code. 
I love to eat biryani.
`

console.log(template);

// Write an arrow function that will take 2 parameters: One parameter 
// will come from you and the other parameter will be a default 
// parameter. Add these two parameters and return the result.

const sum = (num1, num2 = 9) => num1 + num2;
console.log(sum(5));

// Write an arrow function where it will do the following:
// a) It will take an array where the array elements will be the 
// name of your friends
// b) Check if the length of each element is even, push elements 
// with even length to a new array and return the result

const friends = ['sheik', 'sohag', 'akash', 'joya', 'sagor'];

const newFriends = (friends) => {
    let newArray = [];

    for(let i = 0; i< friends.length; i ++){
        
        if(friends[i].length % 2 === 0 ){
            newArray.push(friends[i]);
        }
    }
    return newArray;
}

console.log(newFriends(friends));

const getFriendsWithEvenLength = (friends) => {
    const result = [];
    
    for (let i = 0; i < friends.length; i++) {
      if (friends[i].length % 2 === 0) {
        result.push(friends[i]);
      }
    }
    
    return result;
  };
  
  const myFriends = ["Alice", "Bob", "Charlie", "Dave", "Eve"];
  console.log(getFriendsWithEvenLength(myFriends)); // Output: ["Bob", "Dave"]

// // Write an arrow function where it will do the following:
// a) It will take two array inputs
// b) Combine the two arrays and assign them in a new array
// c) Find the maximum number from the new array and return the 
// result


const maxNum = (arr1, arr2) => {
  const newArray = [...arr1, ...arr2];
  console.log(newArray)
  const max = Math.max(...newArray);
  console.log(max);
  return max;
  // return maxNum;
}
const arr3 = [1,1,1,1,5,5,5];
const arr4 = [2,4,5,5,5,54,44,44,55,88,6];
const result = maxNum(arr3, arr4);
console.log(result);

const findMax = (arr1, arr2) => {
  const combinedArr = [...arr1, ...arr2];
  const maxNum = Math.max(...combinedArr);
  return maxNum;
}

// Example usage:
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const result5 = findMax(arr1, arr2);
console.log(result5); // Output: 6


