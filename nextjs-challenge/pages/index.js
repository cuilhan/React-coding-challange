// ReactJS Components
import { useEffect, useState } from 'react';

// Custom Components
import Header from '../src/components/header/Header';
import GalleryContainer from '../src/components/gallery/GalleryContainer';
import Footer from '../src/components/footer/Footer';

// API & Hooks
import axios from 'axios';
import { loadImages } from '../src/lib/load-images';

export default function Home({ imageArray }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(imageArray);
  }, [imageArray]);

  const seoData = {
    title: 'Tech Guilds Next.js Challenge',
    description: 'Challenge for interview',
    icon: '/favicon.ico',
  };

  return (
    <div className="container">
      <Header data={seoData} />

      <main className="main">
        <h1 className="title">Unsplash Image Gallery</h1>
        <div className="image-gallery w-full mt-8">
          <GalleryContainer images={images} />
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