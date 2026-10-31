function Footer() {
  return (
    <footer className="bg-dark border-t border-card/10 text-surface/70 py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
        <p>© {new Date().getFullYear()} Guía Turística. Todos los derechos reservados.</p>
        <p className="text-secondary/80">Corregidor Oscar</p>
      </div>
    </footer>
  );
}

export default Footer;