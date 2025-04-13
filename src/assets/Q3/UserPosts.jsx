import React from "react";

const UserPosts = ({ posts }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h3>Latest Posts</h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {posts.map((post, index) => (
          <li key={index} style={{ padding: "10px", borderBottom: "1px solid gray" }}>
            {post}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPosts;
