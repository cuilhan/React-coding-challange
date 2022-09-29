import Image from 'next/image';

interface IGalleryItem {
  image: any;
  onClick(): void;
}

const GalleryItem = ({ image, onClick }: IGalleryItem) => {
  return (
    <div className="relative hover:cursor-pointer group" onClick={onClick}>
      <div className="group-hover:bg-black/40 transition-all w-full h-full absolute z-10"></div>
      <div className="absolute left-0 right-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 text-white transition-all z-10">
        <div className="flex gap-2 items-center ">
          <figure className="w-8 h-8">
            <Image
              src={image.user.profile_image.medium}
              className="rounded-full"
              alt={image.user.name}
              width="64px"
              height="64px"
              layout="responsive"
            />
          </figure>
          <p>{image.user.name}</p>
        </div>
      </div>
      <figure className="w-full">
        <Image
          src={image.urls.regular}
          alt={image.description ?? `${image.user.name}'s Image`}
          width={`${+image.width}px`}
          height={`${+image.height}px`}
          layout="responsive"
        />
      </figure>
    </div>
  );
};

export default GalleryItem;
