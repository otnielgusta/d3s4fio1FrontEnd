
window.addEventListener('load', function(){
    this.document.getElementById("formLogin").addEventListener('submit', function(event){
        event.preventDefault();
        let login = document.getElementById('login').value;
        let password = document.getElementById('password').value;
        let data = JSON.stringify({
            email: login,
            senha: password
        })

        let config = {
            method:'POST',
            body:data,
            mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        console.log(config)
        fetch("http://127.0.0.1:5000/auth/login",config)
        .then((response)=>{
            console.log(response.json());
            return response;
        }).catch((e)=>{
            console.log("o erro é: "+e);
        })
        
        ;
    });
});