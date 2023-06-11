import { Helmet } from "react-helmet";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";



const MySelectedClass = () => {
    const [cart, refecth] = useCart()
    // console.log(cart);
    const total = cart.reduce((sum, classes) => classes.price + sum, 0)

    const handleDelete = classes => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${classes._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refecth();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <>
            <Helmet>
                <title>Selected Class | Fashion Camp</title>
            </Helmet>
            <div className="w-full">
                <div className="uppercase flex justify-around mb-10">
                    <h3 className="text-xl text-purple-500">Total Enroll: {cart.length}</h3>
                    <h3 className="text-xl text-purple-500">Total price: ${total}</h3>
                    <button className="btn btn-warning btn-sm hover:-translate-y-1 duration-500 transition-all">PAY</button>
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
                                    <td><button onClick={() => handleDelete(classes)} className="btn btn-ghost btn-lg hover:bg-yellow-600"><FaTrashAlt></FaTrashAlt></button></td>
                                </tr>)
                            }



                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
};

export default MySelectedClass;