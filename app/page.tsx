"use client";
import {
  Calendar,
  ChevronDown,
  Clipboard,
  ClipboardCheck,
  OrbitIcon,
  RocketIcon,
  SparklesIcon,
} from "lucide-react";
import { useState } from "react";

const Home = () => {
  // Track copied state for each button
  const [copiedStates, setCopiedStates] = useState({
    marsGet: false,
    marsPost: false,
    issGet: false,
    todayGet: false,
    marsGetResponse: false,
    marsPostResponse: false,
    issResponse: false,
    todayResponse: false,
  });

  // Handle copy function
  const handleCopy = (text: string, buttonId: string) => {
    navigator.clipboard.writeText(text);

    // Update the copied state for this specific button
    setCopiedStates((prev) => ({
      ...prev,
      [buttonId]: true,
    }));

    // Reset the copied state after 2 seconds
    setTimeout(() => {
      setCopiedStates((prev) => ({
        ...prev,
        [buttonId]: false,
      }));
    }, 2000);
  };

  // Toggle response format visibility
  const toggleResponseFormat = (id: string) => {
    const content = document.getElementById(id);
    if (content) {
      content.classList.toggle("hidden");
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 p-4 md:p-8 font-sans">
      <header className="max-w-5xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
          Space API
        </h1>
        <p className="text-gray-300 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          Explore the cosmos with our Space API. Access Mars rover photos, ISS
          location data, and astronomy picture of the day.
        </p>
      </header>

      <main className="max-w-5xl mx-auto">
        {/* API Method Legend */}
        <div className="flex justify-center gap-6 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            <span className="text-xs text-gray-300 uppercase tracking-wider font-medium">
              GET
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-xs text-gray-300 uppercase tracking-wider font-medium">
              POST
            </span>
          </div>
        </div>

        {/* API Endpoints Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mars GET API */}
          <div className="bg-gray-900 rounded-xl shadow-lg border border-gray-800 overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 mr-3 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white flex items-center justify-center shadow-md">
                  <SparklesIcon size={20} />
                </div>
                <div>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-emerald-600/90 text-white">
                    GET
                  </span>
                  <h2 className="text-base font-semibold text-white ml-1 inline-block">
                    /space/mars
                  </h2>
                </div>
              </div>

              <p className="text-sm text-gray-300 mb-4">
                Fetches Mars rover data including latest photos, cameras, and
                mission details.
              </p>

              <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 mb-5 relative group/code border border-gray-700/80 transition-all duration-300 hover:border-gray-600">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-xs font-medium text-gray-300">
                    Example Request
                  </h4>
                  <button
                    className="text-xs px-2.5 py-1.5 bg-gray-700 rounded-md border border-gray-600 hover:bg-gray-600 transition-all duration-200 flex items-center gap-1.5 text-gray-200"
                    onClick={() =>
                      handleCopy(
                        `curl -X GET 'https://space-api-sevice.vercel.app/space/mars'`,
                        "marsGet"
                      )
                    }
                  >
                    {copiedStates.marsGet ? (
                      <>
                        <ClipboardCheck size={14} />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Clipboard size={14} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="bg-gray-900/90 text-gray-100 p-3 rounded-lg overflow-x-auto text-xs">
                  <code>{`curl -X GET 'https://space-api-sevice.vercel.app/space/mars'`}</code>
                </pre>
              </div>

              <div className="group/response">
                <button
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-1.5 bg-gray-800/50 hover:bg-gray-800 px-3 py-2 rounded-lg w-full justify-between border border-gray-700/50"
                  onClick={() =>
                    toggleResponseFormat("mars-get-response-format")
                  }
                >
                  <span>Response Format</span>
                  <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover/response:rotate-180" />
                </button>
                <div
                  id="mars-get-response-format"
                  className="mt-3 hidden bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 relative border border-gray-700/80 overflow-hidden transition-all duration-300 ease-in-out"
                >
                  <button
                    className="absolute top-3 right-3 text-xs px-2.5 py-1.5 bg-gray-700 rounded-md border border-gray-600 hover:bg-gray-600 transition-all duration-200 flex items-center gap-1.5 text-gray-200 z-10"
                    onClick={() =>
                      handleCopy(
                        `{
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
  ]
}`,
                        "marsGetResponse"
                      )
                    }
                  >
                    {copiedStates.marsGetResponse ? (
                      <>
                        <ClipboardCheck size={14} />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Clipboard size={14} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                  <div className="max-h-60 overflow-y-auto">
                    <pre className="bg-gray-900/90 text-gray-100 p-3 rounded-lg overflow-x-auto text-xs">
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
  ]
}`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mars POST API */}
          <div className="bg-gray-900 rounded-xl shadow-lg border border-gray-800 overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 mr-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white flex items-center justify-center shadow-md">
                  <RocketIcon size={20} />
                </div>
                <div>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-600/90 text-white">
                    POST
                  </span>
                  <h2 className="text-base font-semibold text-white ml-1 inline-block">
                    /space/mars
                  </h2>
                </div>
              </div>

              <p className="text-sm text-gray-300 mb-4">
                Fetches Mars rover photos based on specified parameters.
              </p>

              <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 mb-5 relative group/code border border-gray-700/80 transition-all duration-300 hover:border-gray-600">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-xs font-medium text-gray-300">
                    Example Request
                  </h4>
                  <button
                    className="text-xs px-2.5 py-1.5 bg-gray-700 rounded-md border border-gray-600 hover:bg-gray-600 transition-all duration-200 flex items-center gap-1.5 text-gray-200"
                    onClick={() =>
                      handleCopy(
                        `curl -X POST 'https://space-api-sevice.vercel.app/space/mars' -H 'Content-Type: application/json' -d '{"rover": "curiosity", "sol": 1000, "camera": "FHAZ"}'`,
                        "marsPost"
                      )
                    }
                  >
                    {copiedStates.marsPost ? (
                      <>
                        <ClipboardCheck size={14} />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Clipboard size={14} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="bg-gray-900/90 text-gray-100 p-3 rounded-lg overflow-x-auto text-xs">
                  <code>{`curl -X POST 'https://space-api-sevice.vercel.app/space/mars' -H 'Content-Type: application/json' -d '{"rover": "curiosity", "sol": 1000, "camera": "FHAZ"}'`}</code>
                </pre>
              </div>

              <div className="group/response mb-5">
                <button
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-1.5 bg-gray-800/50 hover:bg-gray-800 px-3 py-2 rounded-lg w-full justify-between border border-gray-700/50"
                  onClick={() =>
                    toggleResponseFormat("mars-post-response-format")
                  }
                >
                  <span>Response Format</span>
                  <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover/response:rotate-180" />
                </button>
                <div
                  id="mars-post-response-format"
                  className="mt-3 hidden bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 relative border border-gray-700/80 overflow-hidden transition-all duration-300 ease-in-out"
                >
                  <button
                    className="absolute top-3 right-3 text-xs px-2.5 py-1.5 bg-gray-700 rounded-md border border-gray-600 hover:bg-gray-600 transition-all duration-200 flex items-center gap-1.5 text-gray-200 z-10"
                    onClick={() =>
                      handleCopy(
                        `{
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
}`,
                        "marsPostResponse"
                      )
                    }
                  >
                    {copiedStates.marsPostResponse ? (
                      <>
                        <ClipboardCheck size={14} />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Clipboard size={14} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                  <div className="max-h-60 overflow-y-auto">
                    <pre className="bg-gray-900/90 text-gray-100 p-3 rounded-lg overflow-x-auto text-xs">
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
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-200 mb-3">
                  Required Parameters:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-xs font-medium bg-blue-900/40 text-blue-300 px-2.5 py-1.5 rounded-md mr-2 border border-blue-800/50">
                      rover
                    </span>
                    <span className="text-xs text-gray-300 pt-1">
                      Valid values: &quot;curiosity&quot;,
                      &quot;opportunity&quot;, &quot;spirit&quot;,
                      &quot;perseverance&quot;
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xs font-medium bg-blue-900/40 text-blue-300 px-2.5 py-1.5 rounded-md mr-2 border border-blue-800/50">
                      sol
                    </span>
                    <span className="text-xs text-gray-300 pt-1">
                      Mars day (integer). Example: 1000
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xs font-medium bg-blue-900/40 text-blue-300 px-2.5 py-1.5 rounded-md mr-2 border border-blue-800/50">
                      camera
                    </span>
                    <span className="text-xs text-gray-300 pt-1">
                      Valid values: &quot;FHAZ&quot;, &quot;RHAZ&quot;,
                      &quot;MAST&quot;, &quot;CHEMCAM&quot;, &quot;MAHLI&quot;,
                      &quot;MARDI&quot;, &quot;NAVCAM&quot;, etc.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ISS GET API */}
          <div className="bg-gray-900 rounded-xl shadow-lg border border-gray-800 overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 mr-3 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white flex items-center justify-center shadow-md">
                  <OrbitIcon size={20} />
                </div>
                <div>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-emerald-600/90 text-white">
                    GET
                  </span>
                  <h2 className="text-base font-semibold text-white ml-1 inline-block">
                    /space/iss
                  </h2>
                </div>
              </div>

              <p className="text-sm text-gray-300 mb-4">
                Get real-time information about the International Space Station,
                including its current location, crew members, and orbital data.
              </p>

              <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 mb-5 relative group/code border border-gray-700/80 transition-all duration-300 hover:border-gray-600">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-xs font-medium text-gray-300">
                    Example Request
                  </h4>
                  <button
                    className="text-xs px-2.5 py-1.5 bg-gray-700 rounded-md border border-gray-600 hover:bg-gray-600 transition-all duration-200 flex items-center gap-1.5 text-gray-200"
                    onClick={() =>
                      handleCopy(
                        `curl -X GET 'https://space-api-sevice.vercel.app/space/iss'`,
                        "issGet"
                      )
                    }
                  >
                    {copiedStates.issGet ? (
                      <>
                        <ClipboardCheck size={14} />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Clipboard size={14} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="bg-gray-900/90 text-gray-100 p-3 rounded-lg overflow-x-auto text-xs">
                  <code>{`curl -X GET 'https://space-api-sevice.vercel.app/space/iss'`}</code>
                </pre>
              </div>

              <div className="group/response">
                <button
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-1.5 bg-gray-800/50 hover:bg-gray-800 px-3 py-2 rounded-lg w-full justify-between border border-gray-700/50"
                  onClick={() => toggleResponseFormat("iss-response-format")}
                >
                  <span>Response Format</span>
                  <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover/response:rotate-180" />
                </button>
                <div
                  id="iss-response-format"
                  className="mt-3 hidden bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 relative border border-gray-700/80 overflow-hidden transition-all duration-300 ease-in-out"
                >
                  <button
                    className="absolute top-3 right-3 text-xs px-2.5 py-1.5 bg-gray-700 rounded-md border border-gray-600 hover:bg-gray-600 transition-all duration-200 flex items-center gap-1.5 text-gray-200 z-10"
                    onClick={() =>
                      handleCopy(
                        `{
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
  }
}`,
                        "issResponse"
                      )
                    }
                  >
                    {copiedStates.issResponse ? (
                      <>
                        <ClipboardCheck size={14} />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Clipboard size={14} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                  <div className="max-h-60 overflow-y-auto">
                    <pre className="bg-gray-900/90 text-gray-100 p-3 rounded-lg overflow-x-auto text-xs">
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
  }
}`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Today GET API */}
          <div className="bg-gray-900 rounded-xl shadow-lg border border-gray-800 overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 mr-3 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white flex items-center justify-center shadow-md">
                  <Calendar size={20} />
                </div>
                <div>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-emerald-600/90 text-white">
                    GET
                  </span>
                  <h2 className="text-base font-semibold text-white ml-1 inline-block">
                    /space/today
                  </h2>
                </div>
              </div>

              <p className="text-sm text-gray-300 mb-4">
                Fetches NASA&apos;s Astronomy Picture of the Day (APOD) and
                space-related news for today.
              </p>

              <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 mb-5 relative group/code border border-gray-700/80 transition-all duration-300 hover:border-gray-600">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-xs font-medium text-gray-300">
                    Example Request
                  </h4>
                  <button
                    className="text-xs px-2.5 py-1.5 bg-gray-700 rounded-md border border-gray-600 hover:bg-gray-600 transition-all duration-200 flex items-center gap-1.5 text-gray-200"
                    onClick={() =>
                      handleCopy(
                        `curl -X GET 'https://space-api-sevice.vercel.app/space/today'`,
                        "todayGet"
                      )
                    }
                  >
                    {copiedStates.todayGet ? (
                      <>
                        <ClipboardCheck size={14} />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Clipboard size={14} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="bg-gray-900/90 text-gray-100 p-3 rounded-lg overflow-x-auto text-xs">
                  <code>{`curl -X GET 'https://space-api-sevice.vercel.app/space/today'`}</code>
                </pre>
              </div>

              <div className="group/response">
                <button
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-1.5 bg-gray-800/50 hover:bg-gray-800 px-3 py-2 rounded-lg w-full justify-between border border-gray-700/50"
                  onClick={() => toggleResponseFormat("today-response-format")}
                >
                  <span>Response Format</span>
                  <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover/response:rotate-180" />
                </button>
                <div
                  id="today-response-format"
                  className="mt-3 hidden bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 relative border border-gray-700/80 overflow-hidden transition-all duration-300 ease-in-out"
                >
                  <button
                    className="absolute top-3 right-3 text-xs px-2.5 py-1.5 bg-gray-700 rounded-md border border-gray-600 hover:bg-gray-600 transition-all duration-200 flex items-center gap-1.5 text-gray-200 z-10"
                    onClick={() =>
                      handleCopy(
                        `{
  "apod": {
    "title": "A Galaxy Beyond Stars, Gas, and Dust",
    "explanation": "This galaxy isn't visible to the eye...",
    "image_url": "https://apod.nasa.gov/apod/image/2304/M104_HubbleSchmidt_1019.jpg"
  },
  "news": [
    {
      "title": "SpaceX launches Falcon 9 with Starlink satellites",
      "content": "SpaceX launched another batch of Starlink satellites...",
      "link": "https://www.space.com/spacex-starlink-launch-april-2023"
    }
  ]
}`,
                        "todayResponse"
                      )
                    }
                  >
                    {copiedStates.todayResponse ? (
                      <>
                        <ClipboardCheck size={14} />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Clipboard size={14} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                  <div className="max-h-60 overflow-y-auto">
                    <pre className="bg-gray-900/90 text-gray-100 p-3 rounded-lg overflow-x-auto text-xs">
                      <code>{`{
  "apod": {
    "title": "A Galaxy Beyond Stars, Gas, and Dust",
    "explanation": "This galaxy isn't visible to the eye...",
    "image_url": "https://apod.nasa.gov/apod/image/2304/M104_HubbleSchmidt_1019.jpg"
  },
  "news": [
    {
      "title": "SpaceX launches Falcon 9 with Starlink satellites",
      "content": "SpaceX launched another batch of Starlink satellites...",
      "link": "https://www.space.com/spacex-starlink-launch-april-2023"
    }
  ]
}`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="max-w-7xl mx-auto mt-24 text-center text-sm text-gray-400">
        <p className="flex items-center justify-center gap-1">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 h-1.5 w-1.5 rounded-full inline-block mr-1"></span>
          Space API • Made by
          <a
            className="relative inline-block text-gray-300 transition-colors duration-200 hover:text-white after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-px after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ml-1"
            href="https://x.com/madebyshaurya"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shaurya
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
