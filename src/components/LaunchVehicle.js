import launch from "../images/image-launch-vehicle-landscape.jpg";
import Nav from "./Nav";
import SwitcherTechnology from "./SwitcherTechnology";
function LaunchVehicle({ launchPage, setLaunchPage }) {
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
              <h2 className="launch-title">Launch vehicle</h2>
              <p className="short-descr">
                A launch vehicle or carrier rocket is a rocket-propelled vehicle
                used to carry a payload from Earth's surface to space, usually
                to Earth orbit or beyond. Our WEB-X carrier rocket is the most
                powerful in operation. Standing 150 metres tall, it's quite an
                awe-inspiring sight on the launch pad!
              </p>
            </div>
          </div>
        </div>
        <div className="technology-photo">
          <img src={launch} alt="launch" />;
        </div>
      </div>
    </div>
  );
}
export default LaunchVehicle;
