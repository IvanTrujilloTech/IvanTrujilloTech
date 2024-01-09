# Importando la librería json para trabajar con datos en formato JSON
import json
# Definición de una lista de videojuegos con atributos detallados
# Cada videojuego es un diccionario con claves como 'name', 'genre', 'developer', etc.
video_games = [
{
    "name": "League of Legends",
    "genre": "MOBA",
    "developer": "Riot Games",
    "description": "Descripción del juego...",
    "image": "url-de-la-imagen-lol.jpg",
    "link": "https://ficha-lol.com"
},
# Agregar más videojuegos aquí...
{
        "name": "World of Warcraft",
        "genre": "MMORPG",
        "developer": "Blizzard Entertainment",
        "description": "World of Warcraft es un videojuego de rol multijugador masivo en línea desarrollado por Blizzard Entertainment. Es el cuarto juego lanzado establecido en el universo fantástico de Warcraft, el cual fue introducido por primera vez por Warcraft: Orcs & Humans en 1994.​",
        "image": "url-de-la-imagen-lol.jpg",
        "link": "https://worldofwarcraft.blizzard.com/es-es/"
    },
    {
        "name": "World of Warcraft",
        "genre": "MMORPG",
        "developer": "Blizzard Entertainment",
        "description": "World of Warcraft es un videojuego de rol multijugador masivo en línea desarrollado por Blizzard Entertainment. Es el cuarto juego lanzado establecido en el universo fantástico de Warcraft, el cual fue introducido por primera vez por Warcraft: Orcs & Humans en 1994.​",
        "image": "url-de-la-imagen-lol.jpg",
        "link": "https://worldofwarcraft.blizzard.com/es-es/"
    },
    {
        "name": "World of Warcraft",
        "genre": "MMORPG",
        "developer": "Blizzard Entertainment",
        "description": "World of Warcraft es un videojuego de rol multijugador masivo en línea desarrollado por Blizzard Entertainment. Es el cuarto juego lanzado establecido en el universo fantástico de Warcraft, el cual fue introducido por primera vez por Warcraft: Orcs & Humans en 1994.​",
        "image": "url-de-la-imagen-lol.jpg",
        "link": "https://worldofwarcraft.blizzard.com/es-es/"
    },
    {
        "name": "World of Warcraft",
        "genre": "MMORPG",
        "developer": "Blizzard Entertainment",
        "description": "World of Warcraft es un videojuego de rol multijugador masivo en línea desarrollado por Blizzard Entertainment. Es el cuarto juego lanzado establecido en el universo fantástico de Warcraft, el cual fue introducido por primera vez por Warcraft: Orcs & Humans en 1994.​",
        "image": "url-de-la-imagen-lol.jpg",
        "link": "https://worldofwarcraft.blizzard.com/es-es/"
    }
]
# Convertir la lista de videojuegos a formato JSON
# Utilizamos la función json.dump para escribir los datos en un archivo
# El parámetro 'indent=4' es para que el archivo JSON sea legible (con indentación)
with open('video_games.json', 'w') as file:
    json.dump(video_games, file, indent=4)
# El archivo 'video_games.json' ahora contiene los datos de los videojuegos en formato JSON