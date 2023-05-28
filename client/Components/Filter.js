import React, { useEffect, useReducer, useState } from "react";
import Select from "react-select";
// import NavBar from './NavBar';

const Filter = () => {
  const options = [
    { value: "Tech", label: "Tect" },
    { value: "Business", label: "Business" },
  ];

  const [selection, setSelection] = useState({industry: ''});
  const handleSelect = () => {
    setSelection(selection);
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/homepage/getPosts/${selection.industry}`)
      } catch (err) {
        console.log("err fetching data");
      }
    };
    fetchData();
  };

  return (
    <div className="dropdownWrapper">
      <Select
        options={options}
        onChange={handleSelect}
        value={selection}
        className="custom-select"
      />
    </div>
  );
};

export default Filter;
