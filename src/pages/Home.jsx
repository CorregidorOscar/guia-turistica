import { Link } from "react-router";

function Home() {
  return (
    <div className="space-y-12 pb-12">
      {/* Banner */}
      <section className="relative h-[420px] sm:h-[480px] flex items-center justify-center overflow-hidden bg-dark">
        <img
          src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80"
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
              to="/destinos"
              className="bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 rounded-lg transition-colors shadow-md"
            >
              Explorar Circuitos
            </Link>
            <Link
              to="/contacto"
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
            <div>
              <h2 className="text-xl font-bold flex items-center gap-2">
                <span>☀️</span> Condiciones Actuales en Cafayate
              </h2>
              <p className="text-xs text-surface/70">
                Datos en tiempo real obtenidos mediante API pública (Lat: -26.073, Lon: -65.976)
              </p>
            </div>
            <span className="text-xs bg-secondary/20 text-secondary border border-secondary/40 px-3 py-1 rounded-full w-fit">
              API Pública
            </span>
          </div>


          <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6 items-center">

            <div className="flex flex-col items-center justify-center bg-surface rounded-xl p-4 border border-dark/5">
              <img
                src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=600&q=80"
                alt="Viñedos soleados de Cafayate"
                className="w-full h-32 object-cover rounded-lg mb-3"
              />
              <span className="text-xs font-medium text-muted text-center">
                Postal climática del valle
              </span>
            </div>

            {/* Temperatura */}
            <div className="bg-surface rounded-xl p-5 border border-dark/5 text-center">
              <p className="text-sm font-medium text-muted mb-1">Temperatura Actual</p>
              <p className="text-3xl font-extrabold text-primary">-- °C</p>
              <p className="text-xs text-muted mt-2">Sensación térmica agradable</p>
            </div>

            {/* Viento */}
            <div className="bg-surface rounded-xl p-5 border border-dark/5 text-center">
              <p className="text-sm font-medium text-muted mb-1">Velocidad del Viento</p>
              <p className="text-3xl font-extrabold text-dark">-- km/h</p>
              <p className="text-xs text-muted mt-2">Brisa del valle</p>
            </div>

            {/* Humedad / Altitud */}
            <div className="bg-surface rounded-xl p-5 border border-dark/5 text-center">
              <p className="text-sm font-medium text-muted mb-1">Humedad Relativa</p>
              <p className="text-3xl font-extrabold text-secondary">-- %</p>
              <p className="text-xs text-muted mt-2">Clima seco de montaña</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Informativa */}
      <section className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
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
      </section>
    </div>
  );
}

export default Home;