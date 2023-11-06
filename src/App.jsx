import { useState } from "react";

export default function App() {
  const [fullImgIndex, setFullImgIndex] = useState(0);
  const [isDarken, setIsDarken] = useState(false);
  const images = [
    {
      src: "images/pic1.jpg",
      alt: "Closeup of a human eye",
    },
    {
      src: "images/pic2.jpg",
      alt: "Rock that looks like a wave",
    },
    {
      src: "images/pic3.jpg",
      alt: "Purple and white pansies",
    },
    {
      src: "images/pic4.jpg",
      alt: "Section of wall from a pharoah's tomb",
    },
    {
      src: "images/pic5.jpg",
      alt: "Large moth on a leaf",
    },
  ];

  return (
    <>
      <h1>Image gallery example</h1>
      <div className="full-img">
        <img
          className="displayed-img"
          src={images[fullImgIndex].src}
          alt={images[fullImgIndex].alt}
        />
        <div
          className="overlay"
          style={
            isDarken
            ? { backgroundColor: "rgba(0, 0, 0, 0.5)" }
            : { backgroundColor: "rgba(0, 0, 0, 0)" }
          }
        ></div>
        <button className="dark" onClick={() => setIsDarken((prev) => !prev)}>
          {isDarken ? "lighten" : "Darken"}
        </button>
      </div>
      <div className="thumb-bar">
        {images.map((img, index) => {
          return (
            <img
              key={index}
              src={img.src}
              alt={img.alt}
              onClick={() => {
                setFullImgIndex(index);
              }}
            />
          );
        })}
      </div>
    </>
  );
}
