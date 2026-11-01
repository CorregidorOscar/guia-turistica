import { Link } from 'react-router';
import { Clock, MapPinned } from 'lucide-react';

function TourCard({ tour }) {
  const {
    nombre,
    categoria,
    descripcion,
    duracion,
    dificultad,
    distancia,
    imagen,
  } = tour;

  function getDificultyColor(dif) {
    if (dif === 'Baja') return 'bg-green-100 text-dark border-dark/50';
    else if (dif === 'Media' || dif === 'Baja - Media') return 'bg-yellow-100 text-dark border-dark/50';
    else return 'bg-red-100 text-dark border-dark/50';
  }

  const difficultyClass = getDificultyColor(dificultad);


  return (
    <article className="bg-card rounded-2xl overflow-hidden border border-dark/10 shadow-xs hover:shadow-md transition-shadow flex flex-col">

      <div className="relative h-52 overflow-hidden bg-dark">
        <img
          src={imagen}
          alt={nombre}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 bg-dark/80 backdrop-blur-xs text-surface text-xs font-medium px-3 py-1 rounded-full">
          {categoria}
        </span>
      </div>

      {/* Tarjeta */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h2 className="text-lg font-bold text-dark leading-snug">
              {nombre}
            </h2>
            <span
              className={`text-xs font-semibold px-2.5 py-0.5 rounded-md border shrink-0 ${difficultyClass}`}
            >
              {dificultad}
            </span>
          </div>

          <p className="text-sm text-muted leading-relaxed">{descripcion}</p>
        </div>


        <div className="pt-4 border-t border-dark/10 space-y-3">
          <div className="flex items-center justify-between text-xs text-muted">
            <span className="flex items-center justify-between gap-1">
              <Clock size={12} strokeWidth={2} /> {duracion}
            </span>
            <span className="flex items-center justify-start gap-1">
              <MapPinned size={12} strokeWidth={2} />
              {distancia}
            </span>
          </div>

          <Link
            to="/contact"
            className="block w-full text-center bg-surface hover:bg-primary hover:text-white text-primary font-semibold text-sm py-2.5 rounded-lg border border-primary/30 transition-colors"
          >
            Consultar por este circuito
          </Link>
        </div>
      </div>
    </article>
  );
}

export default TourCard;