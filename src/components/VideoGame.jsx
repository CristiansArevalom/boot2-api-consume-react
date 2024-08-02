import React, { useEffect, useState } from 'react'
import axios from 'axios';


const VideoGame = () => {

  const [games, setGame] = useState([]);
  useEffect(() => {
    const axiosData = async () => {
      try {
        // Configura los encabezados y otras opciones de la solicitud
        const options = {
          params: {
            tag: '3d.mmorpg.fantasy.pvp',
            platform: 'pc'
          },
          headers: {
            'x-rapidapi-key': 'RAPIDAAPIKEY',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
          }
        };

        // Realiza la solicitud a la API
        const response = await axios.get("https://free-to-play-games-database.p.rapidapi.com/api/filter", options);

        // Verifica que la respuesta contenga datos
        if (response.data && response.data.length > 0) {
          const data = response.data;

          // Extrae la información del primer juego
          const games = response.data.map(game => ({
            id: game.id,
            title: game.title,
            thumbnail: game.thumbnail,
            short_description: game.short_description,
            genre: game.genre,
            release_date: game.release_date
          }));


          // Actualiza el estado con la información del juego
          setGame(games);
        }
      } catch (error) {
        console.error("Error al consultar los datos: " + error);
      }
    };

    axiosData();
  }, []);
  console.log(games)

  return (
    <div >
      <h1>Video Games</h1>
      <div class="album py-5 bg-body-tertiary">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {games.length > 0 ? (
              games.map(game => (
                <div class="col">
                  <div class="card shadow-sm">
                    <img src={game.thumbnail} className='img-fluid rounded' alt={game.title} />

                    <div class="card-body">
                      <h4 className='card-title'>{game.title}</h4>
                      <p class="card-text">{game.short_description}</p>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                          <p>Genre: {game.genre}</p>
                        </div>
                        <small class="text-body-secondary">Release date: {game.release_date}</small>
                      </div>
                    </div>
                  </div>
                </div>


              ))
            ) : null}
          </div>
        </div>
      </div>


    </div>
  )
}

export default VideoGame



