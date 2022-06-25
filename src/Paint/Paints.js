import React, { useEffect, useState } from 'react';
import Paint from './Paint';
import './Paints.css';

const Paints = () => {
    const [paints, setPaints] = useState([]);
    useEffect(() => {
        fetch('artist.json')
        .then(res => res.json())
        .then(data => setPaints(data))
    },[])
    return (
        <div >
        <h1>Summer Art Camp! 5 Days of Artists and Painting Monet, <span class="first-span">Van Gosh, Matisse, & More</span></h1>
        <p>Multi-Day Course a<span>&#63;</span></p>
        <div>
            {
                paints.map(paint => <Paint
                key={paint}
                paint={paint}
                ></Paint>)
            }
        </div>
    </div>
    );
};

export default Paints;