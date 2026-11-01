import { Link } from "react-router";
import { useState, useEffect } from 'react';

// Variantes de imagenes de acuerdo al clima
const WEATHER_IMAGES = {
  sunnyDay: {
    image: 'https://cafayate.com/images/hero/bodegas.png',
    caption: 'Día soleado en el valle · Ideal para recorrer viñedos y la Quebrada',
  },
  clearNight: {
    image: 'https://cafayate.com/images/hero/nuestra-seleccion.png',
    caption: 'Noche despejada en altura · Excelente para conocer los negocios locales y peñas',
  },
  cloudy: {
    image: 'https://www.cafayate.tur.ar/ccm/app/image/municipalities/660056/activities/296/Cafayate_Cabalgatas_SecTur_Caf_111_Banner.jpg',
    caption: 'Cielo parcialmente nublado · Clima templado para caminatas y museos',
  },
  rainy: {
    image: 'https://cafayate.com/images/photos/amalaya-pedro-manager.jpg',
    caption: 'Jornada húmeda en el valle · Ideal para catas en bodegas históricas',
  },
};


function getImageByWeather(current) {
  if (!current) return WEATHER_IMAGES.sunnyDay;

  const code = current.condition.code;
  const isDay = current.is_day === 1;

  // Códigos de clima de acuerdo a WeatherAPI
  if (code >= 1063 && code <= 1282) {
    return WEATHER_IMAGES.rainy;
  }

  if (code >= 1003 && code <= 1030) {
    return WEATHER_IMAGES.cloudy;
  }

  return isDay ? WEATHER_IMAGES.sunnyDay : WEATHER_IMAGES.clearNight;
}

