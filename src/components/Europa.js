import Nav from "./Nav";
import mars from "../images/image-europa.png";
import "./destenation.css";
import SubNav from "./SubNav";
function Europa({ planet, setPlanet }) {
  return (
    <div className="destanation-container">
      <Nav />
      <div className="dest-data">
        <div className="planet-view">
          <h4 className="pick-dest-title">
            <span className="dest-num">01</span>
            Pick your Destanation
          </h4>
          <img className="planet-img" src={mars} alt="mars" />;
        </div>
        <div className="planet-info">
          <SubNav setPlanet={setPlanet} planet={planet} />
          <div className="info">
            <h1>Europa</h1>
            <p>
              The smallest of the four Galilean moons orbiting Jupiter, Europa
              is a winter lover’s dream. With an icy surface, it’s perfect for a
              bit of ice skating, curling, hockey, or simple relaxation in your
              snug wintery cabin.
            </p>
            <div className="planet-div-line"></div>
            <div className="planet-dist-traval-info">
              <div className="avg-dist">
                <p className="avg-dist-text">Avg. distance</p>
                <p className="avg-dist-data">628 mil.</p>
              </div>
              <div className="est-travel-time">
                <p className="travel-time-text">Est. travel time</p>
                <p className="travel-time-data">3 years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Europa;
