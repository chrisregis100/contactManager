import Bell from "./icons/Bell";
import Cog from "./icons/Cog";

function Header() {
  return (
    <div className="flex justify-between items-center h-24 py-4 px-8 bg-blue-50 text-lg">
      <h1 className="text-4xl text-blue-700 font-bold">Contact Book</h1>

      <div className="flex gap-4 items-center font-semibold ">
        <a
          href="contact"
          className="hover:text-blue-500 transition-all duration-300 ease-in-out hover:scale-110"
        >
          Contacts
        </a>
        <a
          href="contact"
          className="hover:text-blue-500 transition-all duration-300 ease-in-out hover:scale-110"
        >
          Favorites
        </a>
        <a
          href="contact"
          className="hover:text-blue-500 transition-all duration-300 ease-in-out hover:scale-110"
        >
          calendar
        </a>
      </div>
      <div className="flex gap-4 items-center">
        <button className="border h-14 w-14 border-blue-500 hover:bg-blue-700 hover:text-white  font-bold py-2 px-4 rounded-full">
          <Bell />
        </button>
        <button className=" border h-14 w-14 border-blue-500 hover:bg-blue-700 hover:text-white  font-bold py-2 px-4 rounded-full">
          <Cog />
        </button>
        <a href="">
          <img
            src="https://avatar.iran.liara.run/public/5"
            alt="Image-profil"
            className="w-14 h-14 rounded-full"
          />
        </a>
      </div>
    </div>
  );
}

export default Header;
