import React from "react";

const BookList = () => {
  const books = [
    { id: 1, title: "Sách 1", author: "Tác giả 1" },
    { id: 2, title: "Sách 2", author: "Tác giả 2" },
    { id: 3, title: "Sách 3", author: "Tác giả 3" },
  ];

  return (
    <div className="p-4 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold text-center mb-4">Danh Sách Sách</h2>
      <ul className="space-y-4">
        {books.map((book) => (
          <li key={book.id} className="p-4 border rounded shadow-sm">
            <div className="text-lg">
              <span className="font-semibold">{book.title}</span> - {book.author}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
