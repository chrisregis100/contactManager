import { useState } from "react";
import { useEffect } from "react";

function ContactForm() {
  const [contactType, setContactType] = useState([]);
  const [country, setCountry] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // recupérer les types de contacts de la  base de donnée
  useEffect(() => {
    async function fetchContactType() {
      const response = await fetch("http://localhost:5000/api/contactType");
      if (response.ok) {
        await response.json().then((data) => {
          console.log(data);
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
          console.log(sortedCountries);
          setCountry(sortedCountries);
        });
      }
    }
    fetchCountry();
  }, []);

  // enregistrer le contact

  return (
    <form
      action=""
      className=" bg-white  opacity-100 rounded-lg p-4 w-[500px] h-[550px] flex flex-col gap-4"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="form-div ">
        <label htmlFor="">Firstname</label>
        <input type="text" placeholder="Ex:John" className="input" />
      </div>
      <div className="form-div ">
        <label htmlFor="">Lastname</label>
        <input type="text" placeholder="Ex:John" className="input" />
      </div>
      <div className="form-div ">
        <label htmlFor="">Email</label>
        <input type="text" placeholder="Ex:John" className="input" />
      </div>
      <div className="form-div ">
        <label htmlFor="">Phone Number</label>
        <div className="flex items-center gap-2">
          <select name="" id="" className="input px-2">
            <option value="">Select Country</option>
            {country.map((country) => {
              return (
                <option key={country.name} value={country.dialCode}>
                  <span>{country.name}</span>{" "}
                  <span>
                    <img src={country.flag} alt="" />
                  </span>
                </option>
              );
            })}
          </select>
          <input type="text" placeholder="Ex:John" className="input" />
        </div>
      </div>
      <div className="form-div ">
        <select name="" id="" className="input px-4">
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

export default ContactForm;
