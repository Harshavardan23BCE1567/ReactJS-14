import React from "react";
import ProfileImage from "./ProfileImage";
import UserInfo from "./UserInfo";
import UserPosts from "./UserPosts";

const ProfilePage = () => {
  const user = {
    imageUrl: "../../Images/bruno.webp",  
    name: "Bruno Mars",
    email: "brunomars@music.com",
    bio: "Singer | Songwriter | Performer 🎤✨",
    posts: [
      "Just dropped a new album! 🎵",
      "Excited for my next world tour! 🌍",
      "Music is life, and life is music. 🎶",
    ],
  };

  return (
    <div style={{
      width: "400px",
      margin: "auto",
      padding: "20px",
      border: "1px solid gray",
      borderRadius: "10px",
      boxShadow: "2px 2px 10px rgba(0,0,0,0.2)"
    }}>
      <ProfileImage imageUrl={user.imageUrl} />
      <UserInfo name={user.name} email={user.email} bio={user.bio} />
      <UserPosts posts={user.posts} />
    </div>
  );
};

export default ProfilePage;
