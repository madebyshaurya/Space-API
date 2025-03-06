import { NextResponse } from "next/server";

export async function GET() {
  const nasaApiKey = process.env.NASA_API_KEY;
  const newsApiKey = process.env.NEWSAPI_API_KEY;

  try {
    // Fetch APOD data from NASA
    const nasaResponse = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}`
    );
    const apodData = await nasaResponse.json();

    // Fetch space-related news from NewsAPI
    const newsResponse = await fetch(
      `https://newsapi.org/v2/top-headlines?q=space&apiKey=${newsApiKey}`
    );
    const newsData = await newsResponse.json();

    // Define the expected structure for articles
    const news = newsData.articles.map(
      (article: { title: string; description: string; url: string }) => ({
        title: article.title,
        content: article.description, // Use `description` for short summary
        link: article.url,
      })
    );

    // Prepare response
    const response = {
      apod: {
        title: apodData.title,
        explanation: apodData.explanation,
        image_url: apodData.url,
      },
      news,
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data. Please try again later." },
      { status: 500 }
    );
  }
}

// Example request for GET
// Change the example request to cURL format
// ...
