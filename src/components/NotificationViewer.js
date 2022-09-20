import React, {  } from "react";
import { NotificationViewerContainer } from "../styled/Notification.styled";
import { Notification } from "./Notification";
import useFetch from "../hooks/useFetch";

function NotificationViewer(props) {
  const { feeds, loading } = useFetch();

  return (
    <NotificationViewerContainer>
      {loading && <small>Loading</small>}
      {feeds.length < 0 && <h5>No posts</h5>}
      {Array.from(feeds)
        .filter((item, index) => index < props.limit)
        .map((feed) => (
          <Notification key={feed.id} data={feed} />
        ))}
    </NotificationViewerContainer>
  );
}

export default NotificationViewer;
