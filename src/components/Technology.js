import { useState } from "react";
import LaunchVehicle from "./LaunchVehicle";
import SpaceCapsule from "./SpaceCapsule";
import SpacePort from "./SpacePort";

function Technology() {
  const [launchPage, setLaunchPage] = useState("1");
  console.log(launchPage);

  if (launchPage == 2) {
    return <SpacePort launchPage={launchPage} setLaunchPage={setLaunchPage} />;
  }
  if (launchPage == 3) {
    return (
      <SpaceCapsule launchPage={launchPage} setLaunchPage={setLaunchPage} />
    );
  }
  return (
    <LaunchVehicle launchPage={launchPage} setLaunchPage={setLaunchPage} />
  );
}

export default Technology;
