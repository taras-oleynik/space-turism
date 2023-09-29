function SwitcherPoints({ crewMember, setCrewMember }) {
  return (
    <div className="crew-switcher-points">
      <div
        onClick={() => setCrewMember("1")}
        className={`member-page ${crewMember == 1 ? "active-member-page" : ""}`}
      ></div>
      <div
        onClick={() => setCrewMember("2")}
        className={`member-page ${crewMember == 2 ? "active-member-page" : ""}`}
      ></div>
      <div
        onClick={() => setCrewMember("3")}
        className={`member-page ${crewMember == 3 ? "active-member-page" : ""}`}
      ></div>
      <div
        onClick={() => setCrewMember("4")}
        className={`member-page ${crewMember == 4 ? "active-member-page" : ""}`}
      ></div>
    </div>
  );
}
export default SwitcherPoints;
