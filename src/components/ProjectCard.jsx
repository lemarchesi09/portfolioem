import React from "react";
import ButtonTp from "./ButtonTp";
import ButtonGrad from "./ButtonGrad";
import iconFb from "../assets/icon-fire.svg";
import iconJs from "../assets/icon-js.svg";
import iconReact from "../assets/icon-react.svg";
import iconTw from "../assets/icon-tw.svg";

export default function ProjectCard({imgSrc, title}) {
  return (
    <div className="project__card bg-darkBg flex flex-col justify-around items-center h-[22rem] w-[22rem] rounded-3xl p-4">
      <img
        className=" h-[20rem] w-[20rem] object-cover rounded-3xl p-4"
        src={imgSrc}
        alt=""
      />
      <p className=" text-whiteBG my-2">{title}</p>
      <div className=" my-2 project__card--buttons text-whiteBG flex justify-center gap-28 w-full">
        <ButtonTp text={"Github"} />
        <ButtonGrad text={"Deploy"} />
      </div>
      <div className="flex justify-center gap-4 w-full my-2">
        <img src={iconJs} alt="" />
        <img src={iconFb} alt="" />
        <img src={iconReact} alt="" />
        <img src={iconTw} alt="" />
      </div>
    </div>
  );
}
