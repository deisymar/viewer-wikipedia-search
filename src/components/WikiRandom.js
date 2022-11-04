import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";

const WikiRandom = ({ resultRandom, getDataRandom }) => {
  return (
    <div className="random-fetcher" onClick={getDataRandom}>
      <FontAwesomeIcon icon={faShuffle} />
      <span> Click to generate 10 random pages! </span>
    </div>
  );
};
export default WikiRandom;
