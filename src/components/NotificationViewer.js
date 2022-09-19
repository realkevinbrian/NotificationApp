import React, { useEffect, useState } from "react";
import {
  NotificationViewerContainer,
} from "../styled/Notification.styled";
import axios from "axios";
import sample from "../assets/images/avatar-jacob-thompson.webp"
import { Notification } from "./Notification";

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

export default NotificationViewer;
