import React from 'react'
import classes from "./NavBar.module.css"
import logo from "../Resources/Logo.png"

const NavBar = () => {
  return (
    <div className={classes.navContainer}>
        <div className={classes.navLogo}>
            <img src={logo} alt="logo" style={{width: "100%"}}></img>
        </div>
        <div className={classes.section}>
            <div className={classes.navItem}>DashBoard</div>
            <div className={classes.navItem}>Inbox</div>
            <div className={classes.navItem}>Calender & Todos</div>
            <h5 style={{color: "rgba(247, 247, 247, 0.396)"}}>Recruitment</h5>
            <div className={classes.navItem}>Jobs</div>
            <div className={classes.navItem}>Candidates</div>
            <div className={classes.navItem}>My referrals</div>
            <div className={classes.navItem}>Career site</div>
            <h5 style={{color: "rgba(247, 247, 247, 0.396)"}}>Organization</h5>
            <div className={classes.navItem}>Employee</div>
            <div className={classes.navItem}>Structure</div>
            <div className={classes.navItem}>Report</div>
            <div className={classes.navItem}>Settings</div>
        </div>
    </div>
  )
}

export default NavBar;