// ReactJS Components
import { useState } from 'react';

// Custom Components
import GalleryItem from './GalleryItem';

const GalleryContainer = ({ images }) => {

  return (
    <>
      <div>
        {images &&
            images.map((image) => (
              <GalleryItem
                key={image.id}
                image={image}
                onClick={() => handleItemClick(image)}
              />
            ))}
      </div>
    </>
  );
};

export default GalleryContainer;