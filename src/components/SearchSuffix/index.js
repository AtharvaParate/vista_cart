import "./searchSuffix.css";
import Amazon from "./amazon (1).png";
import Flipkart from "./flipkart.svg";
import Snapdeal from "./snapdeal.svg";

export default () => {
  return (
    <>
      <div className="searchSuffix">
        <h2>Search directly on :</h2>
      </div>
      <div className="image">
        <img src={Amazon} alt="amazon-png" className="amazon"></img>
        <img src={Flipkart} alt="flipkart-png" className="flipkart"></img>
        <img src={Snapdeal} alt="snapdeal-png" className="snapdeal"></img>
      </div>
    </>
  );
};
