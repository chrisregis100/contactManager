/* eslint-disable react/prop-types */
import Search from "../../components/icons/Search";
import Sort from "../../components/icons/Sort";
import Funnel from "../../components/icons/Funnel";
import Star from "../../components/icons/Star";
import { useState } from "react";
import ContactForm from "../../components/layout/ContactForm";
import { useEffect } from "react";

function ManageContacts({ onSelectContact }) {
  const [clicked, setClicked] = useState(false);
  const [search, setSearch] = useState("");
  const [contacts, setContacts] = useState([]);
  const [allContacts, setAllContacts] = useState([]);

  // recherche des contacts
  useEffect(() => {
    if (search.trim() !== "") {
      const filteredContacts = allContacts.filter((contact) =>
        [contact.firstname, contact.lastname, contact.phoneNumber]
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase())
      );
      setContacts(filteredContacts);
    } else {
      setContacts(allContacts);
    }
  }, [search, allContacts]);

  // actalisation de la page à l'ajout d'un contact
  useEffect(() => {
    fetchContacts();
  }, []);

  // fonction permettant la récupération des contactss
  async function fetchContacts() {
    const response = await fetch("http://localhost:5000/api/contact");
    if (response.ok) {
      await response.json().then((data) => {
        setContacts(data);
        setAllContacts(data);
      });
    }
  }

  function handleClick() {
    setClicked(!clicked);
    console.log(clicked);
  }

  function handleSelectContact(contactId) {
    console.log("cliqué");
    console.log(contactId);
    onSelectContact(contactId);
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
                onChange={(e) => setSearch(e.target.value)}
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
          {contacts.map((contact) => {
            return (
              <div
                key={contact._id}
                className="flex gap-10 justify-center items-center hover:bg-blue-600 focus:bg-blue-700 cursor-pointer hover:text-white p-4 rounded-full"
                onClick={() => handleSelectContact(contact._id)}
              >
                <img
                  src={`https://avatar.iran.liara.run/public/${
                    contact.id % 20
                  }`}
                  alt="Image-profil"
                  className="w-14 h-14 rounded-full"
                />
                <div className="flex flex-col gap-2 w-full ">
                  <h1 className="text-lg font-semibold">
                    {contact.firstname}&nbsp; &nbsp; {contact.lastname}
                  </h1>
                  <p className=" text-lg hover:text-white">
                    <span className="text-blue-500 text-lg hover:text-white">
                      Mobile:
                    </span>
                    {contact.phoneNumber}
                  </p>
                </div>
                <button className=" text-center rounded-full p-4 flex items-center border-2 border-blue-500 text-black text-lg w-14 h-14 focus:border-blue-700 focus:outline-none">
                  <Star />
                </button>
              </div>
            );
          })}
        </div>
        <button
          className=" absolute right-5 top-full text-3xl font-bold text-white bg-blue-700 h-20 w-20 rounded-full transition-all duration-200 hover:bg-white hover:text-blue-500"
          onClick={handleClick}
        >
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
          <ContactForm
            refreshList={fetchContacts}
            CloseForm={() => setClicked(false)}
          />
        </div>
      ) : (
        !clicked
      )}
    </>
  );
}

export default ManageContacts;
