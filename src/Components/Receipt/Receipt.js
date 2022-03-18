import React from "react";
import { useSelector } from "react-redux";
import ReceiptList from "./ReceiptList";
import {
  ReceiptContainer,
  ReceiptHeader,
  ReceiptPaper,
  Line,
  ReceiptItem,
  ReceipItemText,
} from "./ReceiptStyled";

const Receipt = ({ arr, numberWithCommas }) => {
  const money = useSelector((state) => state.products.money);
  return (
    <ReceiptContainer>
      <ReceiptHeader>Your Receipt</ReceiptHeader>
      <ReceiptPaper>
        <ReceiptList arr={arr} numberWithCommas={numberWithCommas} />
        <Line />
        <ReceiptItem>
          <ReceipItemText style={{ width: "50%", textAlign: "center" }}>
            Total
          </ReceipItemText>
          <ReceipItemText style={{ width: "50%", textAlign: "center" }}>
            ${numberWithCommas(187000000000 - money)}
          </ReceipItemText>
        </ReceiptItem>
      </ReceiptPaper>
    </ReceiptContainer>
  );
};

export default Receipt;
