import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 px-6">
            {/* Container chính */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Thông tin đồ án */}
                <div>
                    <h3 className="text-2xl font-bold mb-4 text-yellow-400 leading-relaxed whitespace-nowrap">
                        Sản phẩm demo phục vụ đồ án kết thúc môn{" "}<br></br>
                        <span className="text-blue-300">Phát triển Ứng dụng Web Mã Nguồn Mở</span>
                    </h3>

                    <p className="text-sm text-gray-300 mb-4">
                        <span className="font-semibold text-yellow-500">
                            Tên đề tài:
                        </span>{" "}
                        Xây dựng Hệ thống quản lí mượn trả sách thư viện TVU
                    </p>
                    <h4 className="text-lg font-semibold text-green-400 mb-2">
                        Thành viên thực hiện:
                    </h4>
                    <ul className="space-y-3 text-sm leading-6">
                        <li className="flex items-center gap-3">
                            <span className="bg-blue-500 text-white px-3 py-1 rounded-full font-semibold">
                                1
                            </span>
                            <span>Nguyễn Anh Tuấn - 110121123 - DA21TTA</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="bg-green-500 text-white px-3 py-1 rounded-full font-semibold">
                                2
                            </span>
                            <span>Cao Duy Nhân - 110121070 - DA21TTA</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="bg-red-500 text-white px-3 py-1 rounded-full font-semibold">
                                3
                            </span>
                            <span>Nguyễn Minh Hải Đăng - 110121181 - DA21TTA</span>
                        </li>
                    </ul>
                </div>

                {/* Logo thư viện */}
                <div className="flex justify-end">
                    <img
                        src="/image/logolibrarytvu.png"
                        alt="Logo Thư Viện"
                        className="w-[220px] h-[220px] object-cover rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
                    />
                </div>
            </div>

            {/* Dòng chữ bản quyền */}
            <div className="text-center mt-8 text-xs text-gray-400 border-t border-gray-700 pt-4">
                Copyright &copy; 2024 Thư Viện Sách TVU. Được phát triển bởi 3 thành viên của DA21TTA.
            </div>
        </footer>
    );
};

export default Footer;
