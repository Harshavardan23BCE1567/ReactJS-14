import React from "react";
import srcImage from "../../Images/rose.webp"; 

const ImageDisplay = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Image from Public Folder</h2>
      <img
        src="/Images/bruno.webp" 
        alt="Public Image"
        width="300"
      />
      
      <h2>Image from Src Folder</h2>
      <img
        src={srcImage} 
        alt="Src Image"
        width="300"
      />
    </div>
  );
};

export default ImageDisplay;
