import React, { useState, useEffect } from 'react'
import helper from "../../lib/helper";
import { PersonalData, Pagination } from "../../component"

const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [hasError, setError] = useState(false);
    const [pageNumber, setStatePageNumber] = useState(0);

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
        <div className="dashboard-main">
            <div className="data">{helper.slice([...data], pageNumber).map((data, index) => <PersonalData data={data} key={index} />)}
            </div>
            <Pagination pageNumber={pageNumber} setStatePageNumber={setStatePageNumber} />
        </div>)
}

export default Dashboard;
