const formulario = document.getElementById ('formularioHTML')

const dblocal = [
    {
        user: 'jose',
        clave: '123'
    },
    {
        user: 'jaime',
        clave: '456'
    },
    {
        user: 'wendy',
        clave: '789'
    }
]

/*
function validar (usuario, password){
    console.log('Parametro funcion validar:', usuario, password);
    for (let index = 0; index < dblocal.length; index++){
        console.log(dblocal[index]);
    }
}
*/

function mostrarError(dato){
    let errorHTML = document.getElementById('errorHTML');
    console.log(errorHTML);
    errorHTML.classList.remove('esconder')
    errorHTML.classList.add('error')
    errorHTML.innerHTML = dato

    setTimeout(()=>{
        errorHTML.classList.remove('error')
        errorHTML.classList.add('esconder')
        errorHTML.innerHTML = ''
    }, 2000)
}



function validar (usuario, password) {
    for (let index = 0; index < dblocal.length; index++){
        if(usuario === dblocal[index].user && password === dblocal[index].clave){
            console.log('Bienvenido');
            localStorage.setItem('user',usuario)

        } else if  (usuario === '' && password === ''){
            console.log('Por favor Ingresa tus datos')
            mostrarError('Ingrese la Información Solicitada')

        } else if (usuario != dblocal[index].user){
            console.log('usuario incorrecto');
            mostrarError('Usuario Incorrecto')

        } else if (password != dblocal[index].clave){
            console.log('Contraseña incorrecto');
            mostrarError('Contraseña incorrecto')

        } else{
            console.log('El Usuario no Existe');
        }
    }
}



formulario.addEventListener('submit',(evento)=>{
    evento.preventDefault()


   // console.log('me diste click');
    let inputusuario = document.getElementById ('usuarioHTML').value

    let inputPassword = document.getElementById('passwordHTML').value

    //console.log('Datos del input HTML',inputusuario, inputPassword);
    validar(inputusuario, inputPassword )
})

/*
const usuarioAgregado = localStorage.getItem ('user')

console.log('Bienvenido de nuevo', usuarioAgregado);

*/


/*



function normal (){
    //codigo
}

normal()

const anonima = function(){
    //codigo
}

anonima()

const arrow = () => {
    //codigo
}

arrow()

*/