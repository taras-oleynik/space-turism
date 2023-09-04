function SubNav({ planet, setPlanet }) {
  return (
    <div className="dest-nav">
      <ul className="planet-list">
        <li
          className={planet === "Moon" ? "active" : ""}
          onClick={() => setPlanet("Moon")}
        >
          Moon
        </li>
        <li
          className={planet === "Mars" ? "active" : ""}
          onClick={() => setPlanet("Mars")}
        >
          Mars
        </li>
        <li
          className={planet === "Europa" ? "active" : ""}
          onClick={() => setPlanet("Europa")}
        >
          Europa
        </li>
        <li
          className={planet === "Titan" ? "active" : ""}
          onClick={() => setPlanet("Titan")}
        >
          Titan
        </li>
      </ul>
    </div>
  );
}
export default SubNav;
