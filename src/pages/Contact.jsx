import { tours } from '../data/tours';
import { MapPinned } from 'lucide-react';

function Contact() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 space-y-8">
      {/* Encabezado */}
      <div className="border-b border-dark/10 pb-6">
        <span className="inline-block bg-primary/10 text-primary font-semibold text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-2">
          Atención al Visitante
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-dark">
          Contacto y Ubicación
        </h1>
        <p className="text-muted text-sm sm:text-base mt-1 max-w-2xl">
          Envíanos tu consulta para planificar tus excursiones o acércate a nuestro punto de información turística en el corazón de Cafayate.
        </p>
      </div>

      {/* Layout de 2 columnas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

        {/* Formulario de Contacto */}
        <div className="bg-card p-6 sm:p-8 rounded-2xl border border-dark/10 shadow-xs">
          <h2 className="text-xl font-bold text-dark mb-1">
            Envíanos un mensaje
          </h2>
          <p className="text-xs text-muted mb-6">
            Completa el formulario y recibirás respuesta directamente en tu correo electrónico.
          </p>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-dark mb-1.5"
              >
                Nombre completo *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Ej. Juan Pérez"
                className="w-full px-4 py-2.5 rounded-lg bg-surface border border-dark/15 text-dark placeholder:text-muted/60 text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-dark mb-1.5"
              >
                Correo electrónico *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="tu@correo.com"
                className="w-full px-4 py-2.5 rounded-lg bg-surface border border-dark/15 text-dark placeholder:text-muted/60 text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="tour"
                className="block text-sm font-semibold text-dark mb-1.5"
              >
                Circuito de interés
              </label>
              <select
                id="tour"
                name="tour"
                defaultValue=""
                className="w-full px-4 py-2.5 rounded-lg bg-surface border border-dark/15 text-dark text-sm focus:outline-none focus:border-primary transition-colors"
              >
                <option value="" disabled>
                  Selecciona un circuito (opcional)
                </option>
                {tours.map((tour) => (
                  <option key={tour.id} value={tour.nombre}>
                    {tour.nombre}
                  </option>
                ))}
                <option value="Consulta General">Otra consulta general</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-dark mb-1.5"
              >
                Mensaje o consulta *
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                placeholder="Indícanos fechas aproximadas, cantidad de personas o dudas sobre los recorridos..."
                className="w-full px-4 py-2.5 rounded-lg bg-surface border border-dark/15 text-dark placeholder:text-muted/60 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-sm cursor-pointer"
            >
              Enviar Consulta
            </button>
          </form>
        </div>

        {/* Mapa Embebido */}
        <div className="bg-card rounded-2xl border border-dark/10 shadow-xs overflow-hidden flex flex-col">
          <div className="bg-dark text-surface px-6 py-4 border-b border-white/10">
            <h2 className="text-lg font-bold">
              Punto de Encuentro e Informes
            </h2>
            <div className="flex items-center justify-start gap-1 text-xs text-surface/70">
              <MapPinned size={12} strokeWidth={2} />
              <p>
                Plaza Principal 20 de Febrero · Cafayate, Salta
              </p>
            </div>
          </div>

          {/* Iframe de Google Maps */}
          <div className="w-full h-80 sm:h-96 bg-surface">
            <iframe
              title="Ubicación Oficina de Turismo Cafayate"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.633860770308!2d-65.9781376246001!3d-26.072688477157816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941f31eb8925a199%3A0x6d9006e145546953!2sPlaza%2020%20de%20Febrero!5e0!3m2!1ses-419!2sar!4v1710000000000!5m2!1ses-419!2sar"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="p-6 bg-surface grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-muted border-t border-dark/5">
            <div>
              <p className="font-bold text-dark mb-1">Dirección Central</p>
              <p>Av. Güemes y Ntra. Sra. del Rosario</p>
              <p>A4427 Cafayate, Provincia de Salta</p>
            </div>
            <div>
              <p className="font-bold text-dark mb-1">Horario de Atención</p>
              <p>Lunes a Domingos: 08:00 a 20:00 hs</p>
              <p>Salidas diarias de excursiones</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;