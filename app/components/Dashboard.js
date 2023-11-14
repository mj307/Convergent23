import React from "react";
import "./style.css";
//Styles for the dashboard can be found in the styles.css file
export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="div">
        <p className="welcome-back">
          <span className="text-wrapper">
            Welcome Back,
            <br />
          </span>
          <span className="span">*User Name*!</span>
        </p>
        <div className="overlap-group">
          <div className="text-wrapper-2">Your Groups</div>
          <div className="text-wrapper-3">Your Classes</div>
          <div className="text-wrapper-4">Your Friends</div>
          <div className="overlap">
            <p className="group-members">
              Group 1<br />
              *Members*
              <br />

              *Members Studying*
              
              <br />
              *Where Members are*
            </p>
          </div>
          <div className="overlap-2">
            <div className="text-wrapper-5">Group 1</div>
            <div className="rectangle" />
            <div className="text-wrapper-6">Group 2</div>
          </div>
          <div className="overlap-3">
            <div className="text-wrapper-7">*Class Name*</div>
            <div className="text-wrapper-8"></div>
            <div className="overlap-4">
              <div className="text-wrapper-9">#</div>
              <div className="study-groups">
                Study
                <br />
                Groups
              </div>
            </div>
          </div>
          <img
            className="female-profile"
            alt="Female profile"
            src="https://c.animaapp.com/Rl7tNbDQ/img/female-profile-2@2x.png"
          />
          <img className="male-user" alt="Male user" src="https://c.animaapp.com/Rl7tNbDQ/img/male-user-1@2x.png" />
          <img className="img" alt="Female profile" src="https://c.animaapp.com/Rl7tNbDQ/img/female-profile-2@2x.png" />
          <img
            className="female-profile-2"
            alt="Female profile"
            src="https://c.animaapp.com/Rl7tNbDQ/img/female-profile-2@2x.png"
          />
          <img className="male-user-2" alt="Male user" src="https://c.animaapp.com/Rl7tNbDQ/img/male-user@2x.png" />
          <div className="rectangle-2" />
        </div>
        <img
          className="notification"
          alt="Notification"
          src="https://c.animaapp.com/Rl7tNbDQ/img/notification@2x.png"
        />
      </div>
    </div>
  );
};


