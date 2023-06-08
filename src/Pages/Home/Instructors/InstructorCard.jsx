import { Rating } from "@smastrom/react-rating";



const InstructorCard = ({ instructor }) => {
    const { instructor_photo_url, instructor_name, email, total_enrollment, rating } = instructor

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={instructor_photo_url} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{instructor_name }</h2>
                <p>email: {email }</p>
                <p>Enrolled Students: {total_enrollment }</p>
                <div className="flex items-center gap-2">
                    <Rating
                        style={{ maxWidth: 120 }}
                        value={ rating}
                        readOnly
                    />
                    <p>{ rating}</p>
                </div>
                <h3 className="font-bold">{ }</h3>
                <div className="card-actions">
                    <button className="btn btn-primary">See Classes</button>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;
