// function isValidPassword(password, username){
//     if((password.lenght<8) || (password.indexOf(' ')!==-1) || (password.indexOf(username)!==-1) )return false;
    
// return true;
// }


// console.log(isValidPassword('aaaaaaaaa1111','aaaaaaaaa'));

// function callAfterTimeout(){
//     alert("click!")
// }

// // setTimeout(callAfterTimeout,2000);
// const bin = document.querySelector('button');
// bin.addEventListener('click',callAfterTimeout);

let nums = [2,3,5,6,7,8];

let multiple = nums.reduce((a,b) => a+b)/nums.length;
console.log(multiple);
