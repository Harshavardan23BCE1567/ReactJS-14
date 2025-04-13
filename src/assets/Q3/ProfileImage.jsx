import React from "react";

const ProfileImage = ({ imageUrl }) => {
  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <img
        src={imageUrl}
        alt="Bruno Mars"
        style={{ width: "150px", height: "150px", borderRadius: "50%" }}
      />
    </div>
  );
};

export default ProfileImage;
