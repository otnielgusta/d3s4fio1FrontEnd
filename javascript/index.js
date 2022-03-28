
window.addEventListener('load', function(){
    this.document.getElementById("formLogin").addEventListener('submit', function(event){
        event.preventDefault();
        let login = document.getElementById('login').value;
        let password = document.getElementById('password').value;
        let data = {
            email: login,
            senha: password
        }

        let config = {
            method:'post',
            body:data,
            mode: 'no-cors',
            headers: new Headers()
        }

        console.log(config)
        fetch("http://127.0.0.1:5000/auth/login",config)
        .then((response)=>{
            console.log(response);
        }).catch((e)=>{
            console.log(e);
        })
        
        ;
    });
});