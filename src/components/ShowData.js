import React, { useState } from "react";

const ShowData = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({ id: "", name: "", email: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddData = (e) => {
    e.preventDefault();

    // Validasi sederhana untuk memastikan semua field terisi
    if (!formData.id || !formData.name || !formData.email) {
      alert("Please fill out all fields");
      return;
    }

    setData((prevData) => [...prevData, formData]);
    setFormData({ id: "", name: "", email: "" }); // Reset form input
  };

  return (
    <div className="container">
      <h2>Show Data</h2>

      {/* Form untuk memasukkan data */}
      <form onSubmit={handleAddData} className="mb-4">
        <div className="mb-3">
          <label htmlFor="id" className="form-label">
            ID
          </label>
          <input
            type="text"
            id="id"
            name="id"
            className="form-control"
            value={formData.id}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Data
        </button>
      </form>

      {/* Tabel untuk menampilkan data */}
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowData;
