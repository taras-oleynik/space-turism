function SwitcherTechnology({ launchPage, setLaunchPage }) {
  console.log(launchPage);
  return (
    <div className="switcher-technology">
      <div className="pages">
        <div
          onClick={() => setLaunchPage("1")}
          className={`page-number ${
            launchPage == 1 ? "active-technology-page" : ""
          }`}
        >
          1
        </div>
        <div
          onClick={() => setLaunchPage("2")}
          className={`page-number ${
            launchPage == 2 ? "active-technology-page" : ""
          }`}
        >
          2
        </div>
        <div
          onClick={() => setLaunchPage("3")}
          className={`page-number ${
            launchPage == 3 ? "active-technology-page" : ""
          }`}
        >
          3
        </div>
      </div>
    </div>
  );
}
{
  /* <div
onClick={() => setCrewMember("1")}
className={`member-page ${crewMember == 1 ? "active-member-page" : ""}`}
></div> */
}
export default SwitcherTechnology;
