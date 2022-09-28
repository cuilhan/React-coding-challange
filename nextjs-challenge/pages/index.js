// ReactJS Components
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

// Custom Components
import Header from '../src/components/header/Header';
import GalleryContainer from '../src/components/gallery/GalleryContainer';
import Footer from '../src/components/footer/Footer';

// API & Hooks
import axios from 'axios';
import { loadImages } from '../src/lib/load-images';

const seoData = {
  title: 'Tech Guilds Next.js Challenge',
  description: 'Challenge for interview',
  icon: '/favicon.ico',
};

export default function Home({ imageArray }) {
  const [images, setImages] = useState(imageArray);
  const [page, setPage] = useState(1);

  const loadMore = async () => {
    try {
      const nextPage = page + 1;
      const { data } = await axios.get(`/api/images/${nextPage}`);
      setImages([...images, ...data]);
      setPage(nextPage);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <Header data={seoData} />

      <main className="main">
        <h1 className="title">Unsplash Image Gallery</h1>
        <div className="image-gallery w-full mt-8">
          <InfiniteScroll
            dataLength={images.length}
            next={loadMore}
            hasMore={true}
            loader={
              <p className="text-center">
                <b>Loading...</b>
              </p>
            }
            endMessage={
              <p className="text-center">
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            <GalleryContainer images={images} />
          </InfiniteScroll>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const images = await loadImages();

  return {
    props: {
      imageArray: images,
    },
  };
}
