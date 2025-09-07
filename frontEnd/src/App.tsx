import React from "react";
import Post from "./components/PostCard";
import PostsPage from "./pages/PostsPage";

export default function App() {
  return (
    <div>
      <PostsPage filePath=""></PostsPage>
      <Post />
    </div>
  );
}
