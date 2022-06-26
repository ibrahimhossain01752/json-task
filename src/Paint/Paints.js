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
        <h1>Summer Art Camp! 5 Days of <span class="mob-one">Artists and Painting Monet,</span> <span class="first-span">Van Gosh, Matisse, & More</span></h1>
        <p class="para-one">Multi-Day Course a <i class="bi bi-question-circle"></i></p>
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