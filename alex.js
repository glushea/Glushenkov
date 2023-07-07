function isValidPassword(password, username){
    if((password.lenght<8) || (password.indexOf(' ')!==-1) || (password.indexOf(username)!==-1) )return false;
    
return true;
}


console.log(isValidPassword('aaaaaaaaa1111','aaaaaaaaa'));

function callAfterTimeout(){
    alert("click!")
}

// setTimeout(callAfterTimeout,2000);
const bin = document.querySelector('button');
bin.addEventListener('click',callAfterTimeout);

