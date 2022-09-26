// ReactJS Components
import { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

// Custom Components
import GalleryItem from './GalleryItem';
import GalleryModal from './GalleryModal';

const GalleryContainer = ({ images }) => {
  const [modalActive, setModalActive] = useState(false);
  const [imageData, setImageData] = useState({});

  const handleItemClick = (image) => {
    setModalActive(true);
    setImageData({
      imageUrl: image.urls.regular,
      userName: image.user.name,
      userImageUrl: image.user.profile_image.medium,
      createdAt: image.created_at,
      description: image.description,
    });
  };

  const handleCloseClick = () => {
    setModalActive(false);
    setImageData({});
  };

  return (
    <>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 3 }}>
        <Masonry gutter="16px">
          {images &&
            images.map((image) => (
              <GalleryItem
                key={image.id}
                image={image}
                onClick={() => handleItemClick(image)}
              />
            ))}
        </Masonry>
      </ResponsiveMasonry>
      <GalleryModal
        active={modalActive}
        data={imageData}
        closeClick={handleCloseClick}
      />
    </>
  );
};

export default GalleryContainer;