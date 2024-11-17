/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Trash from "../../../components/icons/Trash";
import Star from "../../../components/icons/Star";
import Pen from "../../../components/icons/Pen";
import Arrow from "../../../components/icons/Arrow";
import toast from "react-hot-toast";
import UpdateForm from "../../../components/layout/UpdateContact";

function PageContact({ contactId, onClose }) {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [clicked, setClicked] = useState(false);

  async function DeleteContact() {
    try {
      const response = await fetch(
        `http://localhost:5000/api/contact/${contactId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setLoading(false);
        onClose();
        toast.success("Contact deleted sucessfully");
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function DisplayContact() {
    try {
      const response = await fetch(
        `http://localhost:5000/api/contact/${contactId}`
      );
      if (response.ok) {
        const data = await response.json();
        setDetails(data);
        setLoading(false);
      } else {
        console.error("Erreur lors de la récupération du contact.");
        setLoading(false);
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    DisplayContact();
  }, [contactId]);

  if (loading) {
    return <p>Chargement des données...</p>;
  }

  if (!details) {
    return <p>Aucun détail trouvé pour ce contact.</p>;
  }

  return (
    <div className="p-4 max-h-[800px] h-[800px] shadow-lg shadow-blue-700 rounded-lg">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl p-3 font-bold ">Informations sur le contact</h1>
        <button
          className="text-2xl -rotate-90 hover:text-blue-700 font-bold "
          onClick={onClose}
        >
          <Arrow />
        </button>
      </div>
      <div className="h-[200px] w-[400px] bg-blue-500/15 py-2 mb-2 flex items-center justify-center">
        <img
          src={`https://avatar.iran.liara.run/public/${details.id % 20}`}
          alt={`${details.firstname} ${details.lastname}`}
          className="h-[190px] w-[190px] object-cover rounded"
        />
      </div>
      <div className="bg-white h-[500px] p-2 rounded shadow-lg px-4">
        <div className="flex justify-around items-center gap-5 mb-4">
          <button
            className="button h-14 w-14 rounded-full border-2 border-blue-700  flex items-center justify-center hover:bg-blue-600 transition-all duration-300 ease-in-out"
            onClick={DeleteContact}
          >
            <Trash />
          </button>
          <button className="button h-14 w-14 rounded-full border-2 border-blue-700  flex items-center justify-center hover:bg-blue-600 transition-all duration-300 ease-in-out">
            <Star />
          </button>
          <button
            className="button h-14 w-14 rounded-full border-2 border-blue-700  flex items-center justify-center hover:bg-blue-600 transition-all duration-300 ease-in-out"
            onClick={() => {
              setClicked(!clicked);
            }}
          >
            <Pen />
          </button>
        </div>
        <div className="text-2xl font-bold text-center">
          {details.firstname} {details.lastname}
        </div>
        <p className="mt-2 input-disable">
          <span className="font-semibold">Phone Number:</span>&nbsp;
          {details.phoneNumber}
        </p>
        <p className="mt-2 input-disable">
          <span className="font-semibold">Email:</span>&nbsp; {details.email}
        </p>
        <p className="mt-2 input-disable">
          <span className="font-semibold">Type of Contact:</span>&nbsp;
          {details.typeOfContact}
        </p>
      </div>
      {clicked && (
        <div
          className=" modal inset-0 flex items-center font-semibold justify-center  w-full h-full bg-gray-700/20 opacity-80 z-10 "
          role="dialog"
          aria-modal="true"
          onClick={() => {
            setClicked(!clicked);
          }}
        >
          <UpdateForm
            CloseForm={() => setClicked(false)}
            contactId={contactId}
          />
        </div>
      )}
    </div>
  );
}

export default PageContact;
