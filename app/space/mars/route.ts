import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET() {
  const nasaApiKey = process.env.NASA_API_KEY;
  const latestPhotosUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=${nasaApiKey}`;
  const marsWeatherUrl = `https://api.nasa.gov/insight_weather/?api_key=${nasaApiKey}&feedtype=json&ver=1.0`;

  const [latestPhotosResponse, weatherResponse] = await Promise.all([
    fetch(latestPhotosUrl),
    fetch(marsWeatherUrl),
  ]);

  const latestPhotosData = await latestPhotosResponse.json();
  const weatherData = await weatherResponse.json();

  const combinedData = {
    latest_photos: latestPhotosData.latest_photos,
    weather: weatherData,
  };

  return NextResponse.json(combinedData);
}

export async function POST(request: NextRequest) {
  const { rover, sol, camera } = await request.json();
  const nasaApiKey = process.env.NASA_API_KEY;
  const roverPhotosUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&api_key=${nasaApiKey}`;

  const response = await fetch(roverPhotosUrl);
  const data = await response.json();

  return NextResponse.json(data);
}
