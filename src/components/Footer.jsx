function Footer() {
  return (
    <footer className="bg-dark border-t border-card/10 text-surface/70 py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
        <p>© {new Date().getFullYear()} Guía Turística. Todos los derechos reservados.</p>
        <a href="https://github.com/CorregidorOscar/guia-turistica" target="_blank" rel="noopener noreferrer" className="text-secondary/80">Corregidor Oscar</a>
      </div>
    </footer>
  );
}

export default Footer;