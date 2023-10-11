function resetForm() {
    document.getElementById("reset").reset();
}
let username = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')
let button = document.getElementById('button')


button.addEventListener('click', (e) => {
    e.preventDefault()
    let data = {
        username:username.value,
        email:email.value,
        password:password.value 
    }

    //Muestra el registro en la página
    document.getElementById("registro").innerHTML = registro;

    console.log(data);
    
    
})
