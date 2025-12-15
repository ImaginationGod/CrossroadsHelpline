import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import {
    fetchUsers,
    addUser,
    updateUser,
    deleteUser,
} from "../features/users/usersSlice";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

const Dashboard = () => {
    const dispatch = useAppDispatch();
    const { list, loading, error } = useAppSelector(
        (state) => state.users
    );

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleSubmit = () => {
        if (!name || !email) return;

        if (editingId) {
            dispatch(updateUser({ id: editingId, name, email }));
            setEditingId(null);
        } else {
            dispatch(addUser({ id: Date.now(), name, email }));
        }

        setName("");
        setEmail("");
    };

    const handleEdit = (user) => {
        setEditingId(user.id);
        setName(user.name);
        setEmail(user.email);
    };

    if (loading) return <Loader />;
    if (error) return <ErrorMessage message={error} />;

    return (
        <div className="max-w-6xl mx-auto bg-white p-4 sm:p-6 rounded-xl shadow">
            <h1 className="text-xl sm:text-2xl font-bold mb-6">
                User Dashboard
            </h1>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <input
                    className="border border-gray-300 rounded-md px-3 py-1.5 text-sm w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    className="border border-gray-300 rounded-md px-3 py-1.5 text-sm w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <button
                    onClick={handleSubmit}
                    className="bg-blue-600 text-white px-4 py-1.5 text-sm rounded-md hover:bg-blue-700 transition w-full sm:w-auto"
                >
                    {editingId ? "Update User" : "Add User"}
                </button>
            </div>

            <div className="hidden md:block overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-left">
                            <th className="p-3 border">ID</th>
                            <th className="p-3 border">Name</th>
                            <th className="p-3 border">Email</th>
                            <th className="p-3 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-50">
                                <td className="p-3 border">{user.id}</td>
                                <td className="p-3 border">{user.name}</td>
                                <td className="p-3 border">{user.email}</td>
                                <td className="p-3 border space-x-2">
                                    <button
                                        onClick={() => handleEdit(user)}
                                        className="bg-yellow-400 px-3 py-1 rounded text-white hover:bg-yellow-500"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => dispatch(deleteUser(user.id))}
                                        className="bg-red-500 px-3 py-1 rounded text-white hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="md:hidden space-y-4">
                {list.map((user) => (
                    <div
                        key={user.id}
                        className="border rounded-lg p-4 shadow-sm"
                    >
                        <p className="text-sm text-gray-500 mb-1">
                            ID: {user.id}
                        </p>
                        <p className="font-semibold">{user.name}</p>
                        <p className="text-gray-600 text-sm mb-3">
                            {user.email}
                        </p>
                        <div className="flex gap-2">
                            <button
                                onClick={() => handleEdit(user)}
                                className="flex-1 bg-yellow-400 py-2 rounded text-white hover:bg-yellow-500"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => dispatch(deleteUser(user.id))}
                                className="flex-1 bg-red-500 py-2 rounded text-white hover:bg-red-600"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
