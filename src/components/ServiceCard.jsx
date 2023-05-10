import React from "react";

export default function ServiceCard({source, title}) {
  return (
    <div className="flex flex-col items-center text-center text-whiteBG">
      <img src={source} alt="" />
      <p className="mt-3">{title}</p>
    </div>
  );
}
