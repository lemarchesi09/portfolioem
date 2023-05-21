import MonitorIcon from "./assets/icon-monitor.svg";
import MobileIcon from "./assets/icon-mobile.svg";
import BrushIcon from "./assets/icon-brush.svg";
import ServiceCard from "./components/ServiceCard";
import EducationCard from "./components/EducationCard";

import FireIcon from "./assets/icon-tool-fire.svg";
import JsIcon from "./assets/icon-tool-js.svg";
import ReactIcon from "./assets/icon-tool-react.svg";
import TwIcon from "./assets/icon-tool-tw.svg";
import MysqlIcon from "./assets/icon-tool-mysql.svg";
import GitIcon from "./assets/icon-tool-git.svg";
import LinuxIcon from "./assets/icon-tool-linux.svg";
import ReduxIcon from "./assets/icon-tool-redux.svg";

import { useState } from "react";
function About() {
  const [index, setIndex] = useState(1);
  console.log(index);

  const [isActive, setIsActive] = useState(false);

  const handleIndex = (e) => {
    let addedClass = "bg-primaryPink";
    setIndex(e.target.value);
    e.currentTarget.className;
    // setActive({...active, [e.target.name]: Boolean(e.target.value)});
    // Object.keys(active)
    e.currentTarget.classList.toggle('h-8 w-8 rounded-3xl bg-primaryPink border-2 border-whiteBG')
  };

  console.log("active", isActive);

  return (
    <>
      <section className=" bg-darkBg flex flex-col items-center py-[4.5rem] rounded-b-3xl relative z-30 -mt-10 ">
        <h2 className=" text-primaryYellow text-xl">.about</h2>

        {index == 1 && (
          <div className="flex flex-col items-center w-full anim">
            <h3 className=" text-whiteBG pt-8">services:</h3>
            <div className="flex flex-wrap w-[90%] justify-center gap-8 pt-8">
              <ServiceCard source={MonitorIcon} title={"Web Development"} />
              <ServiceCard source={BrushIcon} title={"UX / UI"} />
              <ServiceCard source={MobileIcon} title={"Responsive Design"} />
            </div>
          </div>
        )}

        {index == 2 && (
          <div className="flex flex-col items-center w-full anim">
            <h3 className=" text-whiteBG pt-8">education:</h3>
            <EducationCard
              title={"Full Stack Web"}
              year={"2021"}
              company={"Mundos E"}
            />
            <EducationCard
              title={"Front End React"}
              year={"2022"}
              company={"Digitalers"}
            />
            <EducationCard
              title={"Front End React"}
              year={"2022"}
              company={"Avalith"}
            />
            <EducationCard
              title={"UX / UI"}
              year={"2022"}
              company={"Coursera"}
            />
          </div>
        )}
        {index == 3 && (
          <div className="flex flex-col items-center w-full anim">
            <h3 className=" text-whiteBG pt-8">tools:</h3>
            <div className="flex flex-wrap gap-4 justify-center w-[75%] items-center py-8">
              <img src={FireIcon} alt="" />
              <img src={JsIcon} alt="" />
              <img src={ReactIcon} alt="" />
              <img src={TwIcon} alt="" />
              <img src={MysqlIcon} alt="" />
              <img src={GitIcon} alt="" />
              <img src={LinuxIcon} alt="" />
              <img src={ReduxIcon} alt="" />
            </div>
          </div>
        )}

        {/* <div className="flex flex-col items-center w-full">
        <h3 className=" text-whiteBG pt-8">education:</h3>
        <EducationCard
          title={"Full Stack Web"}
          year={"2021"}
          company={"Mundos E"}
        />
        <EducationCard
          title={"Front End React"}
          year={"2022"}
          company={"Digitalers"}
        />
        <EducationCard
          title={"Front End React"}
          year={"2022"}
          company={"Avalith"}
        />
        <EducationCard title={"UX / UI"} year={"2022"} company={"Coursera"} />
      </div> */}

        <div className="w-1/2 flex justify-around pt-12 ">
          <button
            onClick={handleIndex}
            value={1}
            className={
              index == 1
                ? "h-8 w-8 rounded-3xl transition ease-in-out delay-50 bg-whiteBG border-2 border-primaryYellow"
                : "h-8 w-8 rounded-3xl bg-primaryYellow border-2 border-whiteBG"
            }
          ></button>
          <button
            onClick={handleIndex}
            value={2}
            className={
              index == 2
                ? "h-8 w-8 rounded-3xl transition ease-in-out delay-50 bg-whiteBG border-2 border-primaryYellow"
                : "h-8 w-8 rounded-3xl bg-primaryYellow border-2 border-whiteBG"
            }
          ></button>
          <button
            onClick={handleIndex}
            value={3}
            className={
              index == 3
                ? "h-8 w-8 rounded-3xl transition ease-in-out delay-50 bg-whiteBG border-2 border-primaryYellow"
                : "h-8 w-8 rounded-3xl bg-primaryYellow border-2 border-whiteBG"
            }
          ></button>
        </div>
      </section>
    </>
  );
}

export default About;
