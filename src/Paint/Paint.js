import React, { useEffect, useState } from 'react';
import './Paint.css';

const Paint = () => {
    const [paint, setPaint] = useState([]);
    useEffect(() => {
        fetch('artist.json')
        .then(res => res.json())
        .then(data => setPaint(data))
    },[])
    return (
        <div>
            <h1>Summer Art Camp! 5 Days of Artists and Painting Monet, <span class="first-span">Van Gosh, Matisse, & More</span></h1>
            <p>Multi-Day Course a<span>&#63;</span></p>
        </div>
    );
};

export default Paint;