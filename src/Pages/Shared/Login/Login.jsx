import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import logo from '../../../assets/logo/logo.png'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {


    const [disabled, setDisabled] = useState(true)
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/"

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'Welcome to Fashion Camp',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                navigate(from, { replace: true })
            })
    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        }
        else {
            setDisabled(true)
        }
    }

    useEffect(() => {

        loadCaptchaEnginge(6)
    }, [])


    return (
        <>
            <Helmet>
                <title>Login || Fashion Camp</title>
            </Helmet>
            <div className="h-screen flex">
                <div className="hidden lg:flex w-full lg:w-1/2 login_img_section
          justify-around items-center">
                    <div
                        className="  bg-black  opacity-20 inset-0 z-0" >

                    </div>
                    <div className="w-full mx-auto px-20 flex-col items-center space-y-6">
                        <div className="flex justify-center lg:justify-start mt-6">
                            <img className='w-1/2' src={logo} alt="" />
                        </div>

                        <p className="  mt-1">Your New Destiny to Learn New Skills</p>
                    </div>
                </div>
                <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
                    <div className="w-full px-8 md:px-32 lg:px-24">
                        <form onSubmit={handleLogin} className="bg-white rounded-md shadow-2xl p-5">
                            <h1 className="text-gray-800 font-bold text-2xl text-center mb-1">Log In!</h1>
                            <p className="text-sm font-normal text-gray-600 mb-8"> </p>
                            <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">

                                <input id="email" className=" pl-2 w-full outline-none border-none" type="email" name="email" placeholder="Email Address" />
                            </div>
                            <div className="flex items-center border-2 py-2 px-3 rounded-2xl ">

                                <input className="pl-2 w-full outline-none border-none" type="password" name="password" id="password" placeholder="Password" />
                            </div>


                            <label className='mt-2 text-pink-400 ms-2' ><LoadCanvasTemplate /> </label>
                            <div className="flex items-center border-2 py-2 px-3 rounded-2xl ">

                                <input className="pl-2 w-full outline-none border-none" onBlur={handleValidateCaptcha} type="text" name="captcha" id="captcha" placeholder="captcha" />
                            </div>


                            <button disabled={disabled} type="submit" className="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2">Login</button>
                            <SocialLogin></SocialLogin>
                            <div className="flex justify-between mt-4">
                                <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">Forgot Password ?</span>

                                <p><small> New to Fashion Camp ? <Link to="/register"><span className="text-sm ml-2 text-violet-700 font-medium hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all" >Register</span></Link></small> </p>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;