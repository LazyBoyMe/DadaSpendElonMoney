import styled from "styled-components";

export const ProductsContainer = styled.div`
  width: 60%;
  text-align: center;
  margin: auto;
  margin-bottom: 20px;

  padding: 0px 15px;
  @media only screen and (max-width: 1050px) {
    width: 75%;
  }
  @media only screen and (max-width: 800px) {
    width: 85%;
  }
  @media only screen and (max-width: 600px) {
    width: 95%;
  }
`;

export const ProductContainer = styled.div`
  width: 280px;
  height: fit-content;

  display: inline-block;
  text-align: center;
  padding: 15px;
  background-color: white;
  margin: 10px 10px;
  box-shadow: rgba(120, 120, 120, 0.35) 1.95px 1.95px 2.6px;
  transition: 0.2s all;
  &:hover {
    box-shadow: rgba(120, 120, 120, 0.65) 1.95px 1.95px 12.6px;
  }
  @media only screen and (max-width: 1150px) {
    width: 250px;
  }
  @media only screen and (max-width: 900px) {
    width: 220px;
  }
  @media only screen and (max-width: 700px) {
    width: 190px;
    margin: 10px 5px;
  }
`;
export const ProductImageContainer = styled.div`
  width: 90%;
  height: 150px;
  text-align: center;
  margin: auto;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 1150px) {
    height: 140px;
  }
  @media only screen and (max-width: 900px) {
    height: 130px;
  }
  @media only screen and (max-width: 700px) {
    width: 120px;
  }
`;

export const ProductImage = styled.img`
  max-height: 90%;
  max-width: 90%;
  margin: auto;
`;
export const ProductName = styled.h3`
  padding: 0;
`;
export const ProductPrice = styled.h4`
  padding: 0;
  opacity: 0.6;
`;
export const ProductFooter = styled.div`
  width: 95%;
  margin: auto;
  text-align: center;
  display: flex;
  justify-content: space-around;
`;
export const SellButton = styled.button`
  width: 30%;
  padding: 8px 25px;
  background-color: white;
  border: none;
  background-color: ${(props) =>
    props.isActive ? "#d63031" : "rgba(220,220,220)"};
  border-radius: 2px;
  color: white;
  font-weight: 700;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: 0.2s all;
  cursor: pointer;
  &:hover {
    transform: translateY(-1px);
    opacity: 0.9;
  }
  @media only screen and (max-width: 1150px) {
    padding: 8px 20px;
  }
  @media only screen and (max-width: 900px) {
    padding: 8px 10px;
  }
  @media only screen and (max-width: 700px) {
    padding: 8px 5px;
  }
`;
export const ProductCountInput = styled.input`
  width: 15%;
  padding: 4px 10px;
  border-radius: 5px;
  border: 1px solid #a29bfe;
  text-align: center;
  outline-color: rgba(220, 220, 220);
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
export const BuyButton = styled.button`
  width: 30%;
  padding: 8px 25px;
  background-color: white;
  border: none;
  background-color: ${(props) =>
    props.isActive ? "#a29bfe" : "rgba(220,220,220)"};
  border-radius: 2px;
  color: white;
  font-weight: 700;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: 0.2s all;
  cursor: pointer;
  &:hover {
    transform: translateY(-1px);
    opacity: 0.9;
  }
  @media only screen and (max-width: 1150px) {
    padding: 8px 20px;
  }
  @media only screen and (max-width: 900px) {
    padding: 8px 10px;
  }
  @media only screen and (max-width: 700px) {
    padding: 8px 5px;
  }
`;
