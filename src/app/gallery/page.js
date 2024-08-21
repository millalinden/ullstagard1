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
      <section className="text-[3vw] md:text-[2vw] font-satoshi px-5 lg:pl-5 mt-32 lg:flex lg:gap-4 lg:items-start lg:text-[1vw]">
        <Button onClick={() => handleTagClick("Alla")} className="uppercase">
          Alla
        </Button>
        <Button onClick={() => handleTagClick("Var")} className="uppercase">
          Vår
        </Button>
        <Button onClick={() => handleTagClick("sommar")}>
          Sommar
        </Button>
        <Button onClick={() => handleTagClick("Host")} className="uppercase">
          Höst
        </Button>
        <Button onClick={() => handleTagClick("vinter")} className="uppercase">
          Vinter
        </Button>
      </section>
      <hr className="border-black mx-5 mt-1"/>
      <section className="mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-5">
          {filteredImages.map((image, index) => (
            <div key={index} className="sm:mt-4 md:mt-0 relative">
              <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                <Image
                  src={image.url}
                  alt={image.description || "Image description"}
                  width={3024} // Set width according to your needs
                  height={4032} // Set height according to your needs
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
