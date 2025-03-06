import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const geocoderApiKey = process.env.GEOCODER_API_KEY;

  // Get query parameters (could be used for future enhancements)
  const searchParams = request.nextUrl.searchParams;
  const format = searchParams.get("format") || "json";

  try {
    // Fetch ISS current location
    const issLocationResponse = await fetch(
      "http://api.open-notify.org/iss-now.json"
    );
    const issLocationData = await issLocationResponse.json();

    // Extract latitude and longitude
    const latitude = parseFloat(issLocationData.iss_position.latitude);
    const longitude = parseFloat(issLocationData.iss_position.longitude);

    // Get additional information about the location (reverse geocoding)
    const geocodingResponse = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${geocoderApiKey}`
    );
    const geocodingData = await geocodingResponse.json();

    // Get astronauts currently in space
    const astronautsResponse = await fetch(
      "http://api.open-notify.org/astros.json"
    );
    const astronautsData = await astronautsResponse.json();

    // Filter to only show ISS astronauts
    const issAstronauts = astronautsData.people.filter(
      (person: { craft: string }) => person.craft === "ISS"
    );

    // Calculate orbital data (approximate)
    const altitude = 408; // km (average altitude)
    const velocity = 27600; // km/h (average velocity)
    const orbitalPeriod = 92.68; // minutes

    // Determine if ISS is in daylight or night
    // This is a simplified calculation
    const now = new Date();
    const sunriseHour = 6; // 6 AM
    const sunsetHour = 18; // 6 PM
    const currentHour = now.getUTCHours();
    const isDaylight = currentHour >= sunriseHour && currentHour < sunsetHour;

    // Prepare the response
    const response = {
      timestamp: issLocationData.timestamp,
      iss_position: {
        latitude,
        longitude,
      },
      location_info: {
        over_land: geocodingData.results.length > 0,
        region:
          geocodingData.results.length > 0
            ? geocodingData.results[0].components.country || "Ocean"
            : "Ocean",
        formatted:
          geocodingData.results.length > 0
            ? geocodingData.results[0].formatted
            : "Over Ocean",
      },
      orbital_data: {
        altitude_km: altitude,
        velocity_kmh: velocity,
        orbital_period_minutes: orbitalPeriod,
        is_daylight: isDaylight,
      },
      crew: {
        total: issAstronauts.length,
        astronauts: issAstronauts.map(
          (person: { name: string }) => person.name
        ),
      },
      request_info: {
        format,
        user_agent: request.headers.get("user-agent") || "Unknown",
      },
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("Error fetching ISS data:", error);
    return NextResponse.json(
      { error: "Failed to fetch ISS data. Please try again later." },
      { status: 500 }
    );
  }
}

// Example request:
// curl -X GET 'https://api/space/iss'
