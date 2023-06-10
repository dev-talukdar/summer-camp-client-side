
import { Helmet } from "react-helmet";
import PoClass from "../../component/PoClass/PoClass";
import PopularClass from "../Home/PopularClass/PopularClass";



const Classes = () => {
    return (
        <>
            <Helmet>
                <title>Classes | Fashion Camp</title>
            </Helmet>
            <div>

                <PoClass></PoClass>
                <PopularClass></PopularClass>
            </div>
        </>

    );
};

export default Classes;