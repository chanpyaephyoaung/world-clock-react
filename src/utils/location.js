// Promisifying Geolocation
export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          resolve({ latitude, longitude });
        },
        error => {
          if (error.code === error.PERMISSION_DENIED) {
            reject(new Error("Geolocation is disabled in the browser."));
          } else {
            reject(new Error("Error getting location: " + error.message));
          }
        }
      );
    } else {
      reject(new Error("Geolocation is not supported in this browser."));
    }
  });
};

// Reverse Geocoding
export const reverseGeoCodeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_REVERSE_GEOCODE_API_KEY,
    "X-RapidAPI-Host": import.meta.env.VITE_REVERSE_GEOCODE_API_HOST,
  },
};

export const fetchCurrentTmz = async (lat, long) => {
  try {
    const response = await fetch(
      `https://geocodeapi.p.rapidapi.com/GetTimezone?latitude=${lat}&longitude=${long}`,
      reverseGeoCodeOptions
    );

    if (!response.ok) throw new Error("Could not fetch current timezone!");

    const data = await response.json();
    return data['TimeZoneId'];
  } catch (err) {
    console.error(`${err.message} 😭`);
    throw err;
  }
};
