import Nav from "./Nav";
import SubNav from "./SubNav";
import moon from "../images/image-moon.png";
import "./destenation.css";

function Moon({ planet, setPlanet }) {
  return (
    <div className="destanation-container">
      <Nav />
      <div className="dest-data">
        <div className="planet-view">
          <h4 className="pick-dest-title">
            <span className="dest-num">01</span>
            Pick your Destanation
          </h4>
          <img className="planet-img" src={moon} alt="moon" />;
        </div>
        <div className="planet-info">
          <SubNav setPlanet={setPlanet} planet={planet} />
          <div className="info">
            <h1>Moon</h1>
            <p>
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>
            <div className="planet-div-line"></div>
            <div className="planet-dist-traval-info">
              <div className="avg-dist">
                <p className="avg-dist-text">Avg. distance</p>
                <p className="avg-dist-data">384,400 km</p>
              </div>
              <div className="est-travel-time">
                <p className="travel-time-text">Est. travel time</p>
                <p className="travel-time-data">3 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Moon;
