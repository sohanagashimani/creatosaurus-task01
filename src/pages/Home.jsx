import Dynamic from "../components/dynamic/Dynamic";
import Navbar from "../components/navBar/Navbar";
import Static from "../components/static/Static";

function home() {
  return (
    <div>
      <Navbar />
      <Static />
      <Dynamic />
    </div>
  );
}

export default home;
