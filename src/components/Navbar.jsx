import { NavLink, Link } from 'react-router';

function Navbar() {
  const getNavLinkClass = ({ isActive }) =>
    isActive
      ? 'text-secondary font-semibold border-b-2 border-secondary pb-1 transition-colors'
      : 'text-surface/80 hover:text-secondary transition-colors pb-1';

  return (
    <header className='bg-dark border-b border-white/10 sticky top-0 z-50 shadow-sm'>
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-surface tracking-tight">
          Guía<span className="text-secondary">Turística</span>
        </Link>

        <nav className="flex items-center gap-6 text-sm sm:text-base">
          <NavLink to="/" end className={getNavLinkClass}>
            Inicio
          </NavLink>
          <NavLink to="/destinations" className={getNavLinkClass}>
            Destinos
          </NavLink>
          <NavLink to="/contact" className={getNavLinkClass}>
            Contacto
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;