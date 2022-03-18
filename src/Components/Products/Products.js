import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  buyProduct,
  sellProduct,
  changeCount,
} from "../../redux/ProductsSlice";
import {
  ProductsContainer,
  ProductContainer,
  ProductImageContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductFooter,
  SellButton,
  ProductCountInput,
  BuyButton,
} from "./ProductsStyled";

const Products = ({ arr, numberWithCommas }) => {
  const money = useSelector((state) => state.products.money);
  const dispatch = useDispatch();
  return (
    <ProductsContainer>
      {arr.map((p, id) => (
        <ProductContainer key={id}>
          <ProductImageContainer>
            <ProductImage src={"images/" + p.image} />
          </ProductImageContainer>
          <ProductName>{p.name}</ProductName>
          <ProductPrice>${numberWithCommas(p.price)}</ProductPrice>
          <ProductFooter>
            <SellButton
              isActive={p.countInCart > 0}
              onClick={() =>
                p.countInCart > 0 ? dispatch(sellProduct(id)) : ""
              }
            >
              Sell
            </SellButton>
            <ProductCountInput
              type="number"
              value={p.countInCart}
              onChange={(e) =>
                change(id, p.countInCart, p.price, e, money, dispatch)
              }
            />
            <BuyButton
              isActive={money / p.price >= 1}
              onClick={() =>
                money / p.price >= 1 ? dispatch(buyProduct(id)) : ""
              }
            >
              Buy
            </BuyButton>
          </ProductFooter>
        </ProductContainer>
      ))}
    </ProductsContainer>
  );
};

const change = (id, countInCart, price, e, money, dispatch) => {
  let count = e.target.value;
  if (count[0] === "0") {
    count = Number((count + "").substring(1));
  } else if (count === "") {
    count = 0;
  }
  e.target.value = count;
  console.log(countInCart);
  if (money + countInCart * price < count * price) {
    count = Math.floor((money + countInCart * price) / price);
  }
  dispatch(changeCount({ id: id, count: count }));
};

export default Products;
