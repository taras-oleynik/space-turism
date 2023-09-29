import mark from "../images/image-mark-shuttleworth.png";
import SwitcherPoints from "./SwitcherPoints";

function Mark({ crewMember, setCrewMember }) {
  return (
    <div className="crew-data">
      <div className="crew-info">
        <h4 className="pick-dest-title">
          <span className="dest-num">02</span>
          Meet your crew
        </h4>
        <div className="info">
          <h4 className="crew-position">Mission Specialist </h4>
          <h2 className="name-crew-member">Mark Shuttleworth</h2>
          <p className="crew-member-desc">
            Mark Richard Shuttleworth is the founder and CEO of Canonical, the
            company behind the Linux-based Ubuntu operating system. Shuttleworth
            became the first South African to travel to space as a space
            tourist.
          </p>
        </div>
        <SwitcherPoints crewMember={crewMember} setCrewMember={setCrewMember} />
      </div>
      <div className="crew-photo">
        <img src={mark} alt="commander" />;
      </div>
    </div>
  );
}

export default Mark;
