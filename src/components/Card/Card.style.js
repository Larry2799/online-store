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
  font-family: "Open Sans", system-ui, sans-serif;
  cursor: pointer;
  outline: none;
  color: #0e88df;
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
  font-size: 15px;
  font-weight: 700;
  background-color: rgb(255, 229, 158);
`;

export const SecondPrice = styled.div`
  justify-content: center;
  padding: 6px;
  font-size: smaller;
  color: grey;
`;

export const CardDescription = styled.div`
  line-height: 19px;
  font-size: 13px;
  font-family: "Open Sans", system-ui, sans-serif;
`;

export const SaveImage = styled.img`
  height: 21px;
  width: 16px;
`;
