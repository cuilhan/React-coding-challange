import Image from "next/image";
const GalleryModal = ({ open, data, onClick }) => {
    const readableDate = new Date(data.created_at).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });
  
    if (!open) {
      return null;
    }
  
    return (
      <div className="fixed top-0 left-0 z-80 w-full h-screen bg-black/70 flex flex-col justify-center items-center">
        <button
          className="fixed z-90 top-1 left-8 text-white text-5xl font-bold opacity-50 hover:opacity-100 transition-all"
          onClick={onClick}
        >
          &times;
        </button>
        <div className="flex flex-col max-w-[1200px] w-[90%] bg-white p-5">
          <div className="flex items-center gap-4 text-dark mb-6">
            <div>
              <Image
                src={data.user.profile_image.medium}
                className="rounded-full max-w-[64px] max-h-[64px]"
                width={+image.width}
                height={+image.height}
                layout="responsive"
              />
            </div>
            <div>
              <p>{data.user.name}</p>
              <a
                href={data.user.links.html}
                target="_blank"
                className="text-sm opacity-50 hover:opacity-100 transition-all"
              >
                @{data.user.username}
              </a>
            </div>
          </div>
          <div className="mb-4 mx-auto">
            <Image className="max-h-[600px] w-auto" 
            src={data.urls.regular} 
            width={+image.width}
            height={+image.height}
            layout="responsive"
            />
          </div>
          <div className="flex gap-6 flex-col sm:flex-row sm:justify-between">
            <div>
              <p className="text-sm opacity-70">Likes</p>
              <p className="">{data.likes}</p>
            </div>
            <div>
              <p className="sm:text-right text-sm opacity-70">Created At</p>
              <p className="sm:text-right">{readableDate}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default GalleryModal;
  