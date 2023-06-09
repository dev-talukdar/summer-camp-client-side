import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/nameLogo.png'

const NavigationBar = () => {
    const navOptions = <>
        <Link to="/"><li className='text-gray-900'><a>Home</a></li></Link>
        <Link to="instructors"><li className='text-gray-900'><a>Instructors</a></li></Link>
        <Link to="classes"><li className='text-gray-900'><a>Classes</a></li></Link>
        <Link to="dashboard"><li className='text-gray-900'><a>Dashboard</a></li></Link>
        <Link to="login"><li className='text-gray-900'><a>Login</a></li></Link>
    </>
    return (
        < >
            <div className="navbar fixed z-10 bg-purple-600 bg-opacity-50 max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                            {navOptions}
                        </ul>
                    </div>
                    <img className='w-2/4' src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>

        </>
    );
};

export default NavigationBar;