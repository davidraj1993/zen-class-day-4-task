let word ='sir';
let reverse = '';
let call = () =>
{
   for(let index=word.length-1;index>=0;index--)
{
    reverse = reverse + word[index];
} 
console.log(word);
console.log(reverse);
if(reverse==word){
    console.log('this word is polyntrome')
}
else{
    console.log('is not a polyntrome')
}
}
call();