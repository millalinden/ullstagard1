// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import useContentful from "../utils/useContentful";
// import Layout from "../components/Header/layout";

// function Gallery() {
//   const { getImages } = useContentful();
//   const [images, setImages] = useState([]);
//   const [selectedTag, setSelectedTag] = useState("Alla");


//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const imagesData = await getImages();
//         setImages(imagesData);
//       } catch (error) {
//         console.error("Error fetching images:", error);
//       }
//     };

//     fetchImages();
//   }, [getImages]);

//   const handleTagClick = (tag) => {
//     setSelectedTag(tag);
//   };

//   const filteredImages = selectedTag === "Alla"
//     ? images
//     : images.filter((image) => image.tags && image.tags.includes(selectedTag));
//    console.log(filteredImages.tags)

//   return (
//     <Layout>
//      <section className="mt-32 flex justify-around items-center font-satoshi text-blueberry font-bold lg:text-[1vw] lg:px-72">
//         <button onClick={() => handleTagClick("Alla") } className="uppercase">Alla</button>
//         <button onClick={() => handleTagClick("Vår")} className="uppercase">Vår</button>
//         <button onClick={() => handleTagClick("sommar")} className="uppercase">Sommar</button>
//         <button onClick={() => handleTagClick("Höst")} className="uppercase">Höst</button>
//         <button onClick={() => handleTagClick("Vinter")} className="uppercase">Vinter</button>
//       </section>
//       <section className="mt-32">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4">
//           {images.map((image, index) => (
//             <div key={index} className="sm:mt-4 md:mt-0 relative">
//               <div className="aspect-w-1 aspect-h-1 overflow-hidden">
//                 <Image
//                   src={image.url}
//                   alt={image.description || "Image description"}
//                   width={3000} // Set width according to your needs
//                   height={3000} // Set height according to your needs
//                   objectFit="cover"
//                   placeholder="blur"
//                   blurDataURL="/path-to-placeholder.png"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
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
  const [selectedTag, setSelectedTag] = useState("Alla");

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

  const filteredImages = selectedTag === "Alla"
    ? images
    : images.filter((image) => image.tags && image.tags.includes(selectedTag));

  return (
    <Layout>
      <h2 className="font-satoshi font-[900] tracking-wide uppercase lg:text-[3vw] lg:mt-40 flex justify-center">Bildgalleri</h2>
      <section className="mt-10 flex justify-around items-center font-satoshi text-blueberry font-bold lg:text-[1vw] lg:px-72">
        <button onClick={() => handleTagClick("Alla")} className="uppercase">Alla</button>
        <button onClick={() => handleTagClick("Var")} className="uppercase">Vår</button>
        <button onClick={() => handleTagClick("sommar")} className="uppercase">Sommar</button>
        <button onClick={() => handleTagClick("Host")} className="uppercase">Höst</button>
        <button onClick={() => handleTagClick("vinter")} className="uppercase">Vinter</button>
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
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default Gallery;
