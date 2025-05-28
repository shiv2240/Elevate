var minSubArrayLen = function(target, nums) {
    let i=0
    let sum1=0
    let mini = Infinity
    for (let j=0;j<nums.length; j++){
        sum1+=nums[j]
        while(sum1>=target){
            mini = Math.min(mini, j-i+1)
            sum1-=nums[i]
            i++
        }
    }
    return mini === Infinity ? 0: mini
};