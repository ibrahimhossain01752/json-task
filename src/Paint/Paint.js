import React from 'react';

const Paint = ({paint}) => {
    const {dis,img1,name,dis1,dis2,dis3,img2,img3} = paint;
    return (
        <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      {/* <img src="..." class="card-img-top" alt="..."> */}
      <div class="card-body">
        <h5 class="card-title">{dis}</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
     
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={img2} class="card-img-top" alt="..."/>
      
     
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={img3} class="card-img-top" alt="..."/>
      
      
    </div>
  </div>
</div>
    );
};

export default Paint;