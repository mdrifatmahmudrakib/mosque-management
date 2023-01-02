import React, { useEffect, useState } from 'react';

const Experts = () => {
    const [experts, setExperts] = useState([])
    useEffect(() => {
        fetch('https://mosque-management-server.vercel.app/experts')
            .then(res => res.json())
            .then(data => setExperts(data))
    }, [])
    return [experts, setExperts]
};
export default Experts;