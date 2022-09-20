import React from "react";
import FeedStamp from "../helpers/FeedStamp";
import {
  NotificationAvatar,
  NotificationContainer,
  NotificationContent,
  NotificationFooter,
  NotificationMessagePreview,
} from "../styled/Notification.styled";

export function Notification({ data }) {
  return (
    <NotificationContainer
      className={data.status !== "read" ? "recentFeed" : ""}
    >
      <NotificationAvatar>
        <img src={data.avatar} alt="media" />
      </NotificationAvatar>
      <NotificationContent>
        <div className="header">
          <span>{data.author}</span>
          <p>{data.subject}</p>
          <span 
          className={data.status === "read" ? "recentFeedDot" : ""}
          ></span>
        </div>

        <NotificationFooter>
          <small>{FeedStamp(data.createdAt)}</small>
        </NotificationFooter>

        {data.type === "message" && (
          <NotificationMessagePreview>
            {data.text}
          </NotificationMessagePreview>
        )}
      </NotificationContent>
    </NotificationContainer>
  );
}
