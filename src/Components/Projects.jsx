const Projects = () => {
  return (
    <div>
      <section className="community">
        <h2>Proyectos Primer Corte</h2>
        <ul>
          <li>
            <a
              href="https://github.com/fabianlopezar/week3-web-uao"
              target="_blank"
            >
              - Pagina Responsive.
            </a>
          </li>
          <li>
            <a
              href="https://github.com/edwinmgallego/clase-practica-css-jueves/tree/devfab"
              target="_blank"
            >
              - Pagina Registrar
            </a>
          </li>
        </ul>
        <img
          src="public/images/Sin título.jpg"
          alt="Foto de perfil"
          className=""
        />
      </section>
      <section className="community">
        <h2>Proyectos Segundo Corte</h2>
        <ul>
          <li>
            <a
              href="https://github.com/fabianlopezar/funcionflecha"
              target="_blank"
            >
              - Funcion Flecha.
            </a>
          </li>
          <li>
            <a
              href="https://github.com/fabianlopezar/componentes-uao-web"
              target="_blank"
            >
              - Componentes En React.
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Projects;
