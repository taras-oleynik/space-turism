import imageSpaceCapsule from "../images/image-space-capsule-landscape.jpg";
import Nav from "./Nav";
import "./technology.css";
import SwitcherTechnology from "./SwitcherTechnology";
function SpaceCapsule({ launchPage, setLaunchPage }) {
  return (
    <div className="technology-container">
      <Nav />
      <h4 className="pick-dest-title">
        <span className="dest-num">03</span>
        Space launch 101
      </h4>
      <div className="technology-data">
        <SwitcherTechnology
          launchPage={launchPage}
          setLaunchPage={setLaunchPage}
        />
        <div className="technology-info">
          <div className="info">
            <div className="page-info">
              <p>The terminology... </p>
              <h2 className="launch-title">Space capsule </h2>
              <p className="short-descr">
                A space capsule is an often-crewed spacecraft that uses a
                blunt-body reentry capsule to reenter the Earth's atmosphere
                without wings. Our capsule is where you'll spend your time
                during the flight. It includes a space gym, cinema, and plenty
                of other activities to keep you entertained.
              </p>
            </div>
          </div>
        </div>
        <div className="technology-photo">
          <img src={imageSpaceCapsule} alt="imageSpaceCapsule" />;
        </div>
      </div>
    </div>
  );
}
export default SpaceCapsule;
