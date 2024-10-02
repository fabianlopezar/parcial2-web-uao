import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Header from "./Components/Header";
import Summary from "./Components/Summary";
import Footer from "./Components/Footer";

import "./styles.css";

const Perfil = () => {
  return (
    <div>
      <Header />
      <main>
        <Summary />
        <Skills />
        <Education />
      </main>
      <Footer />
    </div>
  );
};

export default Perfil;
