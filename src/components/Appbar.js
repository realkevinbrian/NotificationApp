import React from "react";
import { AppbarContainer, AppbarHead, Badge } from "../styled/Appbar.styled";

function Appbar() {
  return (
    <AppbarContainer>
      <AppbarHead>
        <h3>Notification</h3>
        <Badge>
          <span>3</span>
        </Badge>
      </AppbarHead>

      <button>Mark all as read</button>
    </AppbarContainer>
  );
}

export default Appbar;
