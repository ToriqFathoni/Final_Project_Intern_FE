import React, { useState, useEffect } from 'react';
import axios from 'axios';

let userData = []; // This will hold the user's book data

const isLoggedIn = () => {
  return localStorage.getItem('user') ? true : false;
};

const goLogout = () => {
  localStorage.removeItem('user'); // Clear user data
  window.location.reload();
};

// Function to fetch userData
const fetchUserData = async () => {
  if (localStorage.getItem('user')) {
    const userAble = localStorage.getItem('user');
    const userId = JSON.parse(userAble).data._id;

    try {
      const response = await axios.get(`http://localhost:3000/users/${userId}/list`);
      return response.data.data; // Assume data structure is `{ data: [...] }`
    } catch (error) {
      console.error('Failed to fetch user data:', error);
      return [];
    }
  }
  return [];
};

export default function BookList({ onLoginClick, onSignUpClick, onMainMenuClick, onMasterListClick }) {
  const [bookList, setBookList] = useState([]);
  const [toggleMyList, setToggleMyList] = useState({}); // Track added/removed state for books

  useEffect(() => {
    // Fetch user data when component mounts
    const getData = async () => {
      const data = await fetchUserData();
      userData = data; // Update global userData (optional, for consistency)
      setBookList(data);
    };
    getData();
  }, []);

  const handleRemoveFromList = async (bookId) => {
    if (!localStorage.getItem('user')) return;

    const userAble = localStorage.getItem('user');
    const userId = JSON.parse(userAble).data._id;

    try {
      // Send DELETE request to remove book from user's list
      await axios.delete(`http://localhost:3000/users/${userId}/list/`, {"list": bookId});
      // Update local state to reflect the removed book
      setBookList((prevList) => prevList.filter((book) => book._id !== bookId));
      setToggleMyList((prevState) => ({ ...prevState, [bookId]: false }));
    } catch (error) {
      console.error('Failed to remove book from list:', error);
    }
  };

  return (
    <>
      {/* Navigation */}
      <nav className="bg-[#000000] px-4 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-white">MyBookList</div>
          <div className="flex gap-4">
            {isLoggedIn() ? (
              <>
                <div className="text-white px-4 py-2 rounded">
                  {JSON.parse(localStorage.getItem('user')).data.username}
                </div>
                <button
                  onClick={goLogout}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  className="bg-gray-200 text-blue-900 px-4 py-2 rounded hover:bg-gray-300"
                  onClick={onLoginClick}
                >
                  Login
                </button>
                <button
                  className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
                  onClick={onSignUpClick}
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Secondary Navigation */}
      <div className="bg-[#030712] border-t border-blue-400/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
          <div className="flex gap-6">
            {['Main Menu', 'Master List', 'Community'].map((item) => (
              <button
                key={item}
                className="text-white hover:text-white/80"
                onClick={
                  item === 'Community'
                    ? () => window.open('https://wa.me/+6282386009649', '_blank')
                    : item === 'Master List'
                    ? onMasterListClick
                    : onMainMenuClick
                }
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="text-sm text-gray-400 mb-4">
          <span>Menu</span> {' > '} <span>My List Book</span>
        </div>

        <h1 className="text-2xl font-bold mb-6">My Book List</h1>

        {/* Book List */}
        <div className="space-y-4">
          {bookList.map((book) => (
            <div key={book._id} className="flex gap-4 bg-zinc-800 p-4 rounded">
              <div className="text-3xl font-bold text-white -500 w-12">{book.rank}</div>
              <img
                src={book.image}
                alt={book.title}
                className="w-[70px] h-[100px] rounded"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white -400">{book.title}</h3>
                <div className="text-sm text-white -400">
                  <div>{book.type}</div>
                  <div>{book.date}</div>
                  <div>{book.members}</div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="text-xl font-bold text-yellow-400">★ {book.score}</div>
                <div className="text-white -400">N/A</div>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                  onClick={() => handleRemoveFromList(book._id)}
                >
                  Remove from My List
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
