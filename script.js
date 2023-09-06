

function enviarFormulario() {
  
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;

   //creo array 
    const formData = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento
    };

    // solicitmaos el Fetch 
    fetch('https://jsonplaceholder.typicode.com/users', {
        
        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        //agarramos la informacion que queremos la pasamos a formato json y la seleccionamos para enviar
        body: JSON.stringify(formData)
    })
    // manejar las respuestas del servidor pidiendo que nos responda con un json 
    .then(response => response.json())
    .then(data => {
        // pedimos que la respuesta nos las muestre en consola 
        console.log(data);
    })
    // manejar errores
    .catch(error => {
    
        console.error('Error:', error);
    });
}

