import { useEffect, useState } from "react";
import TmzContext from "./tmz-context";
import { getCurrentLocation, fetchCurrentTmz } from "../utils/location";
import { fetchTmzs } from "../utils/timezones";
import Loader from "../components/loader/LoaderPage";
import ErrorPage from "../components/error/ErrorPage";

let initial = false;

const TmzProvider = props => {
  const [initialTmz, setInitialTmz] = useState("");
  const [initialTmzContentId, setInitialTmzContentId] = useState(0);

  const [currentTmz, setCurrentTmz] = useState("");
  const [tmzData, setTmzData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("Something went wrong!");

  const [toggleActiveIndex, setToggleActiveIndex] = useState();
  const [scrollToActiveTmz, setScrollToActiveTmz] = useState(false);

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

        // Set and Store initial tmz and initial tmz content ID for once only
        // Suppose 'Asia/Yangon' is an initial tmz...
        // If a content that has a timezones that contain 'Asia/Yangon' has an ID of '1', then store that
        if (!initial) {
          initial = true;
          // Store initial tmz
          setInitialTmz(initialTmz);

          // Set initial content tmz id
          const initialContentId = fetchedTmzData.find(
            ({ timezones }) => timezones.find(tmz => tmz === initialTmz) === initialTmz
          ).id;
          setInitialTmzContentId(initialContentId);
        }
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

  const handleSetActiveTmzScroll = status => {
    setScrollToActiveTmz(status);
  };

  const handleSetToggleActiveIndex = id => {
    setToggleActiveIndex(id);
  };

  const tmzContext = {
    initialTmzContentId,
    initialTmz,
    currentTmz,
    setTmz: handleSetTmz,
    tmzData,
    toggleActiveIndex,
    setToggleActiveIndex: handleSetToggleActiveIndex,
    scrollToActiveTmz,
    setActiveTmzScroll: handleSetActiveTmzScroll,
  };

  if (isLoading) return <Loader message="Loading..." />;

  if (hasError && !isLoading) return <ErrorPage message={errorMsg} />;

  return <TmzContext.Provider value={tmzContext}>{props.children}</TmzContext.Provider>;
};

export default TmzProvider;
