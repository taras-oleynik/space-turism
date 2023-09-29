import duglas from "../images/image-douglas-hurley.png";
import SwitcherPoints from "./SwitcherPoints";

function Duglas({ crewMember, setCrewMember }) {
  return (
    <div className="crew-data">
      <div className="crew-info">
        <h4 className="pick-dest-title">
          <span className="dest-num">02</span>
          Meet your crew
        </h4>
        <div className="info">
          <h4 className="crew-position">Commander</h4>
          <h2 className="name-crew-member">Douglas Hurley</h2>
          <p className="crew-member-desc">
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
        </div>
        <SwitcherPoints crewMember={crewMember} setCrewMember={setCrewMember} />
      </div>
      <div className="crew-photo">
        <img src={duglas} alt="commander" />;
      </div>
    </div>
  );
}

export default Duglas;
