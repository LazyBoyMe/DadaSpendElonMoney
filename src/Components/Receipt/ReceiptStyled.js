import styled from "styled-components";

export const ReceiptContainer = styled.div`
  width: 50%;
  margin: 15px auto 0px auto;
  text-align: center;
  background-color: white;
  padding: 15px 20px 20px;
  margin-bottom: 65px;
  @media only screen and (max-width: 1450px) {
    width: 65%;
  }
  @media only screen and (max-width: 1050px) {
    width: 75%;
  }
  @media only screen and (max-width: 800px) {
    width: 85%;
    height: fit-content;
    padding: 15px 10px 20px;
  }
  @media only screen and (max-width: 600px) {
    width: 90%;
    padding: 15px 7px 20px;
  }
`;
export const ReceiptHeader = styled.h2`
  margin: 0;
`;
export const ReceiptPaper = styled.div`
  margin-top: 15px;
  background-color: #a29bfe;
  border-radius: 20px;
  padding: 15px;
  @media only screen and (max-width: 800px) {
    padding: 10px;
  }
  @media only screen and (max-width: 600px) {
    padding: 8px;
  }
`;
export const ReceiptItem = styled.div`
  width: 80%;
  margin: auto;
`;
export const ReceipItemText = styled.h3`
  width: 30%;
  color: white;
  display: inline-block;
  text-align: ${(props) => props.align || "left"};
  @media only screen and (max-width: 800px) {
    font-size: 15px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 11px;
  }
`;
export const Line = styled.div`
  width: 80%;
  margin: auto;
  height: 1px;
  border-bottom: 1px dashed rgba(255, 255, 255);
`;
