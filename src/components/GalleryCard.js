import React from "react";

const GalleryCard = props => {
  return (
    <div className="gallery-card">
      <div
        style={{
          background: `url(${props.testImage})`,
          backgroundSize: "100%",
          marginTop: "10px"
        }}
        className="card-image"
      ></div>
      <div className="card-details">
        <p>2 bedroom apartment with 2 bathrooms. 170 sqr ft. Beach view.</p>
        <p style={{ color: "#FA885C" }}>
          <strong>Price: </strong>750.500 TL
        </p>
        <p>
          <strong>Location: </strong>Istanbul
        </p>
        <p style={{ color: "rgb(170, 170, 170)" }}>Date: 2 weeks ago</p>
      </div>
    </div>
  );
};

export default GalleryCard;
