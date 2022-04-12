import React from "react";

import classes from "./VideoCard.module.css";

const VideoCard = (props) => {
  return (
    <div className={classes.videoCard}>
      <img className={classes["video__thumnail"]} src={props.image} alt="" />
      <div className={classes["video__details"]}>
        <div className={classes["video__avatar"]}>
          <img className={classes["channel__image"]} src={props.channelImage} />
        </div>
        <div className={classes["video__text"]}>
          <p className={classes["video__title"]}>{props.title}</p>
          <p className={classes["video__channel"]}>{props.channel}</p>
          <p className={classes["video__views"]}>
            {props.views} views • {props.timestamp} days ago
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
