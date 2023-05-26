import ClockWrapper from "./components/clock/ClockWrapper";
import Credit from "./components/credit/Credit";
import Header from "./components/header/Header";
import Overlay from "./components/overlay/Overlay";
import SideNav from "./components/sideNavigation/SideNav";

function App() {
  return (
    <>
      <SideNav />
      {/* <Overlay /> */}
      <Header />
      <ClockWrapper />
      <Credit />
    </>
  );
}

export default App;
