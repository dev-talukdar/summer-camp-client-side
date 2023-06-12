import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const img_hosting_token=import.meta.env.VITE_Image_Upload_Token

const AddClass = () => {
    const [axiosSecure] = useAxiosSecure()
    const { user } = useAuth() 
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`



    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image && data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => { 
           if(imgResponse.success){
            const imgURL = imgResponse.data.display_url;
            const {available_seats, instructor_name,  email, course_name, price} = data;
            const newClass = {course_name, price: parseFloat(price), email, instructor_name, available_seats, course_picture_url:imgURL}
            console.log(newClass)

            axiosSecure.post('/classes', newClass)
            .then(data => {
                console.log('after posting new class item', data.data)
                if(data.data.insertedId){ 
                    reset()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class Added successfully',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            })
           }
        })       
    }; 

    return (

        <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto container">
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                <div className="text-center mb-10">
                    <h1 className="font-bold text-3xl text-gray-900">Add New Class</h1>
                    <p>Enter your class information </p>
                </div>
                <div>

                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-5">
                            <label className="text-xs font-semibold px-1">Class Name</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                <input type="text" {...register("course_name", { required: true, })} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Enter Class Name" />
                            </div>
                        </div>
                    </div>

                    <div className="flex -mx-3">
                        <div className="w-1/2 px-3 mb-5">
                            <label className="text-xs font-semibold px-1">Instructor name</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input type="text" {...register("instructor_name",  )} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 " value={user.displayName} readOnly />
                            </div>
                        </div>
                        <div className="w-1/2 px-3 mb-5">
                            <label className="text-xs font-semibold px-1">Instructor Email</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input type="text" {...register("email", )} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 " value={user.email} readOnly />
                            </div>
                        </div>
                    </div>

                    <div className="flex -mx-3">
                        <div className="w-1/2 px-3 mb-5">
                            <label className="text-xs font-semibold px-1">Available seats</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input type="text" {...register("available_seats", { required: true, })} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Enter Number" />
                            </div>
                        </div>
                        <div className="w-1/2 px-3 mb-5">
                            <label className="text-xs font-semibold px-1">Price</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input type="text" {...register("price", { required: true, maxLength: 4})} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Enter Price" />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center -mx-3">
                        <textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full " ></textarea>
                    </div>

                    <div className="flex justify-center -mx-3 mt-8" >
                        <input type="file" {...register("course_picture_url", { required: true, })} className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
                    </div>

                    <div className="flex -mx-3 mt-8">
                        <div className="w-full px-3 mb-5">
                            <button type="submit" className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">Add Class</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default AddClass;