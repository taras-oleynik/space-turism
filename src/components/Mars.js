import Nav from "./Nav";
import mars from "../images/image-mars.png";
import "./destenation.css";
import SubNav from "./SubNav";
function Mars({ planet, setPlanet }) {
  return (
    <div className="destanation-container">
      <Nav />
      <div className="dest-data">
        <div className="planet-view">
          <h4 className="pick-dest-title">
            <span className="dest-num">01</span>
            Pick your Destanation
          </h4>
          <img src={mars} alt="mars" />;
        </div>
        <div className="planet-info">
          <SubNav setPlanet={setPlanet} planet={planet} />
          <div className="info">
            <h1>Mars</h1>
            <p>
              Don’t forget to pack your hiking boots. You’ll need them to tackle
              Olympus Mons, the tallest planetary mountain in our solar system.
              It’s two and a half times the size of Everest!
            </p>
            <div className="planet-div-line"></div>
            <div className="planet-dist-traval-info">
              <div className="avg-dist">
                <p className="avg-dist-text">Avg. distance</p>
                <p className="avg-dist-data">225 mil.</p>
              </div>
              <div className="est-travel-time">
                <p className="travel-time-text">Est. travel time</p>
                <p className="travel-time-data">9 months</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mars;
