import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";


const PopularClassCard = ({ pclass }) => {
    const { course_name, course_picture_url, total_enrollment, rating, instructor_name } = pclass
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={course_picture_url} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{course_name}</h2>
                <p>Enrolled Students: {total_enrollment}</p>
                <div className="flex items-center gap-2">
                    <Rating
                        style={{ maxWidth: 120 }}
                        value={3}
                        readOnly
                    />
                <p>{rating}</p>
                </div>
                <h3 className="font-bold">{instructor_name}</h3>
                <div className="card-actions">
                    <button className="btn btn-primary">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default PopularClassCard;