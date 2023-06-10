 
import PoInstructor from "../../component/PoInstructor/PoInstructor";
import { Helmet } from "react-helmet";
import Instructors from "../Home/Instructors/Instructors";





const PopularInstructors = () => {
 

    return (
        <>
        <Helmet>
            <title>Instructors | Fashion Camp</title>
        </Helmet>
        
        <div>
            <PoInstructor></PoInstructor>
            <Instructors></Instructors>
             

        </div>
        </>
    );
};

export default PopularInstructors;