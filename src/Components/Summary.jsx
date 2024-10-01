const Summary = () => {
    return (
        <div>
          

            <main>
                <section className="details">
                    <div>
                        <p><strong>Integrante</strong> UAO Speaks English</p>
                    </div>
                    <div>
                        <p><strong>Coordinador</strong> Media Collab</p>
                    </div>
                </section>


                <section className="bio">
                    <p>
                        Hola soy Fabian, estudiante de ingenieria multimedia y actualmente soy coordinador del grupo estudiantil mediacollab. 
                        Además, creo contenido de entretenimiento en ingles, me gusta desafiarme saliendo de mi zona de confort y participar en competencias que me ayuden a crecer profesionalmente y como persona. Por último, me gustan los videojuegos y la pizza. ¡Bienvenid@!
                        Con conocimientos en ReactJS, CSS, HTML, Redux, C#, Unity, Java.
                    </p>
                </section>

                <section className="next-live">
                    
                    <button onClick="window.location.href='habilidadesBlandas.jsx';">Habilidades Blandas</button>
                    <button>Habilidades Duras</button>
                </section>

               </main>
        </div>
    );
};

export default Summary;
