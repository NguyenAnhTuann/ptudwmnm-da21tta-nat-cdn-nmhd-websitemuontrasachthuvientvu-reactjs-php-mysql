import React, { useState } from "react";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        date: "",
        class: "",
        major: "",
        faculty: "",
        school: "",
        phone: "",
        email: "",
        address: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Đăng ký thành công!");
    };

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1 flex justify-center items-center bg-gray-100">
                <form onSubmit={handleSubmit} className="bg-white p-8 shadow-md rounded-md w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center text-green-600">Đăng Ký</h2>
                    <input name="name" placeholder="Tên" className="w-full px-4 py-2 mb-4 border rounded" onChange={handleChange} required />
                    <input name="date" type="date" className="w-full px-4 py-2 mb-4 border rounded" onChange={handleChange} required />
                    <input name="class" placeholder="Lớp" className="w-full px-4 py-2 mb-4 border rounded" onChange={handleChange} required />
                    <input name="major" placeholder="Ngành" className="w-full px-4 py-2 mb-4 border rounded" onChange={handleChange} required />
                    <input name="faculty" placeholder="Khoa" className="w-full px-4 py-2 mb-4 border rounded" onChange={handleChange} required />
                    <input name="school" placeholder="Trường" className="w-full px-4 py-2 mb-4 border rounded" onChange={handleChange} required />
                    <input name="phone" placeholder="Số điện thoại" className="w-full px-4 py-2 mb-4 border rounded" onChange={handleChange} required />
                    <input name="email" type="email" placeholder="Email" className="w-full px-4 py-2 mb-4 border rounded" onChange={handleChange} required />
                    <input name="address" placeholder="Địa chỉ" className="w-full px-4 py-2 mb-4 border rounded" onChange={handleChange} required />
                    <input name="password" type="password" placeholder="Mật khẩu" className="w-full px-4 py-2 mb-6 border rounded" onChange={handleChange} required />
                    <button type="submit" className="w-full bg-green-500 hover:bg-green-700 text-white py-2 rounded">
                        Đăng Ký
                    </button>
                </form>
            </main>
        </div>
    );
};

export default Register;
