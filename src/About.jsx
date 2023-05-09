
import MonitorIcon from "./assets/icon-monitor.svg";
import MobileIcon from"./assets/icon-mobile.svg"
import BrushIcon from "./assets/icon-brush.svg";

function About() {
    return (
        <section className=" bg-darkBg flex flex-col items-center py-5 rounded-b-3xl">
            <h2 className=" text-primaryYellow">.about</h2>
            <div>
                <h3 className=" text-whiteBG">services:</h3>
                <div className="flex">
                    <div>
                    <img src={MonitorIcon} alt="" />
                        <p></p>
                    </div>
                    <div>
                        <img src={BrushIcon} alt="" />
                        <p></p>
                    </div>
                    <div>
                        <img src={MobileIcon}  alt="" />
                        <p></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;