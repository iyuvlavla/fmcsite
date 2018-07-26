function loadstrage(){
    let userdata;
try{
    userdata = localStorage.getItem('user');
}catch(e){
    console.log('not register');
}
console.log(userdata);
if(userdata != null){
let helloUser = document.getElementById('helloUser');
let menber = document.getElementById('menber');
const rhtml = '<h1>Hello ' + userdata + '</h1>';
const menberList = ['1人目','2人目','3人目','4人目',userdata];
let mhtml = '<ul>';
for(let value of menberList){
    mhtml += '<li>' + value + '</li>';
}

helloUser.innerHTML = rhtml;
menber.innerHTML = mhtml;
}else{
    console.log('not data');
}
}

function savedata(){
    const name = document.userregister.name.value;
    if(name != ''){
    const user = name;
    localStorage.setItem('user',user);
    console.log('save user');
    location.reload();
    }else{
        alert('名前を入力して下さい。');
    }
}

function removedata(){
    localStorage.removeItem('user');
    console.log('remove user');
    location.reload();
}
