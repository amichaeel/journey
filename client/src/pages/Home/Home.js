import "./Home.css";
import BenefitCard from "../../components/Card/BenefitCard";

function Home() {
  return (
    <body>
      <div className="banner-container">
        <div className="banner">
          <p className="banner-text maxxed-container">
            Plan your next trip with a guide ready for everything
          </p>
        </div>
      </div>

      <div className="maxxed-container">
        <h4>
          Journey can <b>help</b> with <b>choice paralysis</b> and overall{" "}
          <b>discomfort when exploring</b> a new place!
        </h4>

        <div className="benefits-cards">
          <BenefitCard iconName="thunderstorm" text="No weather mishaps" />
          <BenefitCard iconName="touch_app" text="No choice paralysis" />
          <BenefitCard
            iconName="person_pin_circle"
            text="Discover more places"
          />
        </div>

        <footer className="about-us">
          We are three Florida college students, one from FIU and two from MDC.
          Journey is our submission project for the ShellHacks 2023 competition.
          The public GitHub repository for this project can be found{" "}
          <a href="https://github.com/amichaeel/journey">here</a>
        </footer>
      </div>
    </body>
  );
}

export default Home;
