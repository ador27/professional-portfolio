import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>

            <div class="navbar bg-second">
                <div class="flex-1">
                    <a class="btn btn-ghost normal-case text-xl">RASHEDUL HAQUE ADOR</a>
                </div>
                <div class="flex-none">
                    <ul class="menu menu-horizontal p-0">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/aboutme'>ABOUT ME</Link></li>
                        <li><Link to='/skills'>SKILLS</Link></li>
                        <li><Link to='/projects'>PROJECTS</Link></li>
                        <li><Link to='/contactme'>CONTACT ME</Link></li>
                    </ul>
                </div>
            </div>


        </div>
    );
};

export default Navbar;