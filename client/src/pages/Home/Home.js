import "./Home.css";
import BenefitCard from "../../components/Card/BenefitCard";

function Home() {
  return (
    <div>
      <div className="title">
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
        <BenefitCard iconName="person_pin_circle" text="Discover more" />
      </div>
    </div>
  );
}

export default Home;
