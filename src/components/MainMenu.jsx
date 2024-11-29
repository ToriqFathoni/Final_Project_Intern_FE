import React from "react";
import book1 from "../assets/Books/book1.png";
import book2 from "../assets/Books/book2.jpg";
import book3 from "../assets/Books/book3.png";
import book4 from "../assets/Books/book4.png";
import book5 from "../assets/Books/book5.png";
import Logo from "../assets/NavbarLogo/homelogo.png";
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

// BestBooks Component
const BooksData = [
  {
    id: 1,
    img: book1,
    title: "Linear Algebra",
    description: "A really good book for learning elementary linear algebra by Howard Anton",
  },
  {
    id: 2,
    img: book2,
    title: "Electricity Optics Physics",
    description: "A really good book for learning electrical engineering physics for whatever semester",
  },
  {
    id: 3,
    img: book3,
    title: "Calculus 1",
    description: "A really good book for learning intermediate calculus in college.",
  },
];

const BestBooks = () => {
  return (
    <div className="py-10">
      <div className="container">
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-blue-950 to-blue-600">
            Trending Books
          </p>
          <h1 className="text-3xl font-bold">Best Books</h1>
          <p className="text-xs text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 place-items-center">
          {BooksData.map((book) => (
            <div key={book.id} className="rounded-2xl bg-blue-200 hover:bg-blue-400 hover:text-white relative shadow-xl duration-high group max-w-[300px]">
              <div className="h-[100px]">
                <img src={book.img} alt={book.title} 
                  className="max-w-[100px] block mx-auto transform -translate-y-14 group-hover:scale-105 duration-300 shadow-md"/>
              </div>
              <div className="p-4 text-center">
                <div className="w-full flex items-center justify-center">
                  <FaStar className="text-yellow-500"/>
                  <FaStar className="text-yellow-500"/>
                  <FaStar className="text-yellow-500"/>
                  <FaStar className="text-yellow-500"/>
                </div>
                <h1 className="text-xl font-bold">{book.title}</h1>
                <p className="text-gray-600 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {book.description}
                </p>
                <button className="bg-gradient-to-r from-blue-800 to-purple-400 text-white px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Footer Component
const FooterLinks = [
  {
    title: "Home",
    link: "#",
  },
  {
    title: "Books",
    link: "#",
  },
  {
    title: "Contact Us",
    link: "#",
  },
];

const Footer = () => {
  return (
    <div className="bg-blue-50 px-24">
      <div className="container">
        <div className="grid md:grid-cols-3 py-3">
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
              FTUI BOOKS
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur,
              adipsicing elit. Odioo cumque fuga distinctio quas!
            </p>
            <br />
            <p>social links</p>
            <div className="flex items-center gap-3 mt-6">
              <a href="#"><FaInstagram className="text-3xl"/></a>
              <a href="#"><FaLinkedin className="text-3xl"/></a>
              <a href="#"><FaTwitter className="text-3xl"/></a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold sm:text-left text-justify mb-3">
                  Other Links
                </h1>
                <ul>
                  {FooterLinks.map((data, index) => (
                    <li key={index} className="cursor-pointer hover:translate-x-1 duration-300 hover:text-blue-500 space-x-1 text-gray-500">
                      <span>&#10141;</span> 
                      <span>{data.title}</span> 
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Hero Component
const Hero = () => {
  return (
    <div className="min-h-[400px] sm:min-h-[400px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-20">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              WELCOME LIONS!🦁
              <p className="bg-clip-text text-transparent bg-gradient-to-b from-blue-300 text-right text-sm to-blue-300 py-2">
                TEAM LE MINERAL & OREO
              </p>
            </h1>
            <p className="text-sm">
              Here, you can explore all of the course books that you need for now, past, and future subjects.
              Future archives for past exams and quizzes coming soon!
            </p>
            <div>
              <button className="bg-gradient-to-r from-blue-800 to-purple-400 text-white px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200">
                Explore Books
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Navbar Component
const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Profile",
    link: "/#services",
  },
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

const Navbar = ({ onLoginClick, onSignUpClick, onBookListClick }) => {
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
const SomeBooksData = [
  {
    id: 1,
    img: book1,
    title: "Linear Algebra",
    rating: 5.0,
    author: "This Guy",
  },
  {
    id: 2,
    img: book2,
    title: "Electricity Optics Physics",
    rating: 5.0,
    author: "This Guy",
  },
  {
    id: 3,
    img: book3,
    title: "Calculus 1",
    rating: 5.0,
    author: "This Guy",
  },
  {
    id: 4,
    img: book4,
    title: "Calculus 2",
    rating: 4.9,
    author: "This Guy",
  },
  {
    id: 5,
    img: book5,
    title: "How To Program C",
    rating: 4.9,
    author: "This Guy",
  },
  {
    id: 6,
    img: book2,
    title: "Electricity Optics Physics",
    rating: 5.0,
    author: "This Guy",
  },
  {
    id: 7,
    img: book5,
    title: "How To Program C",
    rating: 4.9,
    author: "This Guy",
  },
  {
    id: 8,
    img: book4,
    title: "Calculus 2",
    rating: 4.9,
    author: "This Guy",
  },
  {
    id: 9,
    img: book3,
    title: "Calculus 1",
    rating: 5.0,
    author: "This Guy",
  },
  {
    id: 10,
    img: book1,
    title: "Linear Algebra",
    rating: 5.0,
    author: "This Guy",
  },
];

const SomeBooks = ( {onMasterListClick} ) => {
  return (
    <div className="py-10 object-center">
      <div className="container py-10">
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-blue-950 to-blue-600">
            Best Books
          </p>
          <h1 className="text-3xl font-bold">Top Books</h1>
          <p className="text-xs text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {SomeBooksData.map((data) => (
              <div key={data.id} className="space-y-3">
                <img src={data.img} alt={data.title} className="h-[220px] w-[150px] object-cover rounded-md"/>
                <div>
                  <h2 className="font-semibold">{data.title}</h2>
                  <p className="text-sm text-gray-700">{data.author}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-500"/>
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button onClick={onMasterListClick} className="text-center mt-10 cursor-pointer bg-gradient-to-r from-blue-800 to-purple-400 hover:scale-105 duration-200 text-white py-1 px-5 rounded-full">
              View All Books
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// MainMenu Component
const MainMenu = ({ onLoginClick, onSignUpClick, onBookListClick }) => {
  return (
    <div>
      <Navbar onLoginClick={onLoginClick} onSignUpClick={onSignUpClick} onBookListClick={onBookListClick}/>
      <Hero />
      <BestBooks />
      <SomeBooks />
      <Footer />
    </div>
  );
};

export default MainMenu;