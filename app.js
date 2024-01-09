// Fetch del archivo JSON que contiene la información de los videojuegos
fetch('video_games.json')
 .then(response => {
 // Verifica si la respuesta es exitosa
 if (!response.ok) {
 throw new Error(`HTTP error! status: ${response.status}`);
 }
 // Convierte la respuesta a JSON
 return response.json();
 })
 .then(games => {
 // Procesa cada juego en el JSON
 games.forEach(game => {
 // Accede a los elementos de cada juego
 let name = game.name;
 let genre = game.genre;
 let developer = game.developer;
 let description = game.description;
 let image = game.image;
 let link = game.link;
 // Crea elementos HTML para mostrar la información del juego
 let gameDiv = document.createElement('div');
 gameDiv.className = 'game';
 gameDiv.innerHTML = `
 <img src="${image}" alt="Cover image of ${name}">
 <h3>${name}</h3>
 <p>Genero: ${genre}</p>
 <p>Desarrolladora: ${developer}</p>
 <p>${description}</p>
 <a href="${link}" target="_blank">Página del videojuego</a>
 <p> </p>
 <p>----------------------</p>
 `;
 // Agrega el div creado al elemento contenedor en el HTML
 document.querySelector('#gameDetails').appendChild(gameDiv);
 });
 })
 .catch(error => {
 // Maneja cualquier error que ocurra durante el fetch
 console.error('Fetch error:', error);
 });