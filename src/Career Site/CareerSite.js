import React from "react";
import classes from "./CareerSite.module.css";
import fikriLogo from "../Resources/FikriLogo.png";
import { Link } from "react-router-dom";
import { AiOutlineFilter } from "react-icons/ai";
import details from "./CareerData.js";
import {GrLocation} from "react-icons/gr";
import {BsSearch} from "react-icons/bs";


const CareerSite = () => {
  const type = ["Fulltime", "Freelance", "Contract", "Intern"];
  const category = [
    "Design",
    "Marketing",
    "Management",
    "Fenance",
    "Development",
    "Sales",
    "Other",
  ];
  const experience = [
    "Less than 1 Years",
    "1-2 Years",
    "3-5 Years",
    "5 Years +",
  ];
  const updated = ["Recently", "24 Hours", "1 Week", "Anytime"];

  return (
    <div className={classes.career_container}>
      <div className={classes.nav_image_container}>
        <div className={classes.navContent}>
          <img src={fikriLogo} alt="logo" className={classes.navLogo}></img>
          <span className={classes.fikriSpan}>Fikri Studio</span>
        </div>
        <div className={classes.navContent}>
          <Link to="./" style={{ textDecoration: "none" }}>
            <div className={classes.visitSite}>Visit Website</div>
          </Link>
        </div>
      </div>
      {/* Have put bg image from css */}
      <div className={classes.backImageDiv}></div>
      <div className={classes.career_down_container}>
        <div className={classes.down_nav}>
          <div className={classes.studioName}>Fikri Studio</div>
          <img
            src={fikriLogo}
            alt="logo"
            className={classes.containerLogo}
          ></img>
        </div>
        <div className={classes.email_web_adress_container}>
          <div className={classes.profile_container}>
            <div className={classes.profile_head}>Email</div>
            <div className={classes.profile_text}>fikristudio@gmail.com</div>
          </div>
          <div className={classes.profile_container}>
            <div className={classes.profile_head}>Website</div>
            <div className={classes.profile_text}>
              http://www.fikristudio.com
            </div>
          </div>
          <div className={classes.profile_container}>
            <div className={classes.profile_head}>Address</div>
            <div className={classes.profile_text}>
              2972 Westheimer Rd. Santa Ana, Illinais 85486
            </div>
          </div>
        </div>
        <div className={classes.filter_job_container}>
          <div className={classes.opportunity_text}>24 Job Opportunity</div>
          <div className={classes.filter_text}>
            <AiOutlineFilter /> Filter
          </div>
        </div>
        <div className={classes.search_filter_container}>
          <div className={classes.search_filter_content}>
            <input placeholder="Search Jobs"></input>
            <BsSearch />
          </div>
          <div className={classes.search_filter_content}>
            <select>
              <option>All countries</option>
              <option>India</option>
              <option>New York</option>
              <option>California</option>
              <option>Spain</option>
            </select>
          </div>
        </div>

        {/* <div>
          {details.map((data) => (
            <div className={classes.applylist_container}>
              <div className={classes.col}>
                <h5 className={classes.table_head}>{data.role.head}</h5>
                <ul className={classes.inDataul}>
                  {data.role.roles.map((inData) => (
                    <>
                    <li className={classes.inDataList_roles}> {inData} </li>
                    <div className={classes.role_down}>
                    <li>{data.role.domain}</li>
                    <li>{data.role.work}</li>
                    </div>
                    </>
                  ))}

                </ul>
              </div>
              <div className={classes.col}>
                <h5 className={classes.table_head}>{data.experience.head}</h5>
                <ul className={classes.inDataul}>
                  {data.experience.years.map((inData) => (
                    <li className={classes.inDataList}> {inData} </li>
                  ))}
                </ul>
              </div>
              <div className={classes.col}>
                <h5 className={classes.table_head}>{data.salary.head}</h5>
                <ul className={classes.inDataul}>
                  {data.salary.salaries.map((inData) => (
                    <li className={classes.inDataList}> {inData} </li>
                  ))}
                </ul>
              </div>
              <div className={classes.col}>
                <h5 className={classes.table_head}>{data.location.head}</h5>
                <ul className={classes.inDataul}>
                  {data.location.locations.map((inData) => (
                    <li className={classes.inDataList}>
                      {" "}
                      <GrLocation/> {inData}{" "}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={classes.col}>
                <h5 className={classes.table_head}>{data.update.head}</h5>
                <ul className={classes.inDataul}>
                  {data.update.updates.map((inData) => (
                    <li className={classes.inDataList}> {inData} </li>
                  ))}
                </ul>
              </div>
              <div className={classes.col}>
              <h5 className={classes.table_head}>{data.apply.head} </h5>
                <ul className={classes.inDataul}>
                  {data.apply.applies.map((inData) => (
                    <li className={classes.buttons}> <span> {inData} </span> </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div> */}
                <div className={classes.checkbox_container}>
          <div className={classes.each_checkbox}>
            <div className={classes.checkbox_heading}>Job Type</div>
            {type.map((data) => (
              <div
                style={{ display: "flex", padding: ".5rem" }}
                className={classes.checkbox_input}
              >
                {/* Putting this for and id relation was important to make it work. */}
                <input type="checkbox" id={data} />
                <label for={data}>{data}</label>
              </div>
            ))}
          </div>
          <div className={classes.each_checkbox}>
            <div className={classes.checkbox_heading}>Job Category</div>
            {category.map((data) => (
              <div
                style={{ display: "flex", padding: ".5rem" }}
                className={classes.checkbox_input}
              >
                {/* Putting this for and id relation was important to make it work. */}
                <input type="checkbox" id={data} />
                <label for={data}>{data}</label>
              </div>
            ))}
          </div>
          <div className={classes.each_checkbox}>
            <div className={classes.checkbox_heading}>Experience</div>
            {experience.map((data) => (
              <div
                style={{ display: "flex", padding: ".5rem" }}
                className={classes.checkbox_input}
              >
                {/* Putting this for and id relation was important to make it work. */}
                <input type="checkbox" id={data} />
                <label for={data}>{data}</label>
              </div>
            ))}
          </div>
          <div className={classes.each_checkbox}>
            <div className={classes.checkbox_heading}>Last updated</div>
            {updated.map((data) => (
              <div
                style={{ display: "flex", padding: ".5rem" }}
                className={classes.checkbox_input}
              >
                {/* Putting this for and id relation was important to make it work. */}
                <input type="checkbox" id={data} />
                <label for={data}>{data}</label>
              </div>
            ))}
          </div>
        </div>
         <table className={classes.applylist_container}>
              <p style={{fontSize: "15px" , fontWeight : "500"}}>Table consists of : Role , Experience , Salary , Location , Last update</p>
          {details.map((data) => (
            <tbody>
              <tr className={classes.applylist_eachbox}>
                <td className={classes.role_info_container} style={{width: "30%"}}>
                  <div
                    style={{
                      color: "black",
                      fontWeight: "700",
                      fontSize: "20px",
                    }}
                  >
                    {data.role}
                  </div>
                  <div
                    style={{
                      color: "grey",
                      fontWeight: "700",
                      fontSize: "13px",
                    }}
                  >
                    {data.domain}
                  </div>
                  <div
                    style={{
                      color: "grey",
                      fontWeight: "700",
                      fontSize: "13px",
                    }}
                  >
                    {data.time}
                  </div>
                </td>
                <td style={{width: "16%"}}>{data.experience}</td>
                <td style={{width: "16%"}}>{data.salary}</td>
                <td style={{width: "16%"}}>{data.location}</td>
                <td style={{width: "16%"}}>{data.update}</td>
                <td style={{width: "10%"}}>
                  <button className={classes.apply_buttons}>Apply </button>
                </td>
              </tr>
            </tbody> 
         ))}
        </table> 
      </div>
    </div>
  );
};

export default CareerSite;
