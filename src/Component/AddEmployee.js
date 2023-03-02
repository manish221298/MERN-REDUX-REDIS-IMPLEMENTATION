import React, { useState, useEffect } from "react";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "manish",
    email: "",
    phone: "",
    wife: "",
  });

  const {name, email, phone, wife} = employee

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployee((prevState) => ({ ...prevState, [name]: value }));
  };


  return (
    <div>

    </div>
  )
};

export default AddEmployee;
