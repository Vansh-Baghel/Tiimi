import React, { useState } from "react";
import {AiOutlineDown} from "react-icons/ai"
import "./Jobs.css";
import JobCard from "./JobCard";

const Jobs = () => {
  const [activeState, setactiveState] = useState(false);
  const [inactiveState, setinactiveState] = useState(false);

  const activeClick = () => {
    setactiveState(true);
    setinactiveState(false);
  };

  const inactiveClick = () => {
    setinactiveState(true);
    // Setting it false so that both arent active at the same time.
    setactiveState(false);
  };

  const activeClass = activeState === true ? "firstHead_text active" : "firstHead_text";
  const inactiveClass = inactiveState === true ? "firstHead_text active" : "firstHead_text";
  
  return (
    <div className="jobContainer">
      <div className="jobSecondContainer">
        <div className="firstHead">
          <div onClick={activeClick} className={activeClass}>
            Active Jobs
          </div>
          <div onClick={inactiveClick} className={inactiveClass}>
            Inactive Jobs
          </div>
        </div>
        <div className="secondHead">
          <div className="sec_activeJob">7 Active Jobs</div>
          <div className="sec_navOption">
            <span style={{color: "grey" , paddingRight: ".4rem"}}>Sort by: </span>
            <span style={{fontWeight : "700" , color: "rgb(1, 1, 48)"}}>Creation Date <AiOutlineDown /> </span>
          </div>
          <div className="sec_navOption">
            <span style={{color: "grey" , paddingRight: ".4rem"}}>Status: </span>
            <span style={{fontWeight : "700" , color: "rgb(1, 1, 48)"}}>All Status <AiOutlineDown /> </span>
          </div>
        </div>
        <div className="thirdHead">
          <JobCard />
        </div>
      </div>
    </div>
  );
};

export default Jobs;
