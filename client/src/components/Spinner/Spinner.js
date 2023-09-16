import "./Spinner.css";
import { PulseLoader } from "react-spinners";

function Spinner() {
  return (
    <div className="spinner">
      <PulseLoader size={10} />
    </div>
  );
}

export default Spinner;
