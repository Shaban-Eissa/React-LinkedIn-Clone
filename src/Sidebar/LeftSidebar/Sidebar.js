import React from "react";
import { Avatar } from "@material-ui/core";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
        <Avatar className="sidebar__avatar" src={user.photoUrl}>
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2500</p>
        </div>

        <div className="sidebar__stat">
          <p>Views in posts</p>
          <p className="sidebar__statNumber">8400</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("React Js")}
        {recentItem("Programming")}
        {recentItem("Software Engineering")}
        {recentItem("UI UX Process")}
        {recentItem("Code Development")}
        {recentItem("React E-Commerce")}
      </div>
    </div>
  );
}

export default Sidebar;
