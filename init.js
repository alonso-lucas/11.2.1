const form = document.getElementById('registroForm');

form.addEventListener('submit', function (e) {
e.preventDefault();

  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;
  let fNac = document.getElementById('fNac').value;

  let formInfo = {
    nombre: nombre,
    apellido: apellido,
    fNac: fNac

    };
        
  fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formInfo)
      })
      .then(response => response.json())
      .then(data => {
        console.log('Respuesta del servidor:', formInfo);
        alert('Exito');
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Error');
    });
});
