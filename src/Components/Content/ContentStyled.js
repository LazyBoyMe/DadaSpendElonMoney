import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
`;
export const Header = styled.div`
  width: 60%;
  height: 250px;
  margin: 15px auto;
  text-align: center;
  background-color: white;
  padding: 10px 15px;

  @media only screen and (max-width: 1050px) {
    width: 75%;
  }
  @media only screen and (max-width: 800px) {
    width: 85%;
    height: fit-content;
    padding-bottom: 20px;
  }
  @media only screen and (max-width: 600px) {
    width: 95%;
    padding: 10px 0px;
  }
`;
export const ImageContainer = styled.div`
  border-radius: 50%;
  width: 160px;
  height: 160px;
  background-color: #a29bfe;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 800px) {
    width: 120px;
    height: 120px;
  }
`;
export const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  @media only screen and (max-width: 800px) {
    width: 110px;
    height: 110px;
  }
`;
export const H1 = styled.h1`
  color: ${(props) => props.color};
  @media only screen and (max-width: 800px) {
    font-size: 24px;
  }
`;
export const MoneyContainer = styled.div`
  width: 60%;
  margin: 0px auto;
  text-align: center;
  background-color: rgba(108, 92, 231);
  padding: 0px 15px;
  position: sticky;
  top: 5px;
  margin-bottom: 10px;
  z-index: 999;

  box-shadow: rgba(108, 92, 231, 1) 0px 25px 20px -15px;
  @media only screen and (max-width: 1050px) {
    width: 75%;
  }
  @media only screen and (max-width: 800px) {
    width: 85%;
  }
  @media only screen and (max-width: 600px) {
    width: 95%;
    padding: 0px;
  }
`;
