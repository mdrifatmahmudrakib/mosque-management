import React, { useEffect, useState } from 'react';

const AllCampaigns = () => {
    const [causes, setCauses] = useState([])

    useEffect(() => {
        fetch('https://mosque-management-server.vercel.app/campaigns')
            .then(res => res.json())
            .then(data => setCauses(data))
    }, [])
    return [causes, setCauses]
};

export default AllCampaigns;