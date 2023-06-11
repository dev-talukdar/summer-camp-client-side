import { Link, Outlet } from "react-router-dom";
import { FaWallet, FaHome, FaUsers, FaUserGraduate } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
import { GrLogout } from "react-icons/gr";


const Dashboard = () => {
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

                    <li className="mt-64"><Link to="/dashboard/selected-class"><BsBriefcaseFill></BsBriefcaseFill>My Selected Classes</Link></li>
                    <li className="mt-2"><Link to="/dashboard/enrolled-class"><FaUserGraduate></FaUserGraduate>My Enrolled Classes</Link></li>
                    <li className="mt-2"><Link to="/dashboard/payment-history"><FaWallet></FaWallet>Payment History</Link></li>

                    <div className="divider"></div>

                    <li className="mt-2"><Link to="/"><FaHome></FaHome>Home</Link></li>
                    <li className="mt-2"><Link to="/instructors"><FaUsers></FaUsers>Instructor</Link></li>
                    <li className="mt-2"><Link to="/classes"><FaUserGraduate></FaUserGraduate>Classes</Link></li>

                    <div className="divider"></div>

                    <li className="mt-2"><Link to="/"><GrLogout></GrLogout> Log Out</Link></li>


                </ul>

            </div>
        </div>
    );
};

export default Dashboard;