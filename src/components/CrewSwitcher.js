import CrewMark from "./CrewMark";
import Douglas from "./Douglas";
import Victor from "./Victor";
import Anousheh from "./Anousheh";
function CrewSwitcher({ crewMember, setCrewMember }) {
  if (crewMember === "2") {
    return <CrewMark crewMember={crewMember} setCrewMember={setCrewMember} />;
  }
  if (crewMember === "3") {
    return <Victor crewMember={crewMember} setCrewMember={setCrewMember} />;
  }
  if (crewMember === "4") {
    return <Anousheh crewMember={crewMember} setCrewMember={setCrewMember} />;
  }

  return <Douglas crewMember={crewMember} setCrewMember={setCrewMember} />;
}

export default CrewSwitcher;
