import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export default function BookList({ onLoginClick, onSignUpClick, onMainMenuClick }) {
  const [toggleMyList, setToggleMyList] = useState(false);
  
  const handleCommunityClick = () => {
    // Ganti nomor WhatsApp dengan nomor yang sesuai
    const whatsappUrl = "https://wa.me/+6282386009649";
    window.open(whatsappUrl, "_blank");
  };
  return (
    <>
      {/* Navigation */}
      <nav className="bg-[#000000] px-4 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-white">MyBookList</div>
          <div className="flex gap-4">
            <button className="text-white hover:text-white/80">
            </button>
            <button className="bg-gray-200 text-blue-900 px-4 py-2 rounded" onClick={onLoginClick}>Login</button>
            <button className="bg-purple-600 text-white px-4 py-2 rounded" onClick={onSignUpClick}>Sign Up</button>
          </div>
        </div>
      </nav>

      {/* Secondary Navigation */}
      <div className="bg-[#030712] border-t border-blue-400/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
          <div className="flex gap-6">
            {["Main Menu", "Community"].map((item) => (
              <button key={item} className="text-white hover:text-white/80"
              onClick={item === "Community" ? handleCommunityClick : onMainMenuClick}>
                {item}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <select className="bg-white text-black rounded px-2 py-1 text-sm">
              <option>All</option>
            </select>
            <div className="relative">
              <input
                type="search"
                placeholder="Search Book"
                className="w-[300px] px-3 py-1 rounded text-black"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="text-sm text-gray-400 mb-4">
          <span>Menu</span> {" > "} <span>My List Book</span> 
        </div>

        <h1 className="text-2xl font-bold mb-6">My Book List</h1>

        {/* Book List */}
        <div className="space-y-4">
          {[
            {
              rank: 1,
              title: "Harry Potter",
              image: "https://perpussmpn1pontianak.sch.id/uploaded_files/sampul_koleksi/original/Monograf/304.png",
              type: "Fiksi",
              date: "Juni 1997",
              members: "952,689 members",
              score: 9.32
            },
            {
              rank: 2,
              title: "Laut Bercerita",
              image: "https://inc.mizanstore.com/aassets/img/com_cart/produk/laut-bercerita-leila-s-chudori.jpg",
              type: "Fiksi",
              date: "2017",
              members: "63,963 members",
              score: 9.13
            }
          ].map((book) => (
            <div key={book.rank} className="flex gap-4 bg-zinc-800 p-4 rounded">
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
                <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
                    onClick={() => setToggleMyList(toggleMyList ? false : true)}>
                    <h1> {toggleMyList ? 'Added' : 'Add to My List'}</h1>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

