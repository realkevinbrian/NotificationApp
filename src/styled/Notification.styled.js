import styled from "styled-components";

export const NotificationViewerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  //when new feeds appear add this class
  .recentFeed {
    background-color: ${({ theme }) => theme.Colors.VeryLightGrayishBlue};
  }

  span.recentFeedDot{
    width: 7px;
    height: 7px;
    background-color: red;
    border-radius: 50%;
  }
`;

export const NotificationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 10px 15px;
`;
export const NotificationAvatar = styled.div`
  display: flex;
  align-items: center;

  img {
    object-fit: cover;
    max-width: 100px;
    max-height: 100px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;
export const NotificationContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  div.header {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    flex: 1;
    align-items: center
  }

  span {
    font-weight: ${({ theme }) => theme.Typography.WeightsBold};

    &:hover {
      color: ${({ theme }) => theme.Colors.Blue};
    }
  }

  p {
    color: ${({ theme }) => theme.Colors.GrayishBlue};
    font-size: 16px;
  }
`;
export const NotificationFooter = styled.div`
  color: ${({ theme }) => theme.Colors.GrayishBlue};
`;
export const NotificationMessagePreview = styled.div`
  background-color: ${({ theme }) => theme.Colors.LightGrayishBlue1};
  color: ${({ theme }) => theme.Colors.GrayishBlue};
  font-weight: ${({ theme }) => theme.Typography.WeightsMedium};
  padding: 15px;
  border-radius: 5px;
  margin: 5px 0;
`;
