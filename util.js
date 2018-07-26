
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
const rhtml = 'Hello ' + userdata;
section.innerHTML = rhtml;
}else{
    console.log('not data');
}
}

function savedata(){
    const name = document.registeruser.name.value;
    if(name != null){
    const user = name;
    localStorage.setItem('user',user);
    console.log('save localstrage');
    location.reload();
    }else{
        alert('名前を入力して下さい。');
    }
}

function removedata(){
    localStorage.removeItem('user');
    console.log('remove localstrage');
    location.reload();
}
