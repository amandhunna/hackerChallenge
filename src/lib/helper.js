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
        console.log(data, key)
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

        return data[pascalKey];
    }
}

export default helper;
