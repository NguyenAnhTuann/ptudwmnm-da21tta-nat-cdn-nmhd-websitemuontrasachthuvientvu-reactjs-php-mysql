import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="bg-white text-white py-4 px-6 flex justify-between items-center shadow-md border-2">
            <div>
                <img src="/image/logolibrarytvu.png" alt="Logo Thư Viện" className="w-[110px] h-[110px] object-contain" />
            </div>
            <div className="flex gap-4">
                <button
                    className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded"
                    onClick={() => navigate("/login")}
                >
                    Đăng nhập
                </button>
                <button
                    className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded"
                    onClick={() => navigate("/register")}
                >
                    Đăng ký
                </button>
            </div>
        </header>
    );
};

export default Header;
