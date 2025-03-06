"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 p-4 md:p-8 font-[family-name:var(--font-geist-sans)]">
      <header className="max-w-7xl mx-auto mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
          Space API
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
          Get key info of space like ISS location, Mars data and more!
        </p>
      </header>

      <main className="max-w-7xl mx-auto">
        {/* API Method Legend */}
        <div className="flex justify-center gap-6 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-medium">
              GET
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-medium">
              POST
            </span>
          </div>
        </div>

        {/* API Endpoints Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mars GET API */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="h-7 w-7 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-red-500 dark:text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                    GET
                  </span>
                  <h2 className="text-base font-semibold text-gray-900 dark:text-white ml-1 inline-block">
                    /api/space/mars
                  </h2>
                </div>
              </div>

              <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                Fetches the latest photos from the Curiosity rover and current
                Mars weather data.
              </p>

              <div className="bg-gray-50 dark:bg-gray-900/80 rounded-lg p-3 mb-4 relative group border border-gray-100 dark:border-gray-800">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    Example Request
                  </h4>
                  <button
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs px-2 py-1 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        `curl -X GET 'https://api/space/mars'`
                      );
                    }}
                  >
                    Copy
                  </button>
                </div>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-xs">
                  <code>{`curl -X GET 'https://api/space/mars'`}</code>
                </pre>
              </div>

              <details className="group response-details">
                <summary className="flex items-center justify-between cursor-pointer">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200">
                    Response Format
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-500 dark:text-gray-400 transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="mt-3 bg-gray-50 dark:bg-gray-900/80 rounded-lg p-3 relative group border border-gray-100 dark:border-gray-800 overflow-hidden transition-all duration-300 ease-in-out max-h-0 group-open:max-h-96">
                  <button
                    className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs px-2 py-1 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => {
                      navigator.clipboard.writeText(`{
  "latest_photos": [
    {
      "id": 102693,
      "sol": 1000,
      "camera": {
        "id": 20,
        "name": "FHAZ",
        "rover_id": 5,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.jpl.nasa.gov/...",
      "earth_date": "2015-05-30",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active"
      }
    }
  ],
  "weather": {
    // Mars weather data
  }
}`);
                    }}
                  >
                    Copy
                  </button>
                  <div className="max-h-40 overflow-y-auto">
                    <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-xs">
                      <code>{`{
  "latest_photos": [
    {
      "id": 102693,
      "sol": 1000,
      "camera": {
        "id": 20,
        "name": "FHAZ",
        "rover_id": 5,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.jpl.nasa.gov/...",
      "earth_date": "2015-05-30",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active"
      }
    }
  ],
  "weather": {
    // Mars weather data
  }
}`}</code>
                    </pre>
                  </div>
                </div>
              </details>
            </div>
          </div>

          {/* Mars POST API */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="h-7 w-7 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-red-500 dark:text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                    POST
                  </span>
                  <h2 className="text-base font-semibold text-gray-900 dark:text-white ml-1 inline-block">
                    /api/space/mars
                  </h2>
                </div>
              </div>

              <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                Fetches Mars rover photos based on specified rover, sol (Mars
                day), and camera.
              </p>

              <div className="bg-gray-50 dark:bg-gray-900/80 rounded-lg p-3 mb-4 relative group border border-gray-100 dark:border-gray-800">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    Example Request
                  </h4>
                  <button
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs px-2 py-1 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        `curl -X POST 'https://api/space/mars' -H 'Content-Type: application/json' -d '{"rover": "curiosity", "sol": 1000, "camera": "FHAZ"}'`
                      );
                    }}
                  >
                    Copy
                  </button>
                </div>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-xs">
                  <code>{`curl -X POST 'https://api/space/mars' -H 'Content-Type: application/json' -d '{"rover": "curiosity", "sol": 1000, "camera": "FHAZ"}'`}</code>
                </pre>
              </div>

              <details className="group response-details">
                <summary className="flex items-center justify-between cursor-pointer">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200">
                    Response Format
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-500 dark:text-gray-400 transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="mt-3 bg-gray-50 dark:bg-gray-900/80 rounded-lg p-3 relative group border border-gray-100 dark:border-gray-800 overflow-hidden transition-all duration-300 ease-in-out max-h-0 group-open:max-h-96">
                  <button
                    className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs px-2 py-1 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => {
                      navigator.clipboard.writeText(`{
  "photos": [
    {
      "id": 102693,
      "sol": 1000,
      "camera": {
        "id": 20,
        "name": "FHAZ",
        "rover_id": 5,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.jpl.nasa.gov/...",
      "earth_date": "2015-05-30",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active"
      }
    }
  ]
}`);
                    }}
                  >
                    Copy
                  </button>
                  <div className="max-h-40 overflow-y-auto">
                    <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-xs">
                      <code>{`{
  "photos": [
    {
      "id": 102693,
      "sol": 1000,
      "camera": {
        "id": 20,
        "name": "FHAZ",
        "rover_id": 5,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.jpl.nasa.gov/...",
      "earth_date": "2015-05-30",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active"
      }
    }
  ]
}`}</code>
                    </pre>
                  </div>
                </div>
              </details>
            </div>
          </div>

          {/* ISS GET API */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 mr-3 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-500 dark:text-emerald-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                    GET
                  </span>
                  <h2 className="text-base font-semibold text-gray-900 dark:text-white ml-1 inline-block">
                    /api/space/iss
                  </h2>
                </div>
              </div>

              <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                Get real-time information about the International Space Station,
                including its current location, crew members, and orbital data.
              </p>

              <div className="bg-gray-50 dark:bg-gray-900/80 rounded-lg p-3 mb-4 relative group border border-gray-100 dark:border-gray-800">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    Example Request
                  </h4>
                  <button
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs px-2 py-1 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        `curl -X GET 'https://api/space/iss'`
                      );
                    }}
                  >
                    Copy
                  </button>
                </div>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-xs">
                  <code>{`curl -X GET 'https://api/space/iss'`}</code>
                </pre>
              </div>

              <div className="group">
                <button
                  className="text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200 flex items-center cursor-pointer"
                  onClick={() => {
                    const content = document.getElementById(
                      "iss-response-format"
                    );
                    if (content) {
                      content.classList.toggle("hidden");
                    }
                  }}
                >
                  <span>Response Format</span>
                </button>
                <div
                  id="iss-response-format"
                  className="mt-3 hidden bg-gray-50 dark:bg-gray-900/80 rounded-lg p-3 relative group border border-gray-100 dark:border-gray-800 overflow-hidden transition-all duration-300 ease-in-out"
                >
                  <button
                    className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs px-2 py-1 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => {
                      navigator.clipboard.writeText(`{
  "timestamp": 1625176948,
  "iss_position": {
    "latitude": 45.5678,
    "longitude": -122.6789
  },
  "location_info": {
    "over_land": true,
    "region": "United States",
    "formatted": "Portland, Oregon, United States"
  },
  "orbital_data": {
    "altitude_km": 408,
    "velocity_kmh": 27600,
    "orbital_period_minutes": 92.68,
    "is_daylight": true
  },
  "crew": {
    "total": 7,
    "astronauts": [
      "Akihiko Hoshide",
      "Mark Vande Hei",
      "Shane Kimbrough",
      "Megan McArthur",
      "Thomas Pesquet",
      "Pyotr Dubrov",
      "Oleg Novitskiy"
    ]
  },
  "next_passes": {
    "info": "For ISS pass predictions over a specific location, provide lat/long parameters"
  },
  "request_info": {
    "format": "json",
    "user_agent": "curl/7.64.1"
  }
}`);
                    }}
                  >
                    Copy
                  </button>
                  <div className="max-h-40 overflow-y-auto">
                    <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-xs">
                      <code>{`{
  "timestamp": 1625176948,
  "iss_position": {
    "latitude": 45.5678,
    "longitude": -122.6789
  },
  "location_info": {
    "over_land": true,
    "region": "United States",
    "formatted": "Portland, Oregon, United States"
  },
  "orbital_data": {
    "altitude_km": 408,
    "velocity_kmh": 27600,
    "orbital_period_minutes": 92.68,
    "is_daylight": true
  },
  "crew": {
    "total": 7,
    "astronauts": [
      "Akihiko Hoshide",
      "Mark Vande Hei",
      "Shane Kimbrough",
      "Megan McArthur",
      "Thomas Pesquet",
      "Pyotr Dubrov",
      "Oleg Novitskiy"
    ]
  },
  "next_passes": {
    "info": "For ISS pass predictions over a specific location, provide lat/long parameters"
  },
  "request_info": {
    "format": "json",
    "user_agent": "curl/7.64.1"
  }
}`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Today GET API */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="h-7 w-7 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-blue-500 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                    GET
                  </span>
                  <h2 className="text-base font-semibold text-gray-900 dark:text-white ml-1 inline-block">
                    /api/space/today
                  </h2>
                </div>
              </div>

              <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                Fetches NASA&apos;s Astronomy Picture of the Day (APOD) and the
                latest space-related news.
              </p>

              <div className="bg-gray-50 dark:bg-gray-900/80 rounded-lg p-3 mb-4 relative group border border-gray-100 dark:border-gray-800">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    Example Request
                  </h4>
                  <button
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs px-2 py-1 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        `curl -X GET 'https://api/space/today'`
                      );
                    }}
                  >
                    Copy
                  </button>
                </div>
                <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-xs">
                  <code>{`curl -X GET 'https://api/space/today'`}</code>
                </pre>
              </div>

              <details className="group response-details">
                <summary className="flex items-center justify-between cursor-pointer">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200">
                    Response Format
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-500 dark:text-gray-400 transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="mt-3 bg-gray-50 dark:bg-gray-900/80 rounded-lg p-3 relative group border border-gray-100 dark:border-gray-800 overflow-hidden transition-all duration-300 ease-in-out max-h-0 group-open:max-h-96">
                  <button
                    className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs px-2 py-1 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => {
                      navigator.clipboard.writeText(`{
  "apod": {
    "title": "A Martian Eclipse: Phobos Crosses the Sun",
    "explanation": "What&apos;s that passing in front of the Sun? It looks like a moon, but it can&apos;t be Earth&apos;s Moon, because it isn&apos;t round...",
    "image_url": "https://apod.nasa.gov/apod/image/2303/PhobosTransit_Curiosity_960.jpg"
  },
  "news": [
    {
      "title": "SpaceX launches Starship in first successful test flight",
      "content": "SpaceX&apos;s Starship, the most powerful rocket ever built, completed its first successful test flight...",
      "link": "https://example.com/spacex-starship-news"
    }
  ]
}`);
                    }}
                  >
                    Copy
                  </button>
                  <div className="max-h-40 overflow-y-auto">
                    <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-xs">
                      <code>{`{
  "apod": {
    "title": "A Martian Eclipse: Phobos Crosses the Sun",
    "explanation": "What&apos;s that passing in front of the Sun? It looks like a moon, but it can&apos;t be Earth&apos;s Moon, because it isn&apos;t round...",
    "image_url": "https://apod.nasa.gov/apod/image/2303/PhobosTransit_Curiosity_960.jpg"
  },
  "news": [
    {
      "title": "SpaceX launches Starship in first successful test flight",
      "content": "SpaceX&apos;s Starship, the most powerful rocket ever built, completed its first successful test flight...",
      "link": "https://example.com/spacex-starship-news"
    }
  ]
}`}</code>
                    </pre>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>
      </main>

      <footer className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-200 dark:border-gray-800 text-center text-gray-400 dark:text-gray-500 text-xs">
        <p>
          © {new Date().getFullYear()} Space API. Made by{" "}
          <Link
            href={"https://x.com/madebyshaurya"}
            target="_blank"
            className="underline hover:no-underline transition-all"
          >
            Shaurya
          </Link>
        </p>
      </footer>

      {/* Client-side script for copy button functionality */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.addEventListener('DOMContentLoaded', () => {
            const copyButtons = document.querySelectorAll('[data-copy]');
            copyButtons.forEach(button => {
              button.addEventListener('click', () => {
                const textToCopy = button.getAttribute('data-copy');
                navigator.clipboard.writeText(textToCopy);
                
                // Show feedback
                const originalText = button.textContent;
                button.textContent = 'Copied!';
                setTimeout(() => {
                  button.textContent = originalText;
                }, 2000);
              });
            });
          });
        `,
        }}
      />

      {/* Add this style to your CSS or within a <style> tag in your component */}
      <style jsx>{`
        /* Remove default details marker */
        details.response-details {
          list-style: none;
        }

        /* Hide default triangle in all browsers */
        details.response-details summary::-webkit-details-marker,
        details.response-details summary::marker {
          display: none;
        }

        /* Style for summary element */
        details.response-details summary {
          outline: none;
          padding: 0.5rem 0;
          border-radius: 0.25rem;
        }

        /* Add hover effect */
        details.response-details summary:hover {
          background-color: rgba(0, 0, 0, 0.025);
        }

        /* Dark mode hover */
        @media (prefers-color-scheme: dark) {
          details.response-details summary:hover {
            background-color: rgba(255, 255, 255, 0.05);
          }
        }
      `}</style>
    </div>
  );
}
