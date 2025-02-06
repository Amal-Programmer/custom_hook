import React from "react";
import UseFetch from "./UseFetch";
import './FetchData.css'

function FetchYogaData() {
    const [data] = UseFetch('https://api.npoint.io/4459a9a10e43812e1152');
    console.log(data);
    return(
        <>
        <div>
            <h1 className='usefetch_heading'>Fetching Yoga Data</h1>
            <ul className="list_data_main">
            {data && data.map(value=>(
                <>
                <li className="list_data">
                   <h3>{value.name}</h3>
                   <p><strong>Benefits:</strong>{value.benefits}</p>
                   <p><strong>Time Duration:</strong>{value.time_duration}</p>
                </li> 
                </>
            ))
            };

            </ul> 

        </div>
        </>
    )

}
export default FetchYogaData;