import "./Home.css";
import BenefitCard from "../../components/Card/BenefitCard";

function Home() {
  return (
    <div>
      <div className="title">
        <picture className="header-bg">
          <img
            src={"stock-journey.jpg"}
            alt={"Woman sitting towards landscape"}
            style={{ width: "100%" }}
          />
        </picture>
        <h1>Plan your next trip with a guide ready for everything</h1>
      </div>

      <div>
        <h4>
          Journey can <b>help</b> with <b>choice paralysis</b> and overall{" "}
          <b>discomfort when exploring</b> a new place!
        </h4>
      </div>

      <div className="benefits-cards">
        <BenefitCard iconName="thunderstorm" text="No weather mishaps" />
        <BenefitCard iconName="touch_app" text="No choice paralysis" />
        <BenefitCard iconName="person_pin_circle" text="Discover more places" />
      </div>

      <footer className="about-us">
        <p>
          We are three Florida college students, one from FIU and two from MDC.
          Journey is our submission project for the ShellHacks 2023 competition.
          The public GitHub repository for this project can be found{" "}
          <a href="https://github.com/amichaeel/journey">here</a>
        </p>
      </footer>
    </div>
  );
}

export default Home;
