const GalleryItem = ({ image }) => {
    return (
      <div className="relative hover:cursor-pointer group">
        <div className="absolute left-0 right-0 bottom-0 p-4 hidden group-hover:block bg-primary-dark/70 text-white">
          <div className="flex gap-2 items-center">
            <img
              src={image.user.profile_image.medium}
              className="rounded-full w-8 h-8"
              alt={image.user.name}
            />
            <p>{image.user.name}</p>
          </div>
        </div>
        <img
          className="w-full"
          src={image.urls.regular}
          alt={image.description}
        />
      </div>
    );
  };
  
  export default GalleryItem;