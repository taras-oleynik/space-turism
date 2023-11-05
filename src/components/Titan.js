import Nav from "./Nav";
import mars from "../images/image-titan.png";
import "./destenation.css";
import SubNav from "./SubNav";
function Titan({ planet, setPlanet }) {
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
            <h1>Titan</h1>
            <p>
              The only moon known to have a dense atmosphere other than Earth,
              Titan is a home away from home (just a few hundred degrees
              colder!). As a bonus, you get striking views of the Rings of
              Saturn.
            </p>
            <div className="planet-div-line"></div>
            <div className="planet-dist-traval-info">
              <div className="avg-dist">
                <p className="avg-dist-text">Avg. distance</p>
                <p className="avg-dist-data">1.6 bil. km</p>
              </div>
              <div className="est-travel-time">
                <p className="travel-time-text">Est. travel time</p>
                <p className="travel-time-data">7 years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Titan;
