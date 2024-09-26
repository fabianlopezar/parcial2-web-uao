import React from 'react';
import './styles.css'; // Asegúrate de que este archivo exista

const Perfil = () => {
    return (
        <div>
            <header>
                <img src="src/images/perfil.png" alt="Foto de perfil" className="profile-image" />
                <div className="profile">
                    <h1>Fabian Esteban Lopez Arias</h1>
                    <p className="username">@fabianlopezdev</p>
                </div>
                <nav className="social-icons">
                    <a href="https://x.com/FabianLopeza5" target="_blank" aria-label="Twitter">
                        <img src="src\images\tw.png" alt="Twitter" />
                    </a>
                    <a href="https://www.instagram.com/fabianlopezdev/" target="_blank" aria-label="Instagram">
                        <img src="src/images/insta.png" alt="Instagram" />
                    </a>
                    <a href="https://www.youtube.com/@fabianlopez2650" aria-label="YouTube" target="_blank">
                        <img src="src/images/youtube.png" alt="YouTube" />
                    </a>
                    <a href="https://www.linkedin.com/in/fabian-lopez-b4933a216/" aria-label="LinkedIn" target="_blank">
                        <img src="src/images/linkedin.png" alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/fabianlopezar" aria-label="Git" target="_blank">
                        <img src="src/images/git.png" alt="Git" />
                    </a>
                </nav>
            </header>

            <main>
                <section className="details">
                    <div>
                        <p><strong>Integrante</strong> UAO Speaks English</p>
                    </div>
                    <div>
                        <p><strong>Coordinador</strong> Media Collab</p>
                    </div>
                </section>

                <section className="next-live">
                    <h2>UAO Speak English</h2>
                    <p>Jueves, 29 de Agosto a las 04:00 - 05:00 </p>
                </section>

                <section className="bio">
                    <p>
                        Hola soy Fabian, estudiante de ingenieria multimedia y actualmente soy coordinador del grupo estudiantil mediacollab. 
                        Además, creo contenido de entretenimiento en ingles, me gusta desafiarme saliendo de mi zona de confort y participar en competencias que me ayuden a crecer profesionalmente y como persona. Por último, me gustan los videojuegos y la pizza. ¡Bienvenid@!
                        Con conocimientos en ReactJS, CSS, HTML, Redux, C#, Unity, Java.
                    </p>
                </section>

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
