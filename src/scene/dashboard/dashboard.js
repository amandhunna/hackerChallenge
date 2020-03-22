import React, { useState, useEffect } from 'react'
import helper from "../../lib/helper";

const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [hasError, setError] = useState(false);

    const getData = async () => {
        try {
            const data = await helper.getData();
            setData(data);
            setLoading(false)
        }
        catch (error) {
            setLoading(false);
            setError(true);
        }
    }
    useEffect(() => {
        getData();
    }, [])


    if (loading) return <div>Loading...</div>
    if (!data) return <div> Have no data for this search</div>
    if (hasError) return <div>Something went wrong. Please retry after some time.</div>
    return (
        <div className="data">{data.map(data => (<div className="personal-data">
            <p><strong>Account No:</strong><span>{helper.getKeyValue(data, "accountNo")}</span></p>
            <p><strong>Date:</strong><span>{helper.getKeyValue(data, " date")}</span></p>
            <p><strong>Transaction Details:</strong><span>{helper.getKeyValue(data, "transactionDetails")}</span></p>
            <p><strong>Value Date:</strong><span>{helper.getKeyValue(data, "valueDate")}</span></p>
            <p><strong>Withdrawal AMT:</strong><span>{helper.getKeyValue(data, "withdrawalAMT")}</span></p>
            <p><strong>Deposit AMT:</strong><span>{helper.getKeyValue(data, "depositAMT")}</span></p>
            <p><strong>Balance AMT:</strong><span>{helper.getKeyValue(data, "balanceAMT")}</span></p>

        </div>))}

        </div>
    )
}

export default Dashboard;
