import React, { useState } from "react";

function ShopOwnerList({ owners, onDelete, onUpdate }) {
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({});

  const startEdit = (owner) => {
    setEditId(owner.id);
    setEditData(owner);
  };

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const saveEdit = () => {
    onUpdate(editData);
    setEditId(null);
  };

  return (
    <div className="list-container">
      <h2>🗂️ Shop Owner Records</h2>
      <div className="cards">
        {owners.map((owner) => (
          <div key={owner.id} className="card">
            {editId === owner.id ? (
              <>
                <input name="shopName" value={editData.shopName} onChange={handleEditChange} />
                <input name="ownerName" value={editData.ownerName} onChange={handleEditChange} />
                <input name="email" value={editData.email} onChange={handleEditChange} />
                <input name="phone" value={editData.phone} onChange={handleEditChange} />
                <input name="gstNumber" value={editData.gstNumber} onChange={handleEditChange} />
                <input name="address" value={editData.address} onChange={handleEditChange} />
                <button onClick={saveEdit}>Save</button>
              </>
            ) : (
              <>
                <h3>{owner.shopName}</h3>
                <p><strong>Owner:</strong> {owner.ownerName}</p>
                <p><strong>ID:</strong> {owner.id}</p>
                <p><strong>Email:</strong> {owner.email}</p>
                <p><strong>Phone:</strong> {owner.phone}</p>
                <p><strong>GST:</strong> {owner.gstNumber}</p>
                <p><strong>Address:</strong> {owner.address}</p>
                <div className="buttons">
                  <button className="edit-btn" onClick={() => startEdit(owner)}>Edit</button>
                  <button className="delete-btn" onClick={() => onDelete(owner.id)}>Delete</button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopOwnerList;
