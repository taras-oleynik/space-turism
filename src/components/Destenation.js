import Moon from "./Moon";
import Mars from "./Mars";
import Europa from "./Europa";
import Titan from "./Titan";
import { useState } from "react";
import "./destenation.css";

function Destanation() {
  const [planet, setPlanet] = useState("Moon");

  if (planet === "Mars") {
    return <Mars setPlanet={setPlanet} planet={planet} />;
  }
  if (planet === "Europa") {
    return <Europa setPlanet={setPlanet} planet={planet} />;
  }
  if (planet === "Titan") {
    return <Titan setPlanet={setPlanet} planet={planet} />;
  }

  return <Moon setPlanet={setPlanet} planet={planet} />;
}

export default Destanation;
