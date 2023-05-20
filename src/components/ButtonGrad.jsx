
function ButtonGrad({text}) {
    return (
        <button className="border-2 border-whiteBG rounded-lg text-whiteBG bg-gradient-to-b from-primaryYellow to-primaryPink py-1 px-2">
            {text}
        </button>
    );
}

export default ButtonGrad;