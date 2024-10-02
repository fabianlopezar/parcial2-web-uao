import tw from "../../public/images/tw.png"


const Header = () => {
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
                        <img src={tw} alt="Twitter" />
                    </a>
                    <a href="https://www.instagram.com/fabianlopezdev/" target="_blank" aria-label="Instagram">
                        <img src="/images/insta.png" alt="Instagram" />
                    </a>
                    <a href="https://www.youtube.com/@fabianlopez2650" aria-label="YouTube" target="_blank">
                        <img src="/images/youtube.png" alt="YouTube" />
                    </a>
                    <a href="https://www.linkedin.com/in/fabian-lopez-b4933a216/" aria-label="LinkedIn" target="_blank">
                        <img src="/images/linkedin.png" alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/fabianlopezar" aria-label="Git" target="_blank">
                        <img src="/images/git.png" alt="Git" />
                    </a>
                </nav>
            </header>
            </div>
  );
};

export default Header;
