import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth"; 
import useInstructor from "../hooks/useInstructor";



const InstructorRoutes = ({ children }) => {
    const { user, loading } = useAuth()
    const [iInstructor, iInstructorLoading] = useInstructor()
    const location = useLocation()

    if (loading || iInstructorLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && iInstructor) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default InstructorRoutes;