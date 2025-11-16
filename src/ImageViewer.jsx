import React, { useState } from "react";
import "./styles.css"; // optional

export default function ImageViewer() {
  const images = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg"];

  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="viewer-container">
      {/* Initial Image */}
      <img
        src={images[0]}
        alt="Preview"
        className="preview-image"
        onClick={() => {
          setOpen(true);
          setCurrentIndex(0);
        }}
      />

      {/* Modal */}
      {open && (
        <div className="modal-overlay">
          <div className="modal-content">
            <img
              src={images[currentIndex]}
              alt="Full view"
              className="modal-image"
            />

            {/* Prev / Next Buttons */}
            <button className="btn prev" onClick={prevImage}>
              ⬅ Prev
            </button>
            <button className="btn next" onClick={nextImage}>
              Next ➡
            </button>

            {/* Close Button */}
            <button className="btn close" onClick={() => setOpen(false)}>
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
