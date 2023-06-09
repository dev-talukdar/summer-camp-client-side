 
import { Helmet } from "react-helmet";
import PoClass from "../../component/PoClass/PoClass";
import PopularClass from "../Home/PopularClass/PopularClass";

 

const Classes = () => {
    return (
        <div>  
            <Helmet>
                <title>Classes | Fashion Camp</title>
            </Helmet>
            <PoClass></PoClass>
            <PopularClass></PopularClass>
        </div>
    );
};

export default Classes;