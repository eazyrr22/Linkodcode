import React, { useEffect, useState } from "react";
import "./css/mainContent.css";
import PostsPage from "../../pages/PostsPage";

export default function MainContent() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
        fetch("http://localhost/server/db/posts.json")
            .then(response => response.json())
            .then(data => setPostData(data));
    }, []);
  
  return (
    <main>
      <PostsPage data={postData} />
    </main>
  );
}
