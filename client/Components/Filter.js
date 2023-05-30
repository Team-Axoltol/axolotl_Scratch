import React, { useEffect, useReducer, useState } from "react";
import Select from "react-select";
//import NavBar from "./NavBar";

const Filter = (props) => {
  const { info, setInfo } = props;
  const options = [
    { value: "Tech", label: "Tech" },
    { value: "Business", label: "Business" },
    { value: "asdf", label: "asdf" },
  ];

  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectionChange = (event) => {
    setSelectedValue(event.target.value); //target.value is the selection we chose
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("selected value", selectedValue);
        const response = await fetch(`/api/homepage/getPosts/${selectedValue}`);
        const posts = await response.json();
        console.log("post response", posts);

        //update info using setinfo
        setInfo(posts);
      } catch (err) {
        console.log("err fetching data");
      }
    };
    fetchData();
  }, [selectedValue]);

  return (
    <div>
      <div>Select Industry:</div>
      <select value={selectedValue} onChange={handleSelectionChange}>
        <option value="">Select an option</option>
        <option value="Tech">Tech</option>
        <option value="asdf">asdf</option>
        <option value="food">food</option>
      </select>
      <p>Selected value: {selectedValue}</p>
    </div>
  );
};
//////////////////
//////////////////
// const Filter = (props) => {
//   const { info, setInfo } = props;

//   const options = [
//     { value: "Tech", label: "Tech" },
//     { value: "food", label: "food" },
//     { value: "asdf", label: "asdf" },
//   ];

//   const [selection, setSelection] = useState("adfg");

//   const handleSelect = (selectedOption) => {
//     console.log("handleSelect is hit");
//     console.log("value check", selectedOption.value);
//     setSelection(selectedOption.value);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`/api/homepage/getPosts/${selection}`);

//         if (response.ok) {
//           // The response was successful

//           const data = await response.json();
//           // Process the data here
//           console.log("Fetched data:", data);
//           setInfo(data);
//         } else {
//           // Handle the error response
//           console.log("Error response:", response);
//         }
//       } catch (err) {
//         // Handle fetch error
//         console.log("Error fetching data:", err);
//       }
//     };
//     fetchData();
//   }, [selection]);

//   return (
//     <div className="dropdownWrapper">
//       <Select
//         options={options}
//         onChange={handleSelect}
//         className="custom-select"
//       />
//     </div>
//   );
// };

export default Filter;
