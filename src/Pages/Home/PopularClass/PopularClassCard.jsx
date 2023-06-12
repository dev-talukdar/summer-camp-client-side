import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useContext } from "react";
import { FaUsers } from 'react-icons/fa';
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";


const PopularClassCard = ({ pclass }) => {
    const { course_name, course_picture_url, total_enrollment, rating, instructor_name, available_seats, price, _id } = pclass;
    const { user } = useContext(AuthContext)
    const [, refetch] = useCart()
    const navigate = useNavigate()
    const location = useLocation() 

    const isAdmin = user?.role === 'admin';

    const handleEnrollNow = pclass => {
        console.log(pclass);
        if (user && user.email) {
            const classAddedToCart = { classId: _id, course_name, course_picture_url, total_enrollment, rating, instructor_name, available_seats, price, email: user.email }
            fetch('https://summer-camp-server-side-navy.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(classAddedToCart)
            })

                .then(res => res.json()) 
                .then(data => {
                    if (data.insertedId) {
                        refetch() // refecth cart update the number of cart
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class added in your Cart',
                            showConfirmButton: false,
                            timer: 2000
                         })
                    }
                })
        }
        else {
            Swal.fire({
                title: "Please login to continue shopping",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Please Log In"
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        navigate("/login", { state: { from: location } })
                    }
                })
        }

    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={course_picture_url} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{course_name}</h2>
                <h3 className=" ">Instructor: {instructor_name}</h3>

                <div className="flex gap-6">
                    <p>Available Seats: {available_seats} </p>
                    <div className="flex items-center gap-4 font-bold">
                        <p> <FaUsers></FaUsers> </p>
                        <p>{total_enrollment} </p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="font-semibold">
                        Price: ${price}
                    </div>
                    <Rating
                        style={{ maxWidth: 120 }}
                        value={rating}
                        readOnly
                    />
                    <p>{rating}</p>
                </div>

                <div className="card-actions">
                    <button onClick={() => handleEnrollNow(pclass)} className="btn btn-wide btn-primary" disabled={isAdmin} >Select</button>
                </div>
            </div>
        </div>
    );
};

export default PopularClassCard;