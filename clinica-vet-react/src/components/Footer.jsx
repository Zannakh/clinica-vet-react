function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-custom bg-dark text-white mt-5 py-3">
      <div className="container text-center">
        <p className="mb-1">© {new Date().getFullYear()} Felipe Larrañaga. Todos los derechos reservados.</p>
        <button onClick={scrollToTop} className="btn btn-outline-light btn-sm mt-2">
          Volver arriba
        </button>
      </div>
    </footer>
  );
}

export default Footer;
