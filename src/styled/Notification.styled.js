import styled from "styled-components";

export const NotificationViewerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  

  //when new feeds appear add this class
  .recentFeed {
    background-color: ${({ theme }) => theme.Colors.VeryLightGrayishBlue};
  }
`;

export const NotificationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  /* padding: 15px; */
`;
export const NotificationAvatar = styled.div`
  display: flex;
  align-items: center;

  img {
    object-fit: cover;
    max-width: 100px;
    max-height: 100px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;
export const NotificationContent = styled.div`
  display: flex;
  flex-direction: column;

  div.header {
    display: flex;
    gap: 10px;
    flex: 1;
  }
`;
export const NotificationFooter = styled.div`
  color: ${({ theme }) => theme.Colors.GrayishBlue};
`;
