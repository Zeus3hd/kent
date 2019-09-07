import React from "react";
import testImage from "../imgs/1.jpg";
import testImage2 from "../imgs/2.jpg";
import testImage3 from "../imgs/3.jpg";
import GalleryCard from "./GalleryCard";
import filterIcon from "../imgs/filter.png";
const Gallery = () => {
  return (
    <div id="gallery">
      <GalleryCard testImage={testImage} />
      <GalleryCard testImage={testImage2} />
      <GalleryCard testImage={testImage3} />
      <GalleryCard testImage={testImage} />
      <GalleryCard testImage={testImage} />
      <div id="filter">
        <div id="filters-form">
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
        </div>
        <button>
          <img src={filterIcon} alt="filter" />
        </button>
      </div>
    </div>
  );
};

export default Gallery;
