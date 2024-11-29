import book1 from "../assets/Books/book1.png";
import book2 from "../assets/Books/book2.jpg";
import book3 from "../assets/Books/book3.png";
import book4 from "../assets/Books/book4.png";
import book5 from "../assets/Books/book5.png";
import Logo from "../assets/NavbarLogo/homelogo.png";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaStar, FaInstagram, FaLinkedin, FaTwitter, FaCaretDown } from "react-icons/fa";

const isLoggedIn = () => {
  if (localStorage.getItem("user")){
    return true;
  }
  return false;
}

const goLogout = () => {
    localStorage.removeItem('user'); // Clear user data
    window.location.reload();
}

// Navbar Component
const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  }
];

const DropdownBooks = [
  {
    name: "Linear Algebra",
    link: "/#",
  },
  {
    name: "Calculus",
    link: "/#",
  },
  {
    name: "Physics",
    link: "/#",
  },
];

const Navbar = ({ onLoginClick, onSignUpClick, onBookListClick, onMainMenuClick }) => {
  return (
    <div className="shadow-lg">
      <div className="container py-3 sm:py-3">
        <div className="flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2 px-5">
              <img src={Logo} alt="FTUI Books Logo" className="w-10" />
              FTUI Books 
            </a>
          </div>
          <div className="flex items-center justify-between gap-4">
            <ul className="items-center gap-4 hidden sm:flex">
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <a href={menu.link} className="inline-block py-4 px-4 hover:text-cyan-400 duration-200">
                    {menu.name}
                  </a>
                </li>
              ))}
              <li className="group relative cursor-pointer">
                <a href="/#" className="flex h-[72px] items-center gap[2px]">
                  Quick Links
                  <span>
                    <FaCaretDown className="transition duration-100 group-hover:rotate-180"/>
                  </span>
                </a>
                <div className="absolute left-9 z-[10] hidden group-hover:block text-black bg-white p-2 shadow-md">
                  <ul>
                    {DropdownBooks.map((data, index) => (
                      <li key={index}>
                        <a href={data.link} className="inline-block w-full rounded-md p-2 hover:bg-blue-300">
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li>
                <button onClick={onBookListClick} className="inline-block py-4 px-4 hover:text-cyan-400 duration-200">
                  Book List
                </button>
              </li>
              
            {/* Conditionally Display Login/Username/SignUp */}
            {isLoggedIn && localStorage.getItem('user') ? (
              <>
                <li>
                  <div className="inline-block py-4 px-4 hover:text-cyan-400 duration-200">
                    {JSON.parse(localStorage.getItem('user')).data.username}
                  </div>
                </li>
                <li>
                  <button onClick={goLogout}
                    className="inline-block py-4 px-4 hover:text-red-400 text-red-600 duration-200"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                {/* Show Login button when user is not logged in */}
                <li>
                  <button 
                    onClick={onLoginClick} 
                    className="inline-block py-4 px-4 hover:text-cyan-400 duration-200"
                  >
                    Login
                  </button>
                </li>
                
                {/* Show Sign Up button when user is not logged in */}
                <li>
                  <button 
                    onClick={onSignUpClick} 
                    className="inline-block py-4 px-4 hover:text-cyan-400 duration-200"
                  >
                    Sign Up
                  </button>
                </li>
              </>
            )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// SomeBooks Component
// const SomeBooksData = [
//   {
//     id: 1,
//     img: book1,
//     title: "Linear Algebra",
//     rating: 5.0,
//     author: "This Guy",
//   },
//   {
//     id: 2,
//     img: book2,
//     title: "Electricity Optics Physics",
//     rating: 5.0,
//     author: "This Guy",
//   },
//   {
//     id: 3,
//     img: book3,
//     title: "Calculus 1",
//     rating: 5.0,
//     author: "This Guy",
//   },
//   {
//     id: 4,
//     img: book4,
//     title: "Calculus 2",
//     rating: 4.9,
//     author: "This Guy",
//   },
//   {
//     id: 5,
//     img: book5,
//     title: "How To Program C",
//     rating: 4.9,
//     author: "This Guy",
//   },
//   {
//     id: 6,
//     img: book2,
//     title: "Electricity Optics Physics",
//     rating: 5.0,
//     author: "This Guy",
//   },
//   {
//     id: 7,
//     img: book5,
//     title: "How To Program C",
//     rating: 4.9,
//     author: "This Guy",
//   },
//   {
//     id: 8,
//     img: book4,
//     title: "Calculus 2",
//     rating: 4.9,
//     author: "This Guy",
//   },
//   {
//     id: 9,
//     img: book3,
//     title: "Calculus 1",
//     rating: 5.0,
//     author: "This Guy",
//   },
//   {
//     id: 10,
//     img: book1,
//     title: "Linear Algebra",
//     rating: 5.0,
//     author: "This Guy",
//   },
// ];

const SomeBooks = () => {
  const [someBooksData, setSomeBooksData] = useState([]); // Initialize state for book data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchBooksData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/item/'); // Ensure URL is correct
        setSomeBooksData(response.data.data); // Access the nested "data" field in the response
        setLoading(false); // Update loading state
      } catch (err) {
        console.error('Error fetching books:', err);
        setError(err.message); // Update error state
        setLoading(false);
      }
    };

    fetchBooksData();
  }, []); // Empty dependency array to fetch only once

  const handleButtonClick = async (bookId) => {
    // Check if user data exists in localStorage
    const userData = localStorage.getItem('user');
    if (!userData) {
      alert('You must be logged in to perform this action. Please log in first.');
      return; // Exit the function early
    }
  
    try {
      const userId = JSON.parse(userData).data._id;
      await axios.post(`http://localhost:3000/users/${userId}/list`, { "list": bookId });

      // Update localStorage directly with the new bookId
      const parsedUserData = JSON.parse(userData);
      parsedUserData.data.list = [...parsedUserData.data.list, bookId]; // Assuming 'books' is the key
      localStorage.setItem('user', JSON.stringify(parsedUserData));

      alert('Your data has been successfully updated!');
    } catch (err) {
      console.error('Error sending post request:', err);
      alert('Error sending request. Please try again.');
    }
  };

  if (loading) {
    return <p>Loading...</p>; // Render loading state
  }

  if (error) {
    return <p>Error: {error}</p>; // Render error state
  }

  return (
    <div className="py-10 object-center">
      <div className="container py-10">
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <h1 className="text-3xl font-bold">All Books</h1>
          <p className="text-xs text-gray-500">
            Our collection of books so far.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {someBooksData.map((data) => (
              <div key={data._id} className="space-y-3">
                <img
                  src={data.image}
                  alt={data.title}
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h2 className="font-semibold">{data.title}</h2>
                  <p className="text-sm text-gray-700">{data.author}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <span>{data.score}</span>
                  </div>
                  {/* New Button Below the Score */}
                  <button
                    onClick={() => handleButtonClick(data._id)}
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Add to List
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// MasterList Component
const MasterList = ({ onLoginClick, onSignUpClick, onBookListClick }) => {
  return (
    <div>
      <Navbar onLoginClick={onLoginClick} onSignUpClick={onSignUpClick} onBookListClick={onBookListClick}/>
      <SomeBooks />
    </div>
  );
};

export default MasterList;

