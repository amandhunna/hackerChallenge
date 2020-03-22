import React from "react";
import helper from "../lib/helper";

const PersonalData = ({ data, key }) => {
  return (
    <div className="personal-data" key={key}>
      <p>
        <strong>Account No:</strong>
        <span>{helper.getKeyValue(data, "accountNo")}</span>
      </p>
      <p>
        <strong>Date:</strong>
        <span>{helper.getKeyValue(data, " date")}</span>
      </p>
      <p>
        <strong>Transaction Details:</strong>
        <span>{helper.getKeyValue(data, "transactionDetails")}</span>
      </p>
      <p>
        <strong>Value Date:</strong>
        <span>{helper.getKeyValue(data, "valueDate")}</span>
      </p>
      <p>
        <strong>Withdrawal AMT:</strong>
        <span>{helper.getKeyValue(data, "withdrawalAMT")}</span>
      </p>
      <p>
        <strong>Deposit AMT:</strong>
        <span>{helper.getKeyValue(data, "depositAMT")}</span>
      </p>
      <p>
        <strong>Balance AMT:</strong>
        <span>{helper.getKeyValue(data, "balanceAMT")}</span>
      </p>
    </div>
  );
};

export default PersonalData;
