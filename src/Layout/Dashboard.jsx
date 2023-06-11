import { NavLink, Outlet } from "react-router-dom";
import { FaWallet, FaHome, FaUsers, FaUserGraduate } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
import { GrLogout } from "react-icons/gr";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useCart from "../hooks/useCart";


const Dashboard = () => {
    const { logOut } = useContext(AuthContext)
    const [cart] = useCart()

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.log(error))

    }

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-gradient-to-r from-violet-400  to-purple-600 text-base-content text-xl font-medium">

                    <li className="mt-64">
                        <NavLink to="/dashboard/selected-class"><BsBriefcaseFill></BsBriefcaseFill>My Selected Classes
                        <span className="badge badge-primary">+{cart?.length || 0}</span>
                        </NavLink>
                    </li>
                    <li className="mt-2"><NavLink to="/dashboard/enrolled-class"><FaUserGraduate></FaUserGraduate>My Enrolled Classes</NavLink></li>
                    <li className="mt-2"><NavLink to="/dashboard/payment-history"><FaWallet></FaWallet>Payment History</NavLink></li>

                    <div className="divider"></div>

                    <li className="mt-2"><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
                    <li className="mt-2"><NavLink to="/instructors"><FaUsers></FaUsers>Instructor</NavLink></li>
                    <li className="mt-2"><NavLink to="/classes"><FaUserGraduate></FaUserGraduate>Classes</NavLink></li>

                    <div className="divider"></div>

                    <li onClick={handleLogOut} className="mt-2"><NavLink to="/"><GrLogout></GrLogout> Log Out</NavLink></li>


                </ul>

            </div>
        </div>
    );
};

export default Dashboard;