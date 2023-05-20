import LineImg from "../assets/line.png";


function EducationCard({title, year, company}) {
    return (
        <>
            <div className="flex w-3/4 justify-around my-4">
                <img src={LineImg} alt="" />
                <div className=" w-44 h-20 rounded-2xl bg-[#FDFDFD]/[.18] p-3 text-xs">
                    <p className="transparent bg-gradient-to-b from-primaryPink to-primaryYellow bg-clip-text">{title}</p>
                    <p className="text-whiteBG pl-4 pt-[.3rem]">{year}</p>
                    <p className="text-whiteBG pl-4">Dicatated by {company}</p>
                </div>
            </div>
        </>
    );
}

export default EducationCard;