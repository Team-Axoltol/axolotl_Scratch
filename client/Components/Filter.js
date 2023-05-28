import React, { useEffect, useReducer, useState } from "react";
import Select from "react-select";
// import NavBar from './NavBar';

const Filter = () => {
  const options = [
    { value: "Tech1", label: "Tect" },
    { value: "Business1", label: "Business" },
  ];
  return (
    <div className="dropdownWrapper">
      <Select options={options} className='custom-select'/>
    </div>
  );
};

export default Filter;
