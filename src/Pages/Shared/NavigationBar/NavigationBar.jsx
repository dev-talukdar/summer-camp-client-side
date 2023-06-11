import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/nameLogo.png'
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../../hooks/useCart';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart()

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.log(error))

    }


    const navOptions = <>
        <Link to="/"><li className='text-gray-900 font-bold mr-5 mt-3 hover:text-white'>Home</li></Link>
        <Link to="instructors"><li className='text-gray-900 font-bold mr-5 mt-3 hover:text-white'>Instructors</li></Link>
        <Link to="classes"><li className='text-gray-900 font-bold mr-5 mt-3 hover:text-white'>Classes</li></Link>

        {
            user ? (<Link to="/dashboard/selected-class"><li className='text-gray-900 font-bold mr-5 mt-3 hover:text-white'>Dashboard</li></Link>) : null
        }
        <li>
            <Link to="/dashboard/selected-class">
                <span className="text-xl">   <FaShoppingCart></FaShoppingCart></span>
                <div className="badge badge-primary">+{cart?.length || 0}</div>
            </Link>
        </li>


        {
            user ? <>
                <button onClick={handleLogOut} className='btn btn-ghost'>Log Out</button>
            </> : <>
                <Link to="login"><li className='text-gray-900 font-bold mr-5 mt-3 hover:text-white'>Login</li></Link>
            </>
        }

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
                    <Link to="/"><img className='w-2/4' src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end  ">

                    {user && <div title={user.displayName}>
                        <div className='avatar'>
                            <div className='w-14 rounded-full'>
                                <img className='' src={user.photoURL} alt="" />
                            </div>
                        </div>
                    </div>}

                </div>
            </div>

        </>
    );
};

export default NavigationBar;