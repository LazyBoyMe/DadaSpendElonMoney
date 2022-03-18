import React from "react";
import { ReceiptItem, ReceipItemText } from "./ReceiptStyled";
const ReceiptList = ({ arr, numberWithCommas }) => {
  return (
    <>
      {arr.map((p, id) => {
        return (
          p.countInCart > 0 && (
            <ReceiptItem key={id}>
              <ReceipItemText>{p.name}</ReceipItemText>
              <ReceipItemText align="center">{p.countInCart}</ReceipItemText>
              <ReceipItemText align="right">
                ${numberWithCommas(p.countInCart * p.price)}
              </ReceipItemText>
            </ReceiptItem>
          )
        );
      })}
    </>
  );
};

export default ReceiptList;
