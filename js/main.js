function ParImpar() {
    // Obtener el número ingresado por el usuario
    let numero = parseInt(document.getElementById("numero").value);

    // Verificar si el número es par o impar
    let resultado = "";
    for (let i = 1; i <= numero; i++) {
        if (i % 2 === 0) {
            resultado += i + " es par<br>";
        } else {
            resultado += i + " es impar<br>";
        }
    }

    // Mostrar el resultado en la página
    document.getElementById("resultado").innerHTML = resultado;
}

//Clase Uno Ejemplos ejercicio

// let numero = prompt('Ingrese un numero:')

// if(numero == 4) {
//     console.log('El valor es 4');
// }else if(numero < 4){
//     console.log('El valor es menor a 4')
// }
// else{
//     numero = numero + 5;
//     alert(numero);
// }

// let nombre = 'Cesar';
// if(nombre) {
//     console.log(nombre);
// }

// let nombreIngresado = prompt("Ingresa nombre");

// if((nombreIngresado !="") && ((nombreIngresado == "EMA") ||
// (nombreIngresado =="ema"))){
//     alert("Hola Ema");
// }else{
//     alert("Error: Ingresar nombre valido");
// }
// let nombreUsusario = prompt("Ingrese nombre de usuario");

// if (nombreUsusario == "") {
//     alert("No ingresaste el nombre de usuario");
// }
// else {
//     alert("Nombre de usuario ingresado " + nombreUsusario);
// }