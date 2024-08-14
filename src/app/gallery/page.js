"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import useContentful from "../utils/useContentful";
import Layout from "../components/Header/layout";
import Button from "../components/Button/page";
import ImageModal from "../components/ImageModal/page";

function Gallery() {
  const { getImages } = useContentful();
  const [images, setImages] = useState([]);
  const [selectedTag, setSelectedTag] = useState("Alla");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imagesData = await getImages();
        setImages(imagesData);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [getImages]);

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  const filteredImages =
    selectedTag === "Alla"
      ? images
      : images.filter(
          (image) => image.tags && image.tags.includes(selectedTag)
        );

  const handleImageClick = (image, index) => {
    setSelectedImage(image.url);
    setSelectedIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleNext = () => {
    const nextIndex =
      selectedIndex === images.length - 1 ? 0 : selectedIndex + 1;
    setSelectedImage(images[nextIndex].url);
    setSelectedIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex =
      selectedIndex === 0 ? images.length - 1 : selectedIndex - 1;
    setSelectedImage(images[prevIndex].url);
    setSelectedIndex(prevIndex);
  };

  return (
    <Layout>
      <h2 className="font-satoshi text-blueberry font-[900] text-[10vw] mt-32 tracking-wide uppercase lg:text-[3vw] lg:mt-40 flex justify-center">
        Bildgalleri
      </h2>
      <section className="mt-10 text-blueberry text-[4vw] flex justify-around px-5 lg:justify-around items-center font-satoshi text-blueberry font-bold lg:text-[1vw] lg:px-72">
        <button onClick={() => handleTagClick("Alla")} className="uppercase">
          Alla
        </button>
        <button onClick={() => handleTagClick("Var")} className="uppercase">
          Vår
        </button>
        <Button onClick={() => handleTagClick("sommar")} className="button">
          Sommar
        </Button>
        <button onClick={() => handleTagClick("Host")} className="uppercase">
          Höst
        </button>
        <button onClick={() => handleTagClick("vinter")} className="uppercase">
          Vinter
        </button>
      </section>
      <section className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4">
          {filteredImages.map((image, index) => (
            <div key={index} className="sm:mt-4 md:mt-0 relative">
              <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                <Image
                  src={image.url}
                  alt={image.description || "Image description"}
                  width={3024} // Set width according to your needs
                  height={4032} // Set height according to your needs
                  objectFit="cover"
                  layout="responsive"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="/images/placeholder2.png"
                  onClick={() => handleImageClick(image, index)}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      {selectedImage && (
        <ImageModal
          images={filteredImages}
          selectedImage={selectedImage}
          onClose={handleCloseModal}
          onNext={handleNext}
          onPrev={handlePrev}
          selectedIndex={selectedIndex}
        />
      )}
    </Layout>
  );
}

export default Gallery;
