import { useContext } from "react"; 
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/"

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser)

                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true })
                    })


            })
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className="mt-5 flex justify-center gap-9 text-2xl">

                <button onClick={handleGoogleSignIn}><FcGoogle className="hover:text-orange-600"></FcGoogle></button> 
            </div>
        </div>
    );
};

export default SocialLogin;