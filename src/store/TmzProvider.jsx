import { useEffect, useState } from "react";
import TmzContext from "./tmz-context";
import { getCurrentLocation, fetchCurrentTmz } from "../utils/location";
import { fetchTmzs } from "../utils/timezones";

const TmzProvider = props => {
  const [currentTmz, setCurrentTmz] = useState("");
  const [tmzData, setTmzData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initiate = async () => {
      try {
        // Get current coords using geolocation
        const geolocationData = await getCurrentLocation();
        const { latitude: lat, longitude: long } = geolocationData;

        // Fetch current timezone using current coords
        const initialTmz = await fetchCurrentTmz(lat, long);
        setCurrentTmz(initialTmz);

        // Fetch timezones
        const fetchedTmzData = await fetchTmzs();
        setTmzData(fetchedTmzData);
      } catch (err) {
        console.error(`${err.message} 😭😭😭`);
      }
      setIsLoading(false);
    };
    initiate();
  }, []);

  const handleSetTmz = tmz => {
    setCurrentTmz(tmz);
  };

  const tmzContext = {
    currentTmz,
    tmzData,
    setTmz: handleSetTmz,
  };

  if (isLoading) return <p>Loading Timezones...</p>;

  return <TmzContext.Provider value={tmzContext}>{props.children}</TmzContext.Provider>;
};

export default TmzProvider;
