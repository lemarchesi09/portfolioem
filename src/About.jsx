import MonitorIcon from "./assets/icon-monitor.svg";
import MobileIcon from "./assets/icon-mobile.svg";
import BrushIcon from "./assets/icon-brush.svg";
import ServiceCard from "./components/ServiceCard";
import EducationCard from "./components/EducationCard";

function About() {
  return (
    <>
    <section className=" bg-darkBg flex flex-col items-center py-[4.5rem] rounded-b-3xl relative -mt-10 ">
      <h2 className=" text-primaryYellow">.about</h2>

      <div className="flex flex-col items-center w-full">
        <h3 className=" text-whiteBG pt-8">services:</h3>
        <div className="flex flex-wrap w-[90%] justify-center gap-8 pt-8">
          <ServiceCard source={MonitorIcon} title={"Web Development"} />
          <ServiceCard source={BrushIcon} title={"UX / UI"} />
          <ServiceCard source={MobileIcon} title={"Responsive Design"} />
        </div>
      </div>

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

      <div className="w-1/4 flex justify-around pt-12">
        <button className="h-8 w-8 rounded-3xl bg-primaryYellow border-2 border-whiteBG"></button>
        <button className="h-8 w-8 rounded-3xl bg-primaryYellow border-2 border-whiteBG"></button>
        <button className="h-8 w-8 rounded-3xl bg-primaryYellow border-2 border-whiteBG"></button>
      </div>
    </section>
    </>
  );
}

export default About;
