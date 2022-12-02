import details from "./Jobs_Data";
import classes from "./Jobs_Data.module.css";

const JobCard = () => {
  return (
    <div className={classes.cardContainer}>
      {details.map((data) => (
        <div>
          <div className={classes.headOne}>
            <h5 style={{fontSize: "12px" , color: "grey"}}>{data.domain}</h5>
            <h3>{data.head}</h3>
          </div>
          <div style={{fontSize: "12px" , color: "grey" , fontWeight: "500"}}>{data.candidate}</div>
          <div>{data.total ? data.total : data.empty}</div>
          <div>
            <div> {data.place} </div>
            <div> {data.time} </div>
          </div>
          <div>
            <div> {data.time} </div>
            <div> See Details </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobCard;
