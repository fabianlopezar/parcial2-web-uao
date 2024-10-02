import { useState } from "react";
import "../estilos/Habilidades.css";

const Acordeon = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="acordeon">
      <div className="acordeon-title" onClick={toggleAccordion}>
        {title}
      </div>
      {isOpen && <div className="acordeon-content">{content}</div>}
    </div>
  );
};

const Habilidades = () => {
  return (
    <div>
      <div className="next-live">
        <div className="">
          <Acordeon
            title="Habilidades Blandas"
            content={
              <ul>
                <li>
                  Comunicación efectiva: Expresar ideas claramente en inglés y
                  en proyectos colaborativos.
                </li>
                <li>
                  Trabajo en equipo: Colaborar eficazmente para alcanzar
                  objetivos comunes.
                </li>
                <li>
                  Escucha activa: Comprender y responder adecuadamente a los
                  demás.
                </li>
                <li>
                  Creatividad: Proponer ideas innovadoras y soluciones
                  creativas.
                </li>
                <li>
                  Resolución de problemas: Identificar y solucionar problemas
                  rápidamente.
                </li>
                <li>Adaptabilidad: Ajustarse a cambios y nuevas dinámicas.</li>
                <li>
                  Gestión del tiempo: Organizar y priorizar tareas para cumplir
                  con plazos.
                </li>
                <li>
                  Manejo del estrés: Mantener la calma y efectividad bajo
                  presión.
                </li>
              </ul>
            }
          />
        </div>
      </div>
      <div className="next-live">
        <Acordeon
          title="Habilidades Duras"
          content={
            <ul>
              <li>
                Edición de audio: Uso de software como Audacity o Adobe
                Audition.
              </li>
              <li>
                Producción de contenido: Planificar y estructurar episodios de
                podcast.
              </li>
              <li>Dominio del inglés: Fluidez en inglés hablado y escrito.</li>
              <li>
                Conocimiento técnico de grabación: Uso adecuado de micrófonos y
                herramientas de grabación.
              </li>
              <li>
                Manejo de redes sociales: Promoción en plataformas utilizando
                herramientas como Hootsuite.
              </li>
              <li>
                Edición de video: Uso de Premiere Pro o Final Cut para proyectos
                multimedia.
              </li>
              <li>
                Diseño gráfico: Herramientas como Photoshop o Canva para crear
                elementos visuales.
              </li>
              <li>
                Gestión de proyectos: Uso de Trello o Asana para organizar
                tareas y flujos de trabajo.
              </li>
            </ul>
          }
        />
      </div>
    </div>
  );
};

export default Habilidades;
