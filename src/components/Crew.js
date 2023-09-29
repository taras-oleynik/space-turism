import { useState } from "react";
import Nav from "./Nav";
import CrewSwitcher from "./CrewSwitcher";
import "./crew.css";

function Crew() {
  const [crewMember, setCrewMember] = useState("1");
  return (
    <div className="crew-container">
      <Nav />
      <CrewSwitcher crewMember={crewMember} setCrewMember={setCrewMember} />
    </div>
  );
}

export default Crew;
