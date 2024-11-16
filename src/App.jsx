import { useState } from "react";
import Header from "./components/Header";
import PageContact from "./Pages/ManageContact/[id]/page";
import ManageContacts from "./Pages/ManageContact/ManageContacts";

function App() {
  const [selectedContact, setSelectedContact] = useState(null);

  function handleSelectContact(contactId) {
    setSelectedContact(contactId);
  }
  return (
    <div className="">
      <Header />
      <div className="flex  justify-center gap-8 p-4">
        <div className="column w-[800px]">
          <ManageContacts onSelectContact={handleSelectContact} />
        </div>
        {selectedContact && (
          <div>
            <PageContact
              contactId={selectedContact}
              onClose={() => setSelectedContact(null)}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