function Home() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        setLoading(true);
        const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=-26.073,-65.976&lang=es`);

        if (!response.ok) {
          throw new Error('No se pudo obtener la informacion del clima');
        }

        const data = await response.json();
        setWeather(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, []);

  const current = weather?.current;
  const location = weather?.location;
  const activeImage = getImageByWeather(current);

  return (
    <div className="space-y-12 pb-12">
      {/* Banner */}
      <section className="relative h-105 sm:h-120 flex items-center justify-center overflow-hidden bg-dark">
        <img
          src="https://www.cafayate.tur.ar/ccm/app/image/municipalities/660056/tours/225/Cafayate_Reserva_Las_Conchas_Paisajes_SecTurCaf_5_Banner.jpg"
          alt="Paisaje de montañas rojizas y valles en Cafayate"
          className="absolute inset-0 w-full h-full object-cover opacity-55"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-surface">
          <span className="inline-block bg-secondary text-dark font-semibold text-xs sm:text-sm uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            Corazón de los Valles Calchaquíes
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Descubre la Magia de <span className="text-secondary">Cafayate</span>
          </h1>
          <p className="text-base sm:text-lg text-surface/90 max-w-2xl mx-auto mb-8">
            Tierra de sol, formaciones rocosas imponentes y vinos de altura únicos en el mundo.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/destinations"
              className="bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 rounded-lg transition-colors shadow-md"
            >
              Explorar Circuitos
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 hover:bg-white/20 text-surface border border-white/30 font-medium px-6 py-3 rounded-lg backdrop-blur-xs transition-colors"
            >
              Planificar Visita
            </Link>
          </div>
        </div>
      </section>

      {/* Clima (API) */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="bg-card rounded-2xl shadow-sm border border-dark/10 overflow-hidden">
          <div className="bg-dark text-surface px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-white/10">
            <div className="flex items-center gap-3">
              {current?.condition?.icon ? (

                <img
                  src={`https:${current.condition.icon}`}
                  alt={current.condition.text}
                  className="w-11 h-11 object-contain scale-190 rounded-full"
                />
              ) : (
                <img
                  src="https://cdn.weatherapi.com/weather/64x64/day/113.png"
                  alt="Despejado"
                  className="w-11 h-11 object-contain scale-175 rounded-full p-1"
                />
              )}
              <div>
                <h2 className="text-xl font-bold">
                  Condiciones Actuales en {location?.name || 'Cafayate'}
                </h2>
                <p className="text-xs text-surface/70">
                  Datos en tiempo real obtenidos mediante API pública (Lat: -26.073, Lon: -65.976)
                </p>
              </div>
            </div>
            <span className="text-xs bg-secondary/20 text-secondary border border-secondary/40 px-3 py-1 rounded-full w-fit">
              API Pública
            </span>
          </div>


          <div className="p-6 space-y-6">

            <div className="bg-surface rounded-xl p-4 border border-dark/5">
              <img
                src={activeImage.image}
                alt="Postal climática de Cafayate"
                className="w-full h-52 sm:h-64 object-cover rounded-lg mb-3"
              />
              <p className="text-xs sm:text-sm font-medium text-muted text-center">
                {current
                  ? `${current.condition.text} · ${activeImage.caption}`
                  : 'Postal climática del valle'}
              </p>
            </div>

            {loading && (
              <p className="text-center text-sm text-muted py-4">
                Consultando estado meteorológico en tiempo real...
              </p>
            )}

            {error && (
              <p className="text-center text-sm text-primary py-4">
                {error}
              </p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Temperatura */}
              <div className="bg-surface rounded-xl p-5 border border-dark/5 text-center">
                <p className="text-sm font-medium text-muted mb-1">Temperatura Actual</p>
                <p className="text-3xl font-extrabold text-primary">
                  {current ? `${current.temp_c} °C` : '-- °C'}
                </p>
                <p className="text-xs text-muted mt-2">
                  {current
                    ? `Sensación térmica: ${current.feelslike_c} °C`
                    : 'Sensación térmica agradable'
                  }
                </p>
              </div>

              {/* Viento */}
              <div className="bg-surface rounded-xl p-5 border border-dark/5 text-center">
                <p className="text-sm font-medium text-muted mb-1">Velocidad del Viento</p>
                <p className="text-3xl font-extrabold text-dark">
                  {current ? `${current.wind_kph} km/h` : '-- km/h'}
                </p>
                <p className="text-xs text-muted mt-2">
                  {current
                    ? `Dirección: ${current.wind_dir} · Estado: ${current.condition.text}`
                    : 'Brisa del valle'
                  }
                </p>
              </div>

              {/* Humedad */}
              <div className="bg-surface rounded-xl p-5 border border-dark/5 text-center">
                <p className="text-sm font-medium text-muted mb-1">Humedad Relativa</p>
                <p className="text-3xl font-extrabold text-secondary">
                  {current ? `${current.humidity} %` : '-- %'}
                </p>
                <p className="text-xs text-muted mt-2">
                  {current ? `Índice UV: ${current.uv}` : 'Clima seco de montaña'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Sección Informativa */}
      < section className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6" >
        <div className="bg-card p-6 rounded-xl border border-dark/10 shadow-xs">
          <h3 className="text-lg font-bold text-primary mb-2">Ruta del Vino de Altura</h3>
          <p className="text-sm text-muted leading-relaxed">
            Situada a más de 1.680 metros sobre el nivel del mar, Cafayate destaca por su emblemático vino Torrontés y sus bodegas artesanales e industriales.
          </p>
        </div>

        <div className="bg-card p-6 rounded-xl border border-dark/10 shadow-xs">
          <h3 className="text-lg font-bold text-primary mb-2">Quebrada de las Conchas</h3>
          <p className="text-sm text-muted leading-relaxed">
            Un corredor natural declarado reserva donde la erosión del viento y el agua esculpió geoformas rojizas como El Anfiteatro y la Garganta del Diablo.
          </p>
        </div>

        <div className="bg-card p-6 rounded-xl border border-dark/10 shadow-xs">
          <h3 className="text-lg font-bold text-primary mb-2">Sol Todo el Año</h3>
          <p className="text-sm text-muted leading-relaxed">
            Con más de 300 días de sol al año y baja humedad ambiental, es un destino ideal para recorrer senderos, médanos y cascadas en cualquier estación.
          </p>
        </div>
      </section >
    </div >
  );
}

export default Home;