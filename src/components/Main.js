import "./main.css";
import Nav from "./Nav";
function Main() {
  return (
    <div className="container">
      <Nav />
      <main>
        <div className="main-text">
          <h1>Space</h1>
          <h4>So, you want to travel to</h4>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="explore">Explore</div>
      </main>
    </div>
  );
}

export default Main;
