// "use client"

// import React, { useEffect, useState } from "react";
// import useContentful from "../utils/useContentful";
// import Layout from "../components/Header/layout"

// function Gallery() {
//   const { getImages } = useContentful();
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const imagesData = await getImages();
//         setImages(imagesData);
//       } catch (error) {
//         console.error('Error fetching images:', error);
//       }
//     };

//     fetchImages();
//   }, [getImages]);

//   return (
//     <Layout>
//     <div className="container mx-auto mt-32 px-4 lg:px-0">
//       <div className="grid grid-cols-1 sm:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//         {images.map((image, index) => (
//           <div key={index} className="sm: mt-4 md:mt-0 relative">
//             <div className="aspect-w-1 aspect-h-1 overflow-hidden">
//               <img className="object-cover w-full h-full" src={image.url} alt={image.description} />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     </Layout>
//   );
// }

// export default Gallery;

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import useContentful from "../utils/useContentful";
import Layout from "../components/Header/layout";

function Gallery() {
  const { getImages } = useContentful();
  const [images, setImages] = useState([]);

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

  return (
    <Layout>
      <div className="mt-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((image, index) => (
            <div key={index} className="sm:mt-4 md:mt-0 relative">
              <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                <Image
                  src={image.url}
                  alt={image.description || "Image description"}
                  width={3000} // Set width according to your needs
                  height={3000} // Set height according to your needs
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL="/path-to-placeholder.png"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Gallery;
