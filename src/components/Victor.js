import victor from "../images/image-victor-glover.png";
import SwitcherPoints from "./SwitcherPoints";

function Victor({ crewMember, setCrewMember }) {
  return (
    <div className="crew-data">
      <div className="crew-info">
        <h4 className="pick-dest-title">
          <span className="dest-num">02</span>
          Meet your crew
        </h4>
        <div className="info">
          <h4 className="crew-position">Pilot</h4>
          <h2 className="name-crew-member">Victor Glover</h2>
          <p className="crew-member-desc">
            Victor Glover Pilot on the first operational flight of the SpaceX
            Crew Dragon to the International Space Station. Glover is a
            commander in the U.S. Navy where he pilots an F/A-18.He was a crew
            member of Expedition 64, and served as a station systems flight
            engineer.
          </p>
        </div>
        <SwitcherPoints crewMember={crewMember} setCrewMember={setCrewMember} />
      </div>
      <div className="crew-photo">
        <img src={victor} alt="commander" />;
      </div>
    </div>
  );
}

export default Victor;
