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
          <div className="dropdown-filter">
            <label htmlFor="Location">Location</label>
            <select name="Location">
              <option defaultValue="selected">Choose Location</option>
              <option value="volvo">Esenyurt</option>
              <option value="saab">Fatih</option>
              <option value="mercedes">Eminunu</option>
              <option value="audi">Basakseher</option>
            </select>
          </div>
          <div className="dropdown-filter">
            <label htmlFor="Type">Type</label>
            <select name="Type">
              <option defaultValue="selected">Choose property type</option>
              <option value="Compound">Compound</option>
              <option value="Tower">Tower</option>
              <option value="Residence">Residence</option>
              <option value="Stand-alone">Stand-alone</option>
            </select>
          </div>
          <div className="dropdown-filter">
            <label htmlFor="Sale/Rent">Sale/Rent</label>
            <select name="Sale/Rent">
              <option defaultValue="selected">Choose Sale / Rent</option>
              <option value="Sale">Sale</option>
              <option value="Rent">Rent</option>
            </select>
          </div>
          <div className="dropdown-filter">
            <label htmlFor="Furnished">Furnished</label>
            <select name="Furnished">
              <option defaultValue="selected">Choose Furnished</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="dropdown-filter">
            <label htmlFor="Rooms">Rooms</label>
            <select name="Rooms">
              <option defaultValue="selected">Choose number of rooms</option>
              <option value="1+0">1+0</option>
              <option value="1+1">1+1</option>
              <option value="2+1">2+1</option>
              <option value="3+1">3+1</option>
            </select>
          </div>
          <div id="price-form">
            <label htmlFor="price">Price</label>
            <input name="min-price" placeholder="minimum price" />
            -
            <input name="max-price" placeholder="maximum price" />
          </div>
        </div>
        <button onClick={() => console.log("clicked")}>
          <img src={filterIcon} alt="filter" />
        </button>
      </div>
    </div>
  );
};

export default Gallery;
