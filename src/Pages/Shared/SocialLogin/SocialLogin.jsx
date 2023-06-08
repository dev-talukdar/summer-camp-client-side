import { useContext } from "react";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

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
                fetch('https://bistro-boss-server-side-omega.vercel.app/users', {
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

                <button onClick={handleGoogleSignIn}><FaGoogle className="hover:text-orange-600"></FaGoogle></button>
                <button><FaFacebook className="hover:text-sky-600"></FaFacebook></button>
                <button><FaTwitter className="hover:text-blue-600"></FaTwitter></button>
            </div>
        </div>
    );
};

export default SocialLogin;