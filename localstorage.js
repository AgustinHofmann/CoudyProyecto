function guardarNombreEnLocalStorage()
{

    //solicita nombre de usuario
let usuario = prompt("ingresa tu nombre");

//guarda el nombre en el local storage
localStorage.setItem("NombreUsuario:", usuario)


console.log("Nombre guardado en el LocalStorage", usuario)

}

    //Llama a la funcion para que se ejecute
    guardarNombreEnLocalStorage();
