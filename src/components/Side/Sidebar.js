import React from "react";

import classes from "./Sidebar.module.css";

import SidebarRow from "./SidebarRow";

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <SidebarRow selected icon="fa-solid fa-house" title="Home" />
      <SidebarRow icon="fa-regular fa-compass" title="Explore" />
      <SidebarRow icon="fa-regular fa-circle-play" title="Shorts" />
      <SidebarRow icon="fa-solid fa-layer-group" title="Subscriptions" />
      <hr />
      <SidebarRow icon="fa-regular fa-folder" title="Library" />
      <SidebarRow icon="fa-solid fa-clock-rotate-left" title="History" />
      <SidebarRow icon="fa-regular fa-clock" title="Watch later" />
      <SidebarRow icon="fa-regular fa-thumbs-up" title="Liked Videos" />
      <hr />
      <SidebarRow icon="fa-solid fa-gear" title="Settings" />
      <SidebarRow icon="fa-regular fa-flag" title="Report History" />
      <SidebarRow icon="fa-regular fa-circle-question" title="Help" />
      <SidebarRow icon="fa-solid fa-circle-exclamation" title="Send feedback" />
    </div>
  );
};

export default Sidebar;
