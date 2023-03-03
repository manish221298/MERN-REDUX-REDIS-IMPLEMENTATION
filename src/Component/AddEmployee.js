import React, { useState, useEffect } from "react";
import {useDispatch} from "react-redux"

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    phone: "",
    wife: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("employee inside submit", employee)

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={employee.name}
          onChange={handleInputChange}
        />
        <br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={employee.email}
          onChange={handleInputChange}
        />
        <br />

        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={employee.phone}
          onChange={handleInputChange}
        />
        <br />

        <label htmlFor="wife">Wife:</label>
        <input
          type="text"
          id="wife"
          name="wife"
          value={employee.wife}
          onChange={handleInputChange}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddEmployee;
