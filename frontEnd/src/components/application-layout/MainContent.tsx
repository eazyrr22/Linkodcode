import React, { useEffect, useState } from "react";
import "C:/Users/עזריאל/source/repos/Linkodcode web/frontEnd/src/css/mainContent.css";
import PostsPage from "../../pages/PostsPage";

export default function MainContent() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
        fetch("http://localhost:3000/post")
            .then(response => response.json())
            .then(data => setPostData(data));
    }, []);
  
  return (
    <main>
      <PostsPage data={postData} />
    </main>
  );
}
