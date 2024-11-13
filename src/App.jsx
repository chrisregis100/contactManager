import Header from "./components/Header";
import ManageContacts from "./components/layout/ManageContacts";

function App() {
  return (
    <div className="">
      <Header />
      <div className="flex items-center justify-center gap-8 p-4">
        <div className="column w-[800px] ">
          <ManageContacts />
        </div>
      </div>
    </div>
  );
}

export default App;
