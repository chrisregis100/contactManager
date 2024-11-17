/* eslint-disable react/prop-types */
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";

function UpdateForm({ CloseForm, contactId }) {
  const [contactType, setContactType] = useState([]);
  const [country, setCountry] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [typeOfContact, setTypeOfContact] = useState("");
  const [prefix, setPrefix] = useState("");

  // recupérer les types de contacts de la  base de donnée
  useEffect(() => {
    async function fetchContactType() {
      const response = await fetch("http://localhost:5000/api/contactType");
      if (response.ok) {
        await response.json().then((data) => {
          setContactType(data);
        });
      }
    }
    fetchContactType();
  }, []);

  // recupérer les indicatifs des pays
  useEffect(() => {
    async function fetchCountry() {
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (response.ok) {
        await response.json().then((data) => {
          const countries = data.map((country) => ({
            name: country.name.common,
            flag: country.flags.png,
            dialCode: `${country.idd.root || ""}${
              country.idd.suffixes ? country.idd.suffixes[0] : ""
            }`,
          }));

          const sortedCountries = countries.sort((a, b) =>
            a.name.localeCompare(b.name)
          );
          setCountry(sortedCountries);
        });
      }
    }
    fetchCountry();
  }, []);

  //recupérer les infos sur le contact à modifier
  useEffect(() => {
    async function fetchContactDetails() {
      const response = await fetch(
        `http://localhost:5000/api/contact/${contactId}`
      );
      if (response.ok) {
        const data = await response.json();
        setFirstname(data.firstname);
        setLastname(data.lastname);
        setPhoneNumber(data.phoneNumber);
        setEmail(data.email);
        setTypeOfContact(data.typeOfContact);
      }
    }
    fetchContactDetails();
  }, [contactId]);

  //Mettre à jour le contact
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:5000/api/contact/${contactId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname,
            lastname,
            phoneNumber: prefix.slice(0) + phoneNumber,
            email,
            typeOfContact,
          }),
        }
      );
      if (response.ok) {
        toast.success("Contact mis à jour avec succès");
        CloseForm();
      } else {
        throw new Error("erreur lors de la sauvegarde");
      }
    } catch (error) {
      console.error("Erreur lors de l'enregistrement", error);
      toast.error("Erreur lors de l'enregistrement");
    }
  };

  return (
    <form
      action=""
      className=" bg-white  opacity-100 rounded-lg p-4 w-[500px] h-[550px] flex flex-col gap-4"
      onClick={(e) => {
        e.stopPropagation();
      }}
      onSubmit={handleUpdate}
    >
      <div className="form-div ">
        <label htmlFor="">Firstname</label>
        <input
          type="text"
          placeholder="Ex:John"
          className="input"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
      </div>
      <div className="form-div ">
        <label htmlFor="">Lastname</label>
        <input
          type="text"
          placeholder="Ex:Doe"
          className="input"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </div>
      <div className="form-div ">
        <label htmlFor="">Email</label>
        <input
          type="text"
          placeholder="Ex:john@gmail.com"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-div ">
        <label htmlFor="">Phone Number</label>
        <div className="flex items-center gap-2">
          <select
            name=""
            id=""
            className="input px-2"
            onChange={(e) => setPrefix(e.target.value)}
          >
            <option value="">Select Country</option>
            {country.map((country) => {
              return (
                <option key={country.name} value={country.dialCode}>
                  <span>
                    {country.name}&nbsp;{country.dialCode}{" "}
                  </span>{" "}
                  <span>
                    <img src={country.flag} alt="" />
                  </span>
                </option>
              );
            })}
          </select>
          <input
            type="text"
            placeholder="Ex:76543210"
            className="input"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
      </div>
      <div className="form-div ">
        <select
          name=""
          id=""
          className="input px-4"
          onChange={(e) => setTypeOfContact(e.target.value)}
        >
          <option value="">Select Type of Contact</option>
          {contactType.map((contactType) => {
            return (
              <option key={contactType.id} value={contactType.id}>
                {contactType.contactType}
              </option>
            );
          })}
        </select>
      </div>
      <button className="w-full bg-blue-700 text-lg py-2 text-white hover:bg-blue-600 rounded-xl transition-all duration-500">
        Enregistrer
      </button>
    </form>
  );
}

export default UpdateForm;
