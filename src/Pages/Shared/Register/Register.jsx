import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo/logo.png'
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate();

    const onSubmit = data => {

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = {name: data.name, email: data.email, photo: data.photoURL}

                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers:{
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset()
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Registration successfully done, Please log in now !',
                                        showConfirmButton: false,
                                        timer: 2000
                                    })
                                    navigate('/login')
                                }
                            })



                    })
                    .catch(error => console.log(error))
            })
    }




    return (
        <>
            <Helmet>
                <title>Register || Fashion Camp</title>
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

                        <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-md shadow-2xl p-5">
                            <h1 className="text-gray-800 font-bold text-2xl text-center mb-1">Log In!</h1>
                            <p className="text-sm font-normal text-gray-600 mb-8"> </p>

                            {errors.name && <span className='text-red-600'>Full name is required</span>}
                            <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                                <input id="name" className=" pl-2 w-full outline-none border-none" type="text" {...register("name", { required: true }, { required: true })} name="name" placeholder="Your Name" />
                            </div>

                            {errors.email && <span className='text-red-600'>Email is required</span>}
                            <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                                <input id="email" className=" pl-2 w-full outline-none border-none" type="email" {...register("email", { required: true })} name="email" placeholder="Email Address" />
                            </div>

                            {errors.password?.type === 'required' && <span className='text-red-600 text-center'>Password is required</span>}
                            {errors.password?.type === 'minLength' && <span className='text-red-600 text-center'>Password must be 6 characters</span>}
                            {errors.password?.type === 'maxLength' && <span className='text-red-600 text-center'>Password must be less than 20 characters</span>}
                            {errors.password?.type === 'pattern' && <span className='text-red-600 text-center'>Password must contain upper case <br /> number and special character</span>}
                            <div className="flex items-center border-2 py-2 px-3  mb-8 rounded-2xl ">
                                <input className="pl-2 w-full outline-none border-none" type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$&*])(?=.*[a-z])/

                                })} name="password" id="password" placeholder="Password" />
                            </div>

                            <div className="flex items-center border-2 py-2 px-3 rounded-2xl ">
                                <input className="pl-2 w-full outline-none border-none" type="password" {...register("confirmPassword", {
                                    required: true,
                                    validate: (value) => value === watch("password") || "Passwords do not match"
                                })} name="confirmPassword" id="password" placeholder="Confirm Password" />
                            </div>
                            {errors.confirmPassword && <span className='text-red-600'>Please enter same password</span>}

                            <div className="flex items-center border-2 mt-8 py-2 px-3 rounded-2xl">

                                <input id="photoUrl" className=" pl-2 w-full outline-none border-none" type="photoUrl" {...register("photoUrl", { required: true })} name="photoUrl" placeholder="photo Url" />
                            </div>
                            {errors.photoUrl && <span className='text-red-600'>Please enter a valid photo URL</span>}

                            <button type="submit" className="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2">Register</button>
                            <SocialLogin></SocialLogin>
                            <div className="flex justify-between mt-4">

                                <p><small> Have an existing account ? Please <Link to="/login"><span className="text-sm ml-2 text-violet-700 font-medium hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all" >Login</span></Link></small> </p>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Register;