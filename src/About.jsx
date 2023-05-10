import MonitorIcon from "./assets/icon-monitor.svg";
import MobileIcon from "./assets/icon-mobile.svg";
import BrushIcon from "./assets/icon-brush.svg";
import ServiceCard from "./components/ServiceCard";
import LineImg from "./assets/line.png"
import { useState } from "react";

function About() {
    const [page, setPage] = useState();

  return (
    <section className=" bg-darkBg flex flex-col items-center py-[4.5rem] rounded-b-3xl relative -z-10 -mt-10">
      <h2 className=" text-primaryYellow">.about</h2>
      <div className="flex flex-col items-center">
        <h3 className=" text-whiteBG pt-8">services:</h3>
        <div className="flex flex-wrap w-[90%] justify-center gap-8 pt-8">
          <ServiceCard source={MonitorIcon} title={"Web Development"} />
          <ServiceCard source={BrushIcon} title={"UX / UI"} />
          <ServiceCard source={MobileIcon} title={"Responsive Design"} />
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h3 className=" text-whiteBG pt-8">education:</h3>
        <div className="flex">
            <img src={LineImg} alt="" />
            <div className=" w-44 h-20 rounded-2xl bg-[#FDFDFD]/[.18] p-3 text-xs">
                <p className="transparent bg-gradient-to-b from-primaryPink to-primaryYellow bg-clip-text">Certifiation Name</p>
                <p className="text-whiteBG pl-4 pt-[.3rem]">2021</p>
                <p className="text-whiteBG pl-4">Dicatated by</p>

            </div>
        </div>
      </div>
      <div className="w-1/4 flex justify-around pt-12">
        <button className="h-8 w-8 rounded-3xl bg-primaryYellow border-2 border-whiteBG"></button>
        <button className="h-8 w-8 rounded-3xl bg-primaryYellow border-2 border-whiteBG"></button>
        <button className="h-8 w-8 rounded-3xl bg-primaryYellow border-2 border-whiteBG"></button>
      </div>
    </section>
  );
}

export default About;
