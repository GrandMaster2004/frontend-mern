import { useState } from "react";
import "./App.css";

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // console.log(firstName, lastName);
  // function firstName1(event) {
  //   setFirstName(event.target.value);
  // }
  // function lastName1(event) {
  //   setLastName(event.target.value);
  // }

  // next best method
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    isVisible: true,
  });
  function FormChange(event) {
    setFormData((prevData) => {
      const { name, value, checked, type } = event.target;
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  console.log(formData);

  function submitHandler(event) {
    event.preventDefault();
    console.log("Data is submit successfully");
  }
  return (
    <>
      <h1>This is react form</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          onChange={FormChange}
          placeholder="first name"
          name="firstName"
          value={formData.firstName}
        />
        <input
          type="text"
          onChange={FormChange}
          placeholder="last name"
          name="lastName"
          value={formData.lastName}
        />
        <input
          type="checkbox"
          name="isVisible"
          checked={formData.isVisible}
          onChange={FormChange}
          id="isVisible"
        />
        <label htmlFor="isVisible">Am i Visible</label>
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
