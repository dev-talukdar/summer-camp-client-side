import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";



const ManageUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    })

    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${user.name} is an Admin Now !`,
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            })
    }


    const handleMakeInstructor = user => {
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${user.name} is an instructor Now !`,
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            })
    }
    return (
        <>
            <Helmet>
                <title>Manage Users | Fashion Camp</title>
            </Helmet>
            <div>
                <h2 className="text-3xl font-semibold">Total Users: {users.length}</h2>
                <div>
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th> 
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>TYPE</th>
                                <th>ACTION</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                users.map((user, index) => <tr
                                    key={user._id}
                                >
                                    <td> {index + 1} </td> 
                                    <td>{user.name} </td>
                                    <td>{user.email} </td>
                                    <td>{user.role}</td>
                                    <td>
                                        {user.role === 'admin' ? 'admin' :
                                            <button onClick={() => handleMakeAdmin(user)} className="btn btn-primary btn-xs hover:bg-violet-600 border-none"> MAKE ADMIN
                                            </button>
                                        }
                                    </td>

                                    <td>{user.role === 'instructor' ? 'instructor' :
                                        <button onClick={() => handleMakeInstructor(user)} className="btn btn-primary btn-xs hover:bg-violet-600 border-none">MAKE INSTRUCTOR</button>}
                                    </td>
                                </tr>)
                            }
                            {/*   */}
                            {/*   */}



                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ManageUsers;