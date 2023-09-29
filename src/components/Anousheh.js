import anousheh from "../images/image-anousheh-ansari.png";
import SwitcherPoints from "./SwitcherPoints";

function Anousheh({ crewMember, setCrewMember }) {
  return (
    <div className="crew-data">
      <div className="crew-info">
        <h4 className="pick-dest-title">
          <span className="dest-num">02</span>
          Meet your crew
        </h4>
        <div className="info">
          <h4 className="crew-position">Flight Engineer </h4>
          <h2 className="name-crew-member">Victor Glover</h2>
          <p className="crew-member-desc">
            Anousheh Ansari Anousheh Ansari is an Iranian American engineer and
            co-founder of Prodea Systems. Ansari was the fourth self-funded
            space tourist, the first self-funded woman to fly to the ISS, and
            the first Iranian in space.
          </p>
        </div>
        <SwitcherPoints crewMember={crewMember} setCrewMember={setCrewMember} />
      </div>
      <div className="crew-photo">
        <img src={anousheh} alt="commander" />;
      </div>
    </div>
  );
}

export default Anousheh;
