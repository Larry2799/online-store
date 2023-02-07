import styled from "styled-components/macro";

export const CardContainer = styled.div`
  margin: 15px;
  width: 275px;
  height: 324px;
`;

export const CardImage = styled.div`
   {
    img {
      margin: 10px 0;
      width: 275px;
      height: 206px;
      object-fit: fill;
      border-radius: 2px;
    }
  }
`;

export const GlobalDescription = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardSummary = styled.div`
  box-sizing: border-box;
`;

export const MainDescription = styled.h3`
  max-width: 245px;
  margin-top: 0;
  margin-bottom: 5px;
  line-height: 20px;
  cursor: pointer;
  outline: none;
  color: ${(props) => props.theme.colors.blue}; ;
`;

export const CardPrice = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  margin: 5px -1px;
`;

export const MainPrice = styled.div`
  margin-left: -3px;
  padding: 2px 5px 1px;
  border-radius: 4px;
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: ${(props) => props.theme.fontWeight.extraBold};
  background-color: ${(props) => props.theme.colors.yellow};
`;

export const SecondPrice = styled.div`
  justify-content: center;
  padding: 6px;
  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme.colors.grey}; ;
`;

export const CardDescription = styled.div`
  line-height: 19px;
  font-size: ${(props) => props.theme.fontSize.small};
`;

export const SaveImage = styled.img`
  height: 21px;
  width: 16px;
`;
