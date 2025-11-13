import React, { useState } from "react";

function ShopOwnerForm({ onAdd }) {
  const [formData, setFormData] = useState({
    shopName: "",
    ownerName: "",
    email: "",
    phone: "",
    gstNumber: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.shopName || !formData.ownerName) {
      alert("Please fill all fields!");
      return;
    }
    onAdd(formData);
    setFormData({
      shopName: "",
      ownerName: "",
      email: "",
      phone: "",
      gstNumber: "",
      address: "",
    });
  };

  return (
    <div className="form-container">
      <h2>➕ Add Shop Owner</h2>
      <form onSubmit={handleSubmit}>
        <input name="shopName" placeholder="Shop Name" value={formData.shopName} onChange={handleChange} />
        <input name="ownerName" placeholder="Owner Name" value={formData.ownerName} onChange={handleChange} />
        <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
        <input name="gstNumber" placeholder="GST Number" value={formData.gstNumber} onChange={handleChange} />
        <input name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
        <button type="submit">Add Owner</button>
      </form>
    </div>
  );
}

export default ShopOwnerForm;
