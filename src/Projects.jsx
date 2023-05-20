import iconFb from "./assets/icon-fire.svg";
import iconJs from "./assets/icon-js.svg";
import iconReact from "./assets/icon-react.svg";
import iconTw from "./assets/icon-tw.svg";
import ButtonGrad from "./components/ButtonGrad";
import ButtonTp from "./components/ButtonTp";
function Projects() {
  return (
    <div className="p-10 bg-whiteBG border-2 border-black border-t-0 rounded-b-3xl relative z-50 py-[4.5rem]
    -mt-10">
      <div className="project__card bg-darkBg flex flex-col justify-around items-center h-80 w-80 m-auto rounded-3xl p-4">
        <img className="h-80 w-80 object-cover rounded-3xl p-4" src="https://www.freecodecamp.org/news/content/images/2020/07/weather-app-example.png" alt="" />
        <p className=" text-whiteBG">Title</p>
        <div className="project__card--buttons text-whiteBG flex justify-center gap-28 w-full">
          <ButtonTp text={'Github'}/>
          <ButtonGrad text={'Deploy'}/>
          
        </div>
        <div className="flex justify-center gap-4 w-full">
          <img src={iconJs} alt="" />
          <img src={iconFb} alt="" />
          <img src={iconReact} alt="" />
          <img src={iconTw} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
