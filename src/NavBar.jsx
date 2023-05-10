import Logo from "./components/Logo"
import MenuIcon from "./components/MenuIcon";
function NavBar() {
    return (
        <nav className="flex justify-between px-5 bg-black h-20 w-full items-center bg-darkBg" >

            <Logo/>
            <MenuIcon/>
            {/* <a className="">About</a>
            <a>Projects</a>
            <a>Contact</a> */}
        </nav>
    );
}

export default NavBar;