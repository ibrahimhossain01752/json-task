import React from 'react';
import './Paint.css';

const Paint = ({paint}) => {
    const {img1,name,dis1,dis2,dis3,img2,img3,img4} = paint;
    return (
       <div class="container">
         <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col-md-6">
    <div class="h-100">
      {/* <img src="..." class="card-img-top" alt="..."> */}
      <div class="card-body">
        <p class="card-title text-start ">In this 5 day-class we will explore artists Monet, Matisse, Van <span class="span-two">Gogh, among others and then recreate paintings using crayon</span> <span class="span-three">and watercolor. Students will have fun learning about the artists</span> <span class="span-four">& creating their own at inspired by their work.</span></p>
       
      </div>
      <div class="section">
        <img src={img1} class="card-img-top images-1" alt="..."/>
        <p class="name">{name}</p>
      </div>
      <div class="mb-5">
        <p class="star-para"><i class="bi bi-star-fill star-one"></i><i class="bi bi-star-fill star-one"></i><i class="bi bi-star-fill star-one"></i><i class="bi bi-star-fill star-one"></i><i class="bi bi-star-fill star-one"></i> {dis1}</p>
        <p class="star-para1"><i class="bi bi-star-fill star-one"></i><i class="bi bi-star-fill star-one"></i><i class="bi bi-star-fill star-one"></i><i class="bi bi-star-fill star-one"></i><i class="bi bi-star-fill star-one"></i> {dis2}</p>
        <p class="dis3">{dis3}</p>
        <p class="para-last"><span><button class="button">See Class Schedule<i class="bi bi-chevron-right"></i></button></span> <span class="love"><i class="bi bi-heart lov"></i> Save</span><span class="share"><i class="fa-solid fa-share love-one"></i> Share</span></p>
      </div>
     
    </div>
  </div>
  <div class="col-md-3">
    <div class="card">
      <img src={img2} class="card-img-top img2" alt="..."/>
      
     
    </div>
  </div>
  <div class="col-md-3">
    <div class=" ">
      <img src={img3} class="card-img-top img3" alt="..."/>
      <img src={img4} class="card-img-top mt-2 img3" alt="..."/>
      
    </div>
  </div>
</div>
       </div>
    );
};

export default Paint;