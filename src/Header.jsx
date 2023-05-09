
import imgHero from "./assets/img-hero.png"
function Header() {

    return (
        <header className="px-10 py-5 bg-whiteBG border-2 border-black border-t-0 rounded-b-3xl">
            <h1 className="text-center">Welcome to my portfolio</h1>
            <div className="flex flex-col items-center">
                <img src={imgHero} alt="" className="h-60 w-auto" />
                <p className="text-center w-1/2">I´m Enzo Marchesi, a Front End Developer based in Córdoba, ARG</p>
            </div>
        </header>
    );
}

export default Header;