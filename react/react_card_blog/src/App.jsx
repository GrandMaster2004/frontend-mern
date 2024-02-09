import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";

import { filterData, apiUrl } from "./data";

import Filters from "./components/Filters";
function App() {
  const [tag, setTag] = useState("All");
  const [course, setCourse] = useState([]); //we can also use null
  // const []
  async function fetchData() {
    try {
      let data = await fetch(apiUrl);
      let response = await data.json();
      setCourse(response.data);
    } catch (error) {
      console.log("Some thing wrong");
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  console.log(course);
  return (
    <>
      <Navbar />

      <Filters filterData={filterData} setTag={setTag} />

      <Cards courses={course} tag={tag} />
    </>
  );
}

export default App;
