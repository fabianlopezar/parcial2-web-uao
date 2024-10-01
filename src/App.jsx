import Header from './Components/Header';
import Summary from './Components/Summary';

import './styles.css'; // Asegúrate de que este archivo exista

const Perfil = () => {
    return (
        <div>
            <Header></Header>
            
            <main>
           <Summary></Summary>

                <section className="community">
                    <h2>Proyectos Primer Corte</h2>
                    <ul>
                        <li><a href="https://github.com/fabianlopezar/week3-web-uao" target="_blank">- Pagina Responsive.</a></li>
                        <li><a href="https://github.com/edwinmgallego/clase-practica-css-jueves/tree/devfab" target="_blank">- Pagina Registrar</a></li>
                    </ul>
                    <img src="src/images/Sin título.jpg" alt="Foto de perfil" className="" />
                </section>
                <section className="community">
                    <h2>Proyectos Segundo Corte</h2>
                    <ul>
                        <li><a href="https://github.com/fabianlopezar/funcionflecha" target="_blank">- Funcion Flecha.</a></li>                        
                    </ul>
                    
                </section>


                <section className="community">
                    <h2>Educación</h2>
                    <ul>
                        <li><a href="#">SoyHenry</a> - Desarrollador Full Stack</li>
                        <li><a href="#">Cesde</a> - Técnico en productos interactivos</li>
                        <li><a href="#">Platzi</a> - Desarrollador de videojuegos</li>
                        <li><a href="#">Udemy</a> - Git y Github</li>
                    </ul>
                </section>
            </main>

            <footer>
                <p>&copy; 2024 FabianLopez || Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default Perfil;
