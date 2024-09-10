"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import useContentful from "../../utils/useContentful";
import Layout from "../../components/Header/layout";
import FilterButton from "../../components/FilterBtn/page";
import ImageModal from "../../components/ImageModal/page";

import { GoColumns } from "react-icons/go";
import { LuRectangleVertical } from "react-icons/lu";

function Gallery() {
  const { getImages } = useContentful();
  const [images, setImages] = useState([]);
  const [selectedTag, setSelectedTag] = useState("Alla");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [gridCols, setGridCols] = useState(1); // State to control grid columns

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

  const handleImageLoad = (src) => {
    setLoadedImages((prev) => new Set(prev.add(src)));
  };

  const handleGridCol1 = () => setGridCols(1);
  const handleGridCol2 = () => setGridCols(2);

  return (
    <Layout>
      <section className="flex gap-2 justify-start mx-3 flex-wrap mt-24 lg:mx-5 lg:mt-32 lg:gap-4">
        <FilterButton
          onClick={() => handleTagClick("Alla")}
          className={`uppercase font-medium ${
            selectedTag === "Alla" ? "bg-blueberry text-white" : ""
          }`}
        >
          Alla
        </FilterButton>
        <FilterButton
          onClick={() => handleTagClick("Var")}
          className={`uppercase font-medium ${
            selectedTag === "Var" ? "bg-blueberry text-white" : ""
          }`}
        >
          Vår
        </FilterButton>
        <FilterButton
          onClick={() => handleTagClick("sommar")}
          className={`uppercase font-medium ${
            selectedTag === "sommar" ? "bg-blueberry text-white" : ""
          }`}
        >
          Sommar
        </FilterButton>
        <FilterButton
          onClick={() => handleTagClick("Host")}
          className={`uppercase font-medium ${
            selectedTag === "Host" ? "bg-blueberry text-white" : ""
          }`}
        >
          Höst
        </FilterButton>
        <FilterButton
          onClick={() => handleTagClick("vinter")}
          className={`uppercase font-medium ${
            selectedTag === "vinter" ? "bg-blueberry text-white" : ""
          }`}
        >
          Vinter
        </FilterButton>
      </section>

      <hr className="border-black mx-3 mt-3 lg:mx-5 lg:mt-5" />
      {/* Grid Layout Buttons */}
      <section className="lg:hidden flex justify-end gap-1 mx-3 mt-2">
        <button onClick={handleGridCol1} className="">
          <LuRectangleVertical size={18}/>
        </button>
        <button onClick={handleGridCol2} className="px-2">
          <GoColumns size={20} />
        </button>
      </section>

      <section className="mt-3 pb-10 lg:mt-5">
        <div
          className={`grid grid-cols-${gridCols} gap-3 mx-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-4 lg:mx-5`}
        >
          {filteredImages.map((image, index) => (
            <div key={index} className="sm:mt-4 md:mt-0 relative">
              <div
                className={`aspect-w-1 aspect-h-1 overflow-hidden ${
                  loadedImages.has(image.url) ? "animate-fadeIn" : "opacity-0"
                }`}
                onLoad={() => handleImageLoad(image.url)}
              >
                <Image
                  src={image.url}
                  alt={image.description || "Image description"}
                  width={3024}
                  height={4032}
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
