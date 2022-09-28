import Image from "next/image";
const GalleryItem = ({ image, onClick }) => {
  return (
    <div className="relative hover:cursor-pointer group" onClick={onClick}>
      <div className="group-hover:bg-black/40 transition-all w-full h-full absolute"></div>
      <div className="absolute left-0 right-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 text-white transition-all">
        <div className="flex gap-2 items-center ">
          <Image
            src={image.user.profile_image.medium}
            className="rounded-full w-8 h-8"
            alt={image.user.name}
            width={+image.width}
            height={+image.height}
            layout="responsive"
          />
          <p>{image.user.name}</p>
        </div>
      </div>
      <Image
        className="w-full"
        src={image.urls.regular}
        alt={image.description ?? `${image.user.name}'s Image`}
        width={+image.width}
        height={+image.height}
        layout="responsive"
      />
    </div>
  );
};

export default GalleryItem;
