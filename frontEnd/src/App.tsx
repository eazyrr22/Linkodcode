import React from "react";
import PostCard from "./components/PostCard";
import PostsPage from "./pages/PostsPage";
import * as jsonData from "./posts/posts.json";




export default function App() {
  return (
    <div>
      <PostsPage data = {jsonData}/>
    </div>
  );
}
