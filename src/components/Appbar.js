import React from "react";
import useFetch from "../hooks/useFetch";
import { AppbarContainer, AppbarHead, Badge } from "../styled/Appbar.styled";

function Appbar(props) {
  const { feeds, loading } = useFetch();
  return (
    <AppbarContainer>
      <AppbarHead>
        <h3>Notification</h3>
        <Badge>
          {feeds.length > 0 && !loading && <span>{feeds.length}</span>}
        </Badge>
      </AppbarHead>

      <button onClick={() => props.action(feeds.length)}>Mark all as read</button>
    </AppbarContainer>
  );
}

export default Appbar;
