// Crear una función que reciba un numero entero y devuelva un error en caso de que el argumento recibido no sea del tipo solicitado


function verificarTipoData(numero) {
    if (typeof numero !== "number" || !Number.isInteger(numero)) {
      console.log("data no aceptada");
    }else{
        console.log("data aceptada")
    }}

  verificarTipoData(4)


//   Crear una función que reciba un array y genere una copia del mismo pero con todos los elementos multiplicados por 5. Se debe usar la Asignación de multiplicación: x*=y (PPT Clase 3)

const arr = [3, 5, 2, 4];

function generaArray(arr) {
  arr.forEach(element => {
    let result = element *= 5;
    console.log(result);
  });
}

generaArray(arr);

// Crear una función que reciba un arreglo y devuelva el promedio de un rango especificado. Es decir, debe recibir (arreglo, inicio, fin) y deberá calcular el promedio de los valores que se encuentran en ese rango

const array2 = [7, 8, 8, 6, 5, 6, 4, 10];

function devuelvePromedio(array) {
  const sumaTotal = array.reduce(function(acc, value) {
    return acc + value;
  }, 0);

  const promedio = sumaTotal / array.length;
  return promedio;
}

const promedioArray2 = devuelvePromedio(array2);
console.log(promedioArray2);


// Definir una función que devuelva TRUE si el argumento recibido como texto un palíndromo, osea que se lee de la misma forma de izquierda y derecha. Ejemplo de palíndromo "¿Acaso hubo búhos acá?".

function palindromo(check) {
  const fraseAlReves = check.split("").reverse().join("");

  return fraseAlReves === check ? "es palindromo" : "no es palindromo";
}
console.log(palindromo("acaso hubo buhos aca")); 
console.log(palindromo("neuquen")); 
console.log(palindromo("matematicas")); 

// Crear una función para validar los datos que se ingresaron en un formulario. Recibirá como parametros email, password y description.
// Deberá comprobar que se cumplan las siguientes condiciones:
// - El email debe contener "@" y ".com".
// - La contraseña deberá tener entre 8 y 16 caracteres, y tener una mayúscula como mínimo.
// - La descripción podrá tener hasta 400 caracteres pero no puede contener guiones (-).
// Mostrar un error en caso de que no se cumplan todos los requisitos, de lo contrario dar un mensaje de registro exitoso (usando console.log)
// Sugerencia:  function validation(email, password, description)

function validarFormulario(email, password, description) {
  
  if (!email.includes("@") || !email.includes(".com")) {
    console.log("Error: El email no es válido.");
    return;
  }

 
  if (password.length < 8 || password.length > 16 || !/[A-Z]/.test(password)) {
    console.log("Error: La contraseña no cumple con los requisitos.");
    return;
  }

 
  if (description.length > 400 || description.includes("-")) {
    console.log("Error: La descripción no cumple con los requisitos.");
    return;
  }


  console.log("Registro exitoso. ¡Bienvenido!");
}

validarFormulario("pepe@gmail.com","Elpepe1234","el pepe va a crombie los lunes y miercoles")

