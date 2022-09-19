import React, { useEffect, useState } from "react";
import {
  NotificationAvatar,
  NotificationContainer,
  NotificationContent,
  NotificationFooter,
  NotificationViewerContainer,
} from "../styled/Notification.styled";
import axios from "axios";
import sample from "../assets/images/avatar-jacob-thompson.webp"

function NotificationViewer() {
  let [feeds, setFeeds] = useState([]);
  let [loading, isLoading] = useState(false);

  useEffect(() => {
    isLoading(true);
    axios
      .get("db.json")
      .then((resp) => {
        isLoading(false);
        setFeeds(resp.data);
      })
      .catch((error) => {
        isLoading(false);
        console.log(error);
      });
  }, []);

  return (
    <NotificationViewerContainer>
      {Array.from(feeds)
        .filter((item, index) => index <= 10)
        .map((feed) => (
          <Notification 
          key={feed.id} 
          data={feed} 
          />
        ))}
    </NotificationViewerContainer>
  );
}

function Notification({ data }) {
  return (
    <NotificationContainer className={(data.status === "read") ? "recentFeed" : "" }>
      <NotificationAvatar>
        <img src={data.avatar} alt="media" />
        {/* <img src={sample} alt="media" /> */}
      </NotificationAvatar>
      <NotificationContent>
        <div className="header">
          <strong>{data.author}</strong>
          <p>{data.subject}</p>
        </div>

        <NotificationFooter>
          <small>{data.createdAt}</small>
        </NotificationFooter>
      </NotificationContent>
    </NotificationContainer>
  );
}

export default NotificationViewer;
