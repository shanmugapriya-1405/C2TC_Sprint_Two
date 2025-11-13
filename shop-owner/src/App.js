import React, { useState } from "react";
import "./App.css";
import ShopOwnerForm from "./components/ShopOwnerForm";
import ShopOwnerList from "./components/ShopOwnerList";

function App() {
  const [owners, setOwners] = useState([
    {
      id: 1,
      shopName: "Namee Showroom",
      ownerName: "Nameetha",
      email: "namee@gmail.com",
      phone: "9876543210",
      gstNumber: "GSTIN12345TN",
      address: "Pollachi, TN",
    },
    {
      id: 2,
      shopName: "Shan's Fashion Store",
      ownerName: "Akshaya",
      email: "shan@gmail.com",
      phone: "9442480847",
      gstNumber: "GSTIN54321TN",
      address: "Coimbatore, TN",
    },
    {
      id: 3,
      shopName: "Nand shop",
      ownerName: "Nandhini",
      email: "Nand@gmail.com",
      phone: "9924758023",
      gstNumber: "GSTIN56789TN",
      address: "Trichy, TN",
    },
  ]);

  const addOwner = (newOwner) => {
    setOwners([...owners, { ...newOwner, id: owners.length + 1 }]);
  };

  const deleteOwner = (id) => {
    setOwners(owners.filter((owner) => owner.id !== id));
  };

  const updateOwner = (updatedOwner) => {
    setOwners(
      owners.map((owner) =>
        owner.id === updatedOwner.id ? updatedOwner : owner
      )
    );
  };

  return (
    <div className="app-container">
      <h1 className="title">🏪Shopping Mall Management-Shop Owner</h1>
      <div className="content">
        <ShopOwnerForm onAdd={addOwner} />
        <ShopOwnerList
          owners={owners}
          onDelete={deleteOwner}
          onUpdate={updateOwner}
        />
      </div>
    </div>
  );
}

export default App;
