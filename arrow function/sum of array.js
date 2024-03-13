let sum = (...nums) =>
{
    let total=0;
        for(let index = 0;index < nums.length; index++)
        {
            total = total + nums[index];
        }
        console.log(total);
}
sum(1,3,5,6,8); 