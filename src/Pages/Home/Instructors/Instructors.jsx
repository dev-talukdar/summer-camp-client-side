import { useEffect } from "react";
import { useState } from "react";
import InstructorCard from "./InstructorCard";
import { Helmet } from "react-helmet";



const Instructors = () => {

    const [instructors, setInstructors] = useState([])

    useEffect(() => {
        fetch('popularClass.json')
            .then(res => res.json())
            .then(data => {
                setInstructors(data);
            });
    }, []);

    return (
        <div>
            <Helmet>
                <title>Instructors | Fashion Camp</title>
            </Helmet>
            <div className="mt-16 mb-6">

                <div className="divider"><p className="font-bold text-3xl">Popular Instructors</p> </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        instructors.map(instructor => <InstructorCard
                            key={instructor._id}
                            instructor={instructor}
                        ></InstructorCard>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Instructors;