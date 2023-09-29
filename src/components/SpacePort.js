import imageSpaceCapsule from "../images/image-spaceport-landscape.jpg";
import Nav from "./Nav";
import SwitcherTechnology from "./SwitcherTechnology";
function SpacePort({ launchPage, setLaunchPage }) {
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
              <h2 className="launch-title">Spaceport</h2>
              <p className="short-descr">
                A spaceport or cosmodrome is a site for launching (or receiving)
                spacecraft, by analogy to the seaport for ships or airport for
                aircraft. Based in the famous Cape Canaveral, our spaceport is
                ideally situated to take advantage of the Earth’s rotation for
                launch.
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
export default SpacePort;
