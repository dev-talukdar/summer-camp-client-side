import { useEffect } from "react";
import { useState } from "react";
import PopularInstructorsCard from "./PopularInstructorsCard";
import PoInstructor from "../../component/PoInstructor/PoInstructor";





const PopularInstructors = () => {

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
            <PoInstructor></PoInstructor>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    instructors.map(instructor => <PopularInstructorsCard
                        key={instructor._id}
                        instructor={instructor}
                    ></PopularInstructorsCard>)
                }
            </div>

        </div>
    );
};

export default PopularInstructors;