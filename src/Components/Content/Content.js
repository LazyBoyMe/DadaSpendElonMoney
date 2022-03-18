import React from "react";
import { useSelector } from "react-redux";
import Products from "../Products/Products";
import Receipt from "../Receipt/Receipt";
import Styles from "./Content.module.css";
import {
  Container,
  Header,
  ImageContainer,
  Image,
  H1,
  MoneyContainer,
} from "./ContentStyled";

const Content = () => {
  const arr = useSelector((state) => state.products.products);
  const money = useSelector((state) => state.products.money);

  return (
    <Container>
      <div style={{ height: 1 }}></div>
      <Header>
        <ImageContainer>
          <Image src="images/elon-musk.jpg" />
        </ImageContainer>
        <H1 className={Styles.name_color}>Spend Elon Musk Money</H1>
      </Header>
      <MoneyContainer>
        <H1 className={Styles.money_style}>{"$" + numberWithCommas(money)}</H1>
      </MoneyContainer>
      <Products arr={arr} numberWithCommas={numberWithCommas} />
      {money !== 187000000000 && (
        <Receipt arr={arr} numberWithCommas={numberWithCommas} />
      )}
    </Container>
  );
};
const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default Content;
