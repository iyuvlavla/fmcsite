
function loadstrage(){
    let userdata;
try{
    userdata = localStorage.getItem('user');
}catch(e){
    console.log('not register');
}
console.log(userdata);
if(userdata != null){
let section = document.getElementById('localtest');
const username = userdata.split(',');
const rhtml = 'Hello ' + username[0];
section.innerHTML = rhtml;
}else{
    console.log('not data');
}
}

function savedata(){
    const name = document.registeruser.name.value;
    const mail = document.registeruser.mail.value;
    if(name != null && mail != null){
    const user = [name,mail];
    localStorage.setItem('user',user);
    console.log('save localstrage');
    location.reload();
    }else{
        alert('エラー');
    }
}

function removedata(){
    localStorage.removeItem('user');
    console.log('remove localstrage');
    location.reload();
}
