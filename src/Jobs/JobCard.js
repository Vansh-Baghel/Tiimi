import details from "./Jobs_Data";
import classes from "./Jobs_Data.module.css";
import { AiOutlineRight } from "react-icons/ai";

const JobCard = () => {
  return (
    <>
    {details.map((data) => (
        <div className={classes.cardContainer}>
        <div>
          <div className={classes.topHeading}>
            <div className={classes.head_domain}>{data.domain}</div>
            <div className={classes.head_head}>{data.head}</div>
          </div>
          <div
            style={{
              fontSize: "12px",
              color: "grey",
              fontWeight: "500",
              marginBottom: ".5rem",
            }}
          >
            {data.candidate}
          </div>
          <div className={classes.totalNew}>
            {data.total !== null ? (
              <>
                {" "}
                <div className={classes.totalContainer}>
                  <div className={classes.totalNewhead}> TOTAL </div>
                  <div className={classes.number}> {data.total} </div>
                </div>
                <div className={classes.newContainer}>
                  <div className={classes.totalNewhead}> NEW </div>
                  <div className={classes.number}> {data.new} </div>
                </div>
              </>
            ) : (
                <img
                  src={data.noTotal}
                  alt="completed"
                  className={classes.completeImg}
                ></img>
            )}
          </div>
          <div className={classes.placeSchedule}>
            <div> {data.place} </div>
            <div> - </div>
            <div> {data.workSchedule}</div>
          </div>
          <div className={classes.bottomCard}>
            <div> {data.draftOrPublished} </div>
            <div>
              {" "}
              See Details <AiOutlineRight style={{ height: "10px" }} />{" "}
            </div>
          </div>
        </div>
    </div>
      ))}
      </>
  );
};

export default JobCard;
