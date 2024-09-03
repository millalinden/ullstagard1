// API endpoint - handling the post request to Contentful 

import contentfulClient from "@/app/utils/contentfulClient";

export async function POST(request) {
  try {
    const data = await request.json();
    const { firstName, lastName, comment } = data;
    const space = await contentfulClient.getSpace(
      process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
    );
    const environment = await space.getEnvironment(
      process.env.CONTENTFUL_ENVIRONMENT_ID
    );

    const entry = await environment.createEntry("guestbookComment", {
      fields: {
        firstName: {
          "en-US": firstName || "Default First Name",
        },
        lastName: {
          "en-US": lastName || "Default Last Name",
        },
        comment: {
          "en-US": comment || "Default Comment",
        },
      },
    });

    return new Response(JSON.stringify({ entry }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error creating entry:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
