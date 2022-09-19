import React from "react";
import {
  NotificationAvatar,
  NotificationContainer,
  NotificationContent,
  NotificationFooter
} from "../styled/Notification.styled";

export function Notification({ data }) {
  return (
    <NotificationContainer className={(data.status === "read") ? "recentFeed" : ""}>
      <NotificationAvatar>
        <img src={data.avatar} alt="media" />
        {/* <img src={sample} alt="media" /> */}
      </NotificationAvatar>
      <NotificationContent>
        <div className="header">
          <span>{data.author}</span>
          <p>{data.subject}</p>
        </div>

        <NotificationFooter>
          <small>{data.createdAt}</small>
        </NotificationFooter>
      </NotificationContent>
    </NotificationContainer>
  );
}
