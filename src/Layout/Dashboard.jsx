import { NavLink, Outlet } from "react-router-dom";
import { FaWallet, FaHome, FaUsers, FaUserGraduate, FaUserCog } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
import { GrLogout } from "react-icons/gr";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useCart from "../hooks/useCart";
import { MdOutlineManageHistory } from "react-icons/md";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";


const Dashboard = () => {
    const { user, logOut } = useContext(AuthContext)
    const [cart] = useCart()

    //TODO load data from the server to have dynamic isAdmin based on Data
    // const isAdmin = true;
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()

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

                    {user && <div>
                        <div className='avatar flex justify-center  '>
                            <div className='w-24 rounded-full'>
                                <img className='' src={user.photoURL} alt="" />
                            </div>
                        </div>
                        <p className="mt-3 text-center">{user.displayName}</p>
                    </div>}

                    {
                        isAdmin ? <>
                            <li className="mt-10">
                                <NavLink to="/dashboard/admin-home"><BsBriefcaseFill></BsBriefcaseFill>Admin Home</NavLink></li>
                            <li className="mt-2"><NavLink to="/dashboard/manage-classes"><MdOutlineManageHistory></MdOutlineManageHistory>Manage Classes</NavLink></li>
                            <li className="mt-2"><NavLink to="/dashboard/manage-users"><FaUserCog></FaUserCog>Manage Users</NavLink></li>

                        </> : isInstructor? <> 
                       
                            <li className="mt-10"><NavLink to="/dashboard/instructor-home"><BsBriefcaseFill></BsBriefcaseFill>Instructor Home</NavLink></li>
                            <li className="mt-2"><NavLink to="/dashboard/my-classes"><MdOutlineManageHistory></MdOutlineManageHistory>My Classes</NavLink></li>
                            <li className="mt-2"><NavLink to="/dashboard/add-a-class"><MdOutlineManageHistory></MdOutlineManageHistory>Add A Class</NavLink></li>
                            <li className="mt-2"><NavLink to="/dashboard/total-enrolled-students"><FaUserCog></FaUserCog>Total Enrolled Students</NavLink></li>

                        </> : <> 

                            <li className="mt-10">
                                <NavLink to="/dashboard/selected-class"><BsBriefcaseFill></BsBriefcaseFill>My Selected Classes
                                    <span className="badge badge-primary">+{cart?.length || 0}</span>
                                </NavLink>
                            </li>
                            <li className="mt-2"><NavLink to="/dashboard/enrolled-class"><FaUserGraduate></FaUserGraduate>My Enrolled Classes</NavLink></li>
                            <li className="mt-2"><NavLink to="/dashboard/payment-history"><FaWallet></FaWallet>Payment History</NavLink></li>
                        </>
                    }

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