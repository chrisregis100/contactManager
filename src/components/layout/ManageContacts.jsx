import Search from "../icons/Search";
import Sort from "../icons/Sort";
import Funnel from "../icons/Funnel";
import Star from "../icons/Star";
import { useState } from "react";
import ContactForm from "./ContactForm";

function ManageContacts() {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
    console.log(clicked);
  }

  return (
    <>
      <div className="relative">
        <header>
          <h1 className="font-semibold text-2xl mx-4">
            Displayed Contacts - 117
          </h1>
          <div className="flex items-center justify-center mt-4 gap-4 px-4">
            <div className="flex items-center justify-between border rounded-full border-blue-700 w-[310px]">
              <input
                type="text"
                placeholder="Search contact..."
                className=" rounded-s-full border-none px-2 text-lg h-[50px] w-[250px] focus:border-blue-700 focus:outline-none"
              />
              <button className=" text-center rounded-e-full p-2 bg-blue-500 text-white text-lg w-14 h-14 focus:border-blue-700 focus:outline-none">
                <Search />
              </button>
            </div>
            <button className=" text-center rounded-full p-4 border-2 flex items-center justify-center border-blue-500 text-white text-lg w-14 h-14 focus:border-blue-700 focus:outline-none">
              <Sort />
            </button>
            <button className=" text-center rounded-full p-2 border-2 flex items-center justify-center border-blue-500 text-black text-lg w-14 h-14 focus:border-blue-700 focus:outline-none">
              <Funnel />
            </button>
            <button className=" text-center rounded-full  flex  justify-center border-2 border-blue-500 text-black font-bold text-2xl w-14 h-14 focus:border-blue-700 focus:outline-none">
              <p className="text-4xl">...</p>
            </button>
            <button
              className=" text-center rounded-full p-2 px-4 flex items-center gap-2 justify-center border-2 border-blue-500 text-black font-bold text-2xl focus:border-blue-700 focus:outline-none"
              onClick={handleClick}
            >
              <p>+</p>
              <p className="text-sm">New Contact</p>
            </button>
          </div>
        </header>
        <div className="flex flex-col gap-3 p-4">
          <div className="flex gap-10 justify-center items-center hover:bg-blue-700 focus:bg-blue-700 cursor-pointer hover:text-white p-4 rounded-full">
            <img
              src="https://avatar.iran.liara.run/public/5"
              alt="Image-profil"
              className="w-14 h-14 rounded-full"
            />
            <div className="flex flex-col gap-2 w-full ">
              <h1 className="text-lg font-semibold">Mohammad Reza</h1>
              <p className="text-sm">
                <span className="text-blue-500">Mobile:</span> +9876543210
              </p>
            </div>
            <button className=" text-center rounded-full p-4 flex items-center border-2 border-blue-500 text-black text-lg w-14 h-14 focus:border-blue-700 focus:outline-none">
              <Star />
            </button>
          </div>
          <div className="flex gap-2 justify-around items-center hover:bg-blue-700 focus:bg-blue-700 cursor-pointer hover:text-white p-4 rounded-full">
            <img
              src="https://avatar.iran.liara.run/public/7"
              alt="Image-profil"
              className="w-14 h-14 rounded-full"
            />
            <div className="flex flex-col gap-2 w-full ">
              <h1 className="text-lg font-semibold">Mohammad Reza</h1>
              <p className="text-sm">
                <span className="text-blue-500">Mobile:</span> +9876543210
              </p>
            </div>
            <button className=" text-center rounded-full p-4 flex items-center border-2 border-blue-500 text-black text-lg w-14 h-14 focus:border-blue-700 focus:outline-none">
              <Star />
            </button>
          </div>
          <div className="flex gap-2 justify-between items-center hover:bg-blue-700 focus:bg-blue-700 cursor-pointer hover:text-white p-4 rounded-full">
            <img
              src="https://avatar.iran.liara.run/public/"
              alt="Image-profil"
              className="w-14 h-14 rounded-full"
            />
            <div className="flex flex-col gap-2 w-full ">
              <h1 className="text-lg font-semibold">Mohammad Reza</h1>
              <p className="text-sm">
                <span className="text-blue-500">Mobile:</span> +9876543210
              </p>
            </div>
            <button className=" text-center rounded-full p-4 flex items-center border-2 border-blue-500 text-black text-lg w-14 h-14 focus:border-blue-700 focus:outline-none">
              <Star />
            </button>
          </div>
          <div className="flex gap-2 justify-between items-center hover:bg-blue-700 focus:bg-blue-700 cursor-pointer hover:text-white p-4 rounded-full">
            <img
              src="https://avatar.iran.liara.run/public/5"
              alt="Image-profil"
              className="w-14 h-14 rounded-full"
            />
            <div className="flex flex-col gap-2 w-full ">
              <h1 className="text-lg font-semibold">Mohammad Reza</h1>
              <p className="text-sm">
                <span className="text-blue-500">Mobile:</span> +9876543210
              </p>
            </div>
            <button className=" text-center rounded-full p-4 flex items-center border-2 border-blue-500 text-black text-lg w-14 h-14 focus:border-blue-700 focus:outline-none">
              <Star />
            </button>
          </div>
          <div className="flex gap-2 justify-between items-center hover:bg-blue-700 focus:bg-blue-700 cursor-pointer hover:text-white p-4 rounded-full">
            <img
              src="https://avatar.iran.liara.run/public/8"
              alt="Image-profil"
              className="w-14 h-14 rounded-full"
            />
            <div className="flex flex-col gap-2 w-full ">
              <h1 className="text-lg font-semibold">Mohammad Reza</h1>
              <p className="text-sm">
                <span className="text-blue-500">Mobile:</span> +9876543210
              </p>
            </div>
            <button className=" text-center rounded-full p-4 flex items-center border-2 border-blue-500 text-black text-lg w-14 h-14 focus:border-blue-700 focus:outline-none">
              <Star />
            </button>
          </div>
          <div className="flex gap-2 justify-between items-center hover:bg-blue-700 focus:bg-blue-700 cursor-pointer hover:text-white p-4 rounded-full">
            <img
              src="https://avatar.iran.liara.run/public/2"
              alt="Image-profil"
              className="w-14 h-14 rounded-full"
            />
            <div className="flex flex-col gap-2 w-full ">
              <h1 className="text-lg font-semibold">Mohammad Reza</h1>
              <p className="text-sm">
                <span className="text-blue-500">Mobile:</span> +9876543210
              </p>
            </div>
            <button className=" text-center rounded-full p-4 flex items-center border-2 border-blue-500 text-black text-lg w-14 h-14 focus:border-blue-700 focus:outline-none">
              <Star />
            </button>
          </div>
          <div className="flex gap-2 justify-between items-center hover:bg-blue-700 focus:bg-blue-700 cursor-pointer hover:text-white p-4 rounded-full">
            <img
              src="https://avatar.iran.liara.run/public/6"
              alt="Image-profil"
              className="w-14 h-14 rounded-full"
            />
            <div className="flex flex-col gap-2 w-full ">
              <h1 className="text-lg font-semibold">Mohammad Reza</h1>
              <p className="text-sm">
                <span className="text-blue-500">Mobile:</span> +9876543210
              </p>
            </div>
            <button className=" text-center rounded-full p-4 flex items-center border-2 border-blue-500 text-black text-lg w-14 h-14 focus:border-blue-700 focus:outline-none">
              <Star />
            </button>
          </div>
        </div>
        <button className=" absolute right-5 top-full text-3xl font-bold text-white bg-blue-700 h-20 w-20 rounded-full transition-all duration-200 hover:bg-white hover:text-blue-500">
          +
        </button>
      </div>
      {clicked ? (
        <div
          className=" modal inset-0 flex items-center font-semibold justify-center  w-full h-full bg-gray-700/20 opacity-80 z-10 "
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          onClick={() => {
            setClicked(!clicked);
          }}
        >
          <ContactForm />
        </div>
      ) : (
        !clicked
      )}
    </>
  );
}

export default ManageContacts;
