// Función para obtener y mostrar la información de los libros del archivo XML
function fetchLibros() {
   fetch('libros.xml')
       .then(response => response.text())
       .then(data => {
           let parser = new DOMParser();
           let xmlDoc = parser.parseFromString(data, "text/xml");

           // Obteniendo todos los elementos 'libro'
           let libros = xmlDoc.querySelectorAll('libro');

           console.log(xmlDoc);

           let librosDiv = document.querySelector('#infoLibros');

           libros.forEach(libro => {
               let titulo = libro.querySelector('titulo').textContent;
               let autor = libro.querySelector('autor').textContent;
               let editorial = libro.querySelector('editorial').textContent;

               // Creando y agregando un div por cada libro a la página
               let libroDiv = document.createElement('div');
               libroDiv.innerHTML = `<ul><li><strong>${titulo}</strong></li><li><strong>Autor: </strong>${autor}</li><li><strong>Editorial: </strong>${editorial}</li>`;
               librosDiv.appendChild(libroDiv);
           });
       })
       .catch(error => console.error('Error fetching libros.xml:', error));
}

// Función similar a fetchLibros pero para obtener y mostrar la información de los eventos
function fetchEventos() {
   fetch('eventos.xml')
       .then(response => response.text())
       .then(data => {
           let parser = new DOMParser();
           let xmlDoc = parser.parseFromString(data, "text/xml");

           let eventos = xmlDoc.querySelectorAll('evento');
           let eventosDiv = document.querySelector('#infoEventos');

           eventos.forEach(evento => {
               let nombre = evento.querySelector('nombre').textContent;
               let dia = evento.querySelector('dia').textContent;
               let mes = evento.querySelector('mes').textContent;
               let año = evento.querySelector('año').textContent;
               let participantes = evento.querySelector('participantes').textContent;
               let eventoDiv = document.createElement('div');
               eventoDiv.innerHTML = `<ul><li><strong>${nombre}</strong></li><li><strong>Fecha: </strong>${dia} ${mes} ${año}</li><li><strong>Participantes: </strong>${participantes}</li></ul>`;
               eventosDiv.appendChild(eventoDiv);
           });
       })
       .catch(error => console.error('Error fetching eventos.xml:', error));
}

// Llamando a las funciones para que se ejecuten cuando se cargue la página
document.addEventListener('DOMContentLoaded', () => {
   fetchLibros();
   fetchEventos();
});

// Función similar a fetchLibros pero para obtener y mostrar la información de los eventos
function fetchNinos() {
    fetch('ninos.xml')
        .then(response => response.text())
        .then(data => {
            let parser = new DOMParser();
            let xmlDoc = parser.parseFromString(data, "text/xml");
 
            let eventos = xmlDoc.querySelectorAll('evento');
            let eventosDiv = document.querySelector('#infoNinos');
 
            eventos.forEach(evento => {
                let nombre = evento.querySelector('nombre').textContent;
                let dia = evento.querySelector('dia').textContent;
                let mes = evento.querySelector('mes').textContent;
                let año = evento.querySelector('año').textContent;
                let participantes = evento.querySelector('participantes').textContent;
                let eventoDiv = document.createElement('div');
                eventoDiv.innerHTML = `<ul><li><strong>${nombre}</strong></li><li><strong>Fecha: </strong>${dia} ${mes} ${año}</li><li><strong>Participantes: </strong>${participantes}</li></ul>`;
                eventosDiv.appendChild(eventoDiv);
            });
        })
        .catch(error => console.error('Error fetching eventos.xml:', error));
 }
 
 // Llamando a las funciones para que se ejecuten cuando se cargue la página
 document.addEventListener('DOMContentLoaded', () => {
    fetchLibros();
    fetchEventos();
    fetchNinos();
 });
