

import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";

export default function useContentful() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN,
    host: "cdn.contentful.com",
  });

  async function getImages() {
    try {
      const entries = await client.getEntries({
        content_type: "galleryImage", // Adjust content type ID if needed
      });

      const sanitizedEntries = entries.items.map((item) => {
        const imageFields = item.fields;
        const images = imageFields.image.map((img) => {
          const imageUrl = img.fields.file.url.startsWith("//")
            ? `https:${img.fields.file.url}`
            : img.fields.file.url;
          return {
            url: imageUrl,
            title: img.fields.title,
            description: img.fields.description,
            tags: img.metadata.tags.map((tag) => tag.sys.id),
          };
        });

        return images;
      });

      return sanitizedEntries.flat(); // Flatten the array of arrays into a single array of images
    } catch (error) {
      console.error("Error fetching images:", error);
      throw error; // Rethrow the error to propagate it to the calling code
    }
  }

  async function getNewsPosts() {
    try {
      const entries = await client.getEntries({
        content_type: "newsPost",
      });

      const sanitizedEntries = entries.items.map((item) => {
        const newsFields = item.fields;
        return {
          title: newsFields.newsTitle,
          date: newsFields.newsDate,
          description: newsFields.newsDescription,
        };
      });

      return sanitizedEntries;
    } catch (error) {
      console.error("Error fetching news posts:", error);
      throw error;
    }
  }

  const renderRichTextDocument = (document) => {
    return documentToReactComponents(document, {
      renderNode: {
        "embedded-asset-block": (node) => {
          const { file, title } = node.data.target.fields;
          const imageUrl = file.url.startsWith("//") ? `https:${file.url}` : file.url;
          return <img src={imageUrl} alt={title} />;
        },
      },
    });
  };

  return {
    getImages,
    getNewsPosts,
    renderRichTextDocument,
  };
}
