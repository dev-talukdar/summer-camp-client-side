import { Link } from "react-router-dom";

 

const NavigationBar = () => {

    const navOptions = <>
    <li><Link>Home</Link></li>
    <li><Link>Instructors</Link></li>
    <li><Link>Classes</Link></li>
    <li><Link>Dashboard</Link></li>
    <li><Link>Login</Link></li>

    </>
    return (
        <div>
           { navOptions}
        </div>
    );
};

export default NavigationBar;