import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import AllEvents from '../../../hooks/AllEvents';

const EventDetails = () => {

    // const { id } = useParams();
    const { id } = useParams();
    const [event, setEvent] = useState({});

    // const [event] = AllEvents();

    useEffect(() => {
        const url = `http://localhost:5000/event/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setEvent(data));
    }, [id])
    const { name } = event;
    // useEffect(() => {
    //     const url = `http://localhost:5000/events/${id}`;
    //     fetch(url)

    //         .then((res) => res.json())
    //         .then((data) => console.log(setEvent));
    // }, [id]);

    // const { img, name, Raised, Goal, short_description } = event;
    return (
        <div>
            {name}
        </div>
    );
};

export default EventDetails;