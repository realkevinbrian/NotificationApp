import React, { useEffect, useState } from "react";
import {
  NotificationAvatar,
  NotificationContainer,
  NotificationContent,
  NotificationViewerContainer,
} from "../styled/Notification.styled";
import axios from "axios";

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

  console.log(loading, feeds);
  return (
    <NotificationViewerContainer>
      {Array.from(feeds)
      .filter((item,index)=> index <= 10)
      .map((feed) => (
        <Notification key={feed.id}/>
      ))}
    </NotificationViewerContainer>
  );
}

function Notification(data) {
  return (
    <NotificationContainer>
      <NotificationAvatar>
        <img src={{}} alt="media" />
      </NotificationAvatar>
      <NotificationContent>
        <strong>{data.from}</strong>
        <p>{data.text}</p>
      </NotificationContent>
    </NotificationContainer>
  );
}

export default NotificationViewer;
