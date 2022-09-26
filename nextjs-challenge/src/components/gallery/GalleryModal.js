const GalleryModal = ({ active, data, closeClick }) => {
    const readableDate = new Date(data.createdAt).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });
  
    if (!active || Object.keys(data).length <= 0) {
      return null;
    }
  
    return (
      <div className="fixed top-0 left-0 z-80 w-screen h-screen bg-black/70 flex flex-col justify-center items-center">
        <button
          className="fixed z-90 top-6 right-8 text-white text-5xl font-bold"
          onClick={closeClick}
        >
          &times;
        </button>
        <img
          className="max-w-[800px] max-h-[600px] object-cover mb-4"
          src={data.imageUrl}
        />
        <div className="flex items-center gap-4 text-white">
          <div>
            <img
              src={data.userImageUrl}
              className="rounded-full max-w-[64px] max-h-[64px] w-full h-full"
            />
          </div>
          <div>
            <p>{data.userName}</p>
            <p className="text-sm italic">{data.description}</p>
            <p className="text-sm">{readableDate}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default GalleryModal;