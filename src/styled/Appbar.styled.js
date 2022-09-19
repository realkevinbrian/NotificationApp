import styled from "styled-components";

export const AppbarContainer = styled.div`
  border: 1px solid solid;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background-color: transparent;
    border: 1px solid transparent;
    color: ${({ theme }) => theme.Colors.GrayishBlue};
    cursor: pointer;
    
    &:hover {
      color: ${({ theme }) => theme.Colors.Blue};
    }
  }
`;

export const AppbarHead = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: ${({ theme }) => theme.Typography.WeightsMedium};
`;
export const Badge = styled.div`
  padding: 2px 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.Colors.Blue};
  color: ${({ theme }) => theme.Colors.White};
`;
