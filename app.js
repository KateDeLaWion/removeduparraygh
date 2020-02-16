
let nums = [0,0,1,1,1,2,2,3,3,4];

for (let i= 0; i<= nums.length-1; i++){
    if (nums[i] == nums[i+1]){
        nums.splice(i+1,1); 
        i--;
    }
}

console.log(nums);

