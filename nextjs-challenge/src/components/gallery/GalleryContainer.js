// ReactJS Components
import { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

// Custom Components
import GalleryItem from './GalleryItem';
import GalleryModal from './GalleryModal';

const GalleryContainer = ({ images }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [imageData, setImageData] = useState({});

  const handleItem = (image) => {
    setModalOpen(true);
    setImageData(image);
  };

  const handleClose = () => {
    setModalOpen(false);
    setImageData({});
  };

  return (
    <>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 3 }}>
        <Masonry gutter="16px">
          {images?.map((image) => (
            <GalleryItem
              key={image.id}
              image={image}
              onClick={() => handleItem(image)}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
      <GalleryModal open={modalOpen} data={imageData} onClick={handleClose} />
    </>
  );
};

export default GalleryContainer;
