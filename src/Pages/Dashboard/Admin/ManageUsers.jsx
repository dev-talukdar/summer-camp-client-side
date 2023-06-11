import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";

 

const ManageUsers = () => {
    const {data: users = [], refetch} = useQuery(['users'], async() => {
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    })
    return (
        <>
        <Helmet>
            <title>Manage Users | Fashion Camp</title>
        </Helmet>
        <div>
            <h2 className="text-3xl font-semibold">Total Users: {users.length}</h2>
        </div>
        </>
    );
};

export default ManageUsers;