import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaUsers } from 'react-icons/fa';


const PopularClassCard = ({ pclass }) => {
    const { course_name, course_picture_url, total_enrollment, rating, instructor_name, available_seats } = pclass
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
                    <Rating
                        style={{ maxWidth: 120 }}
                        value={rating}
                        readOnly
                    />
                    <p>{rating}</p>
                </div>

                <div className="card-actions">
                    <button className="btn btn-primary">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default PopularClassCard;