import { useState } from 'react';
import { tours } from '../data/tours';
import TourCard from '../components/TourCard';

function Destinations() {
  const [selectedDifficulty, setSelectedDifficulty] = useState('Todas');


  const filteredTours =
    selectedDifficulty === 'Todas'
      ? tours
      : tours.filter((tour) => tour.dificultad === selectedDifficulty);

  const difficulties = ['Todas', 'Baja', 'Baja - Media', 'Media', 'Media - Alta'];

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 space-y-8">
      {/* Encabezado de la página */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-dark/10 pb-6">
        <div>
          <span className="inline-block bg-primary/10 text-primary font-semibold text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-2">
            Catálogo Local
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-dark">
            Circuitos y Destinos en Cafayate
          </h1>
          <p className="text-muted text-sm sm:text-base mt-1 max-w-2xl">
            Explora nuestras excursiones, senderos y experiencias enológicas seleccionadas en los Valles Calchaquíes.
          </p>
        </div>

        {/* Filtro por dificultad */}
        <div className="flex flex-wrap items-center gap-2">
          {difficulties.map((level) => (
            <button
              key={level}
              type="button"
              onClick={() => setSelectedDifficulty(level)}
              className={`text-xs font-semibold px-3.5 py-2 rounded-lg transition-colors cursor-pointer ${selectedDifficulty === level
                ? 'bg-primary text-white shadow-xs'
                : 'bg-card text-muted hover:text-dark border border-dark/10'
                }`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* Cuadrícula responsive */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </section>
  );
}

export default Destinations;