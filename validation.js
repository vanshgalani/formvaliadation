function validation(){
    let name = document.getElementById('name').value;
    let username = document.getElementById('username').value;
    let mob = document.getElementById('mob').value;
    let pass = document.getElementById('pass').value;
    let cpass = document.getElementById('cpass').value;

    console.log(name);

    if(name === ''){
        alert("please enter name")
        document.getElementById('name').focus()
        return false
    }

    else if(username === ''){
        alert("please enter username")
        document.getElementById('username').focus()
    }

    else if(!username.includes('@gmail.com'))
        alert("should include @gmail.com")
        document.getElementById('username').focus()
    }


//const validation = ()=>{

//}