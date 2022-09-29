import Image from "next/image";

interface IGalleryModal {
  open: boolean;
  data: any;
  onClick(): void;
}

const GalleryModal = ({ open, data, onClick }: IGalleryModal) => {
  const readableDate = new Date(data.created_at).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  if (!open) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 z-80 w-full h-screen bg-black/70 flex flex-col justify-center items-center z-20">
      <button
        className="fixed z-90 top-1 left-8 text-white text-5xl font-bold opacity-50 hover:opacity-100 transition-all"
        onClick={onClick}
      >
        &times;
      </button>
      <div className="flex flex-col max-w-[1200px] w-[90%] bg-white p-5">
        <div className="flex items-center gap-4 text-dark mb-6">
          <figure className="w-12 h-12">
            <Image
              alt={data.user.name}
              src={data.user.profile_image.medium}
              className="rounded-full"
              width={`48px`}
              height={`48px`}
              layout="responsive"
            />
          </figure>
          <div>
            <p>{data.user.name}</p>
            <a
              href={data.user.links.html}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm opacity-50 hover:opacity-100 transition-all"
            >
              @{data.user.username}
            </a>
          </div>
        </div>
        <div className="my-4 mx-0">
          <figure className="relative w-auto h-[400px] sm:h-[600px]">
            <Image
              alt={data.description ?? `${data.user.name}'s Image`}
              src={data.urls.regular}
              layout="fill"
              objectFit="contain"
            />
          </figure>
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
