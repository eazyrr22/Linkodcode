import React from "react";
import PostsPage from "./pages/PostsPage";
import jsonData from "./posts/posts.json";
import type { Post } from "./itemType";

export default function App() {
  return (
    <div>
      <PostsPage data={jsonData} />
    </div>
  );
}
