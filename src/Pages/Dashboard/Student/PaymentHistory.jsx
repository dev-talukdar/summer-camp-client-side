import { Helmet } from "react-helmet";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import useCart from "../../../hooks/useCart";


const PaymentHistory = () => {
    const [cart ] = useCart()
    return (
        <>
         <Helmet>
            <title>Payment History| Fashion Camp</title>
        </Helmet>
        
        <div className="w-full">
                <div className="uppercase flex justify-around mb-10">
                    <h3 className="text-xl text-purple-500">Total Enroll: {cart.length}</h3>
                    <h3 className="text-xl text-purple-500">Total price: ${ }</h3>
                    <Link to="/dashboard/payment"><button className="btn btn-warning btn-sm hover:-translate-y-1 duration-500 transition-all">PAY</button></Link>
                </div>


                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>CLASS IMAGE</th>
                                <th>CLASS NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                cart.map((classes, index) => <tr
                                    key={classes._id}
                                >
                                    <td> {index + 1} </td>
                                    <td>

                                        <div className="avatar">
                                            <div className="w-20 h-20">
                                                <img src={classes.course_picture_url} alt="" />
                                            </div>

                                        </div>
                                    </td>
                                    <td>{classes.course_name} </td>
                                    <td>$ {classes.price}</td>
                                    <td><button className="btn btn-ghost btn-lg hover:bg-yellow-600"><FaTrashAlt></FaTrashAlt></button></td>
                                </tr>)
                                // onClick={() => handleDelete(classes)} 
                            }



                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
};

export default PaymentHistory;