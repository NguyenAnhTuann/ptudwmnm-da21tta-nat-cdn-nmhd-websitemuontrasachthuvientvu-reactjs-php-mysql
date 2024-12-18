import React, { useState } from "react";

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Đăng nhập thành công!");
    };

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1 flex justify-center items-center bg-gray-100">
                <form onSubmit={handleSubmit} className="bg-white p-8 shadow-md rounded-md w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Đăng Nhập</h2>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 mb-4 border rounded"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Mật khẩu"
                        className="w-full px-4 py-2 mb-6 border rounded"
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 rounded">
                        Đăng Nhập
                    </button>
                </form>
            </main>
        </div>
    );
};

export default Login;
