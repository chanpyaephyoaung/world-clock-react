import { useEffect, useState } from "react";
import TmzContext from "./tmz-context";
import { getCurrentLocation, fetchCurrentTmz } from "../utils/location";
import { fetchTmzs } from "../utils/timezones";
import Loader from "../components/loader/LoaderPage";
import ErrorPage from "../components/error/ErrorPage";

let initial = false;

const TmzProvider = props => {
  const [initialTmz, setInitialTmz] = useState("");
  const [currentTmz, setCurrentTmz] = useState("");
  const [tmzData, setTmzData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("Something went wrong!");

  useEffect(() => {
    const initiate = async () => {
      try {
        // Get current coords using geolocation
        const geolocationData = await getCurrentLocation();
        const { latitude: lat, longitude: long } = geolocationData;

        // Fetch current timezone using current coords
        const initialTmz = await fetchCurrentTmz(lat, long);
        setCurrentTmz(initialTmz);

        // Set initial tmz for once only
        if (!initial) {
          initial = true;
          setInitialTmz(initialTmz);
        }

        // Fetch timezones
        const fetchedTmzData = await fetchTmzs();
        setTmzData(fetchedTmzData);
      } catch (err) {
        setHasError(true);
        setErrorMsg(err.message);
      }
      setIsLoading(false);
    };
    initiate();
  }, []);

  const handleSetTmz = tmz => {
    setCurrentTmz(tmz);
  };

  const tmzContext = {
    initialTmz,
    currentTmz,
    tmzData,
    setTmz: handleSetTmz,
  };

  if (isLoading) return <Loader message="Loading..." />;

  if (hasError && !isLoading) return <ErrorPage message={errorMsg} />;

  return <TmzContext.Provider value={tmzContext}>{props.children}</TmzContext.Provider>;
};

export default TmzProvider;
