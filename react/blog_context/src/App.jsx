import { useContext, useEffect, useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Blog from "./components/Blog";
import Pagination from "./components/Pagination";
import { AppContext } from "./context/AppContext";

function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <>
      <Header />
      <Blog />
      <Pagination />
      the Vite and React logos to learn more
    </>
  );
}

export default App;
