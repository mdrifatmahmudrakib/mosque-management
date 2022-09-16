import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const HelpDetails = () => {
    const { campaignId } = useParams();

    const [cause, setCauses] = useState({})

    useEffect(() => {

        const url = `http://localhost:5000/campaign/${campaignId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCauses(data))
    }, [])
    const { img, name, Goal, short_description } = cause;
    return (
        <div>
            {short_description}<br></br>
            {img}
            {name}
            {Goal}

        </div>
    );
};

export default HelpDetails;