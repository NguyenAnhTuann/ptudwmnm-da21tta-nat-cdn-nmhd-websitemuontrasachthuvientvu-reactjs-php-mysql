import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookList from "./components/BookList";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header luôn hiển thị trên cùng */}
        <Header />

        {/* Nội dung chính */}
        <main className="flex-1 bg-gray-100 p-6">
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>

        {/* Footer luôn ở dưới cùng */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
