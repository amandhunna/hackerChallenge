import config from "../config";
const axios = require('axios');

const { baseURL } = config;

const helper = {
    getData: async () => {
        try {
            const response = await axios.get(baseURL);
            return response.data;
        }
        catch (error) {
            console.log("error in get request: ", error);
            return [];
        }
    },
    getKeyValue: (data, key) => {
        if (!data || !key) return null;
        let pascalKey = "";
        switch (key) {
            case "accountNo": {
                pascalKey = "Account No";
                break;
            }
            case "date": {
                pascalKey = "Date";
                break;
            }
            case "transactionDetail": {
                pascalKey = "Transaction Details";
                break;
            }
            case "valueDate": {
                pascalKey = "Value Date";
                break;
            }
            case "withdrawalAMT": {
                pascalKey = "Withdrawal AMT";
                break;
            }
            case "depositAMT": {
                pascalKey = "Deposit AMT";
                break;
            }
            case "balanceAMT": {
                pascalKey = "Balance AMT";
                break;
            }
            default: { pascalKey = ""; }
        }
        const value = data[pascalKey] || typeof data[pascalKey] === "number" ? data[pascalKey] : "No data"
        return value;
    },
    slice: (arr, index) => {
        if (Array.isArray(arr)) {
            return arr.slice(index * 10, index * 10 + 10);
        }
        return [];
    }
}

export default helper;
