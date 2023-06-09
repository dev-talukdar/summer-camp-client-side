 
 
import { Link } from 'react-router-dom'; 

const ErrorPage = () => { 
    return (
         
        <div className="flex items-center justify-center ">
            <div className="text-center row">
                <div className=" ">
                    <img src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg" alt=""
                        className="fluid"/>
                </div>
                <div className="mt-5">
                    <p className="text-3xl"> <span className="text-red-500">Opps!</span> Page not found.</p>
                    <p className="lead">
                        The page you’re looking for doesn’t exist.
                    </p>
                     <button  className='btn btn-primary mt-6 text-white '><Link className='text-white' to="/"  >
						Back to Home
					</Link></button>
                </div>

            </div>
        </div> 
         
    );
};

export default ErrorPage;