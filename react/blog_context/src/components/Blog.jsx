import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Card from "./Card";
import Spinner from "./Spinner";
const Blog = () => {
  // consume
  const { posts, loading } = useContext(AppContext);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No Pots Found</p>
        </div>
      ) : (
        posts.map((post) => <Card post={post} />)
      )}
    </div>
  );
};

export default Blog;
