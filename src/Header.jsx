import imgHero from "./assets/img-hero.png";
function Header() {
  return (
    <header className="p-10 bg-whiteBG border-2 border-black border-t-0 rounded-b-3xl">
      <div className="flex justify-center text-xl">
        <p
          className="transparent bg-gradient-to-b from-primaryYellow to-primaryPink bg-clip-text "
        >
          Welcome 
        </p>
        <p className="text-darkBG ml-1"> to my portfolio</p>
      </div>
      <div className="flex flex-col items-center">
        <img src={imgHero} alt="" className="h-60 w-auto" />
        <p className="text-center w-1/2">
          I´m <span className="font-bold">Enzo Marchesi</span> , a <span className="text-primaryPink">Front End Developer</span>  based in Córdoba, ARG
        </p>
      </div>
    </header>
  );
}

export default Header;
