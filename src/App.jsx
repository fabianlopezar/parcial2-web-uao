import Education from "./Components/Education";
//import Skills from "./Components/Skills";
import Habilidades from "./Components/Habilidades";
import Header from "./Components/Header";
import Summary from "./Components/Summary";
import Footer from "./Components/Footer";

import "./styles.css";
import Projects from "./Components/Projects";

const Perfil = () => {
  return (
    <div>
      <Header />
      <main>
        <Summary />
        <Habilidades/>
        <Projects/>
        <Education />
      </main>
      <Footer />
    </div>
  );
};

export default Perfil;
