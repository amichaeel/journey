import "./Card.css";

function BenefitCard({ iconName, text }) {
  const iconSpan = <span class="material-symbols-outlined">{iconName}</span>;

  return (
    <div className="card">
      <h1 className="card-icon">{iconSpan}</h1>
      <h2 className="card-text">{text}</h2>
    </div>
  );
}

export default BenefitCard;
