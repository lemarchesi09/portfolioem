import iconFb from "./assets/icon-fire.svg";
import iconJs from "./assets/icon-js.svg";
import iconReact from "./assets/icon-react.svg";
import iconTw from "./assets/icon-tw.svg";
import ButtonGrad from "./components/ButtonGrad";
import ButtonTp from "./components/ButtonTp";
import ProjectCard from "./components/ProjectCard";
import {Link} from 'react-router-dom'
function Projects() {
  return (
    <div className="p-10 flex flex-col items-center gap-8 bg-whiteBG border-2 border-black border-t-0 rounded-b-3xl relative z-30 py-[4.5rem]
    -mt-10">
      <h2 className="text-primaryPink">. projects</h2>

      <ProjectCard title={'Proyect 1'} imgSrc={"https://www.freecodecamp.org/news/content/images/2020/07/weather-app-example.png"}/>
      <ProjectCard title={'Proyect 2'} imgSrc={"https://www.freecodecamp.org/news/content/images/2020/07/weather-app-example.png"}/>

    <Link className=" text-primaryYellow" to={""}>See al projects</Link>
    </div>
  );
}

export default Projects;
