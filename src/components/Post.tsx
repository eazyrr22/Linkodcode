import React from "react";
import "../css/post-style.css";
export default function Post() {
  return (
    <div className="post-card">
      <div>
        <h2>Card Title</h2>
        <div className="post-head">
          <div className="post-head-item">
            <img src="src/assets/user-profile.png" alt="post img" />
            <h3 className="">Author name</h3>
          </div>
          <div className="post-head-item">
            <img src="src/assets/like-icon.png" alt="" />
            <h4>date</h4>
          </div>
        </div>
        <p className="post-main-article">
          post content Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Molestiae, totam velit quasi minus dolores, delectus esse inventore
          aut placeat, magnam asperiores quo qui fuga voluptatum. Atque ipsum
          dolorum doloremque labore.
        </p>
      </div>
    </div>
  );
}
