import { Outlet } from "react-router-dom";

 

const Main = () => {
    return (
        <div className="text-center">
            <h2>hello its nav</h2>
            <Outlet></Outlet>
            <h2>Hello Its footer</h2>
        </div>
    );
};

export default Main;