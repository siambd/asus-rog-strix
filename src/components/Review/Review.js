import React from "react";
import "./review.css";

const Review = (props) => {
  const { name, body, ratings, image } = props.review;
  return (
    <div className="review-container">
      <div>
        <img src={image} alt="" />
        <h3>{name}</h3>
        <p>{body}</p>
        <h3>Ratings: {ratings}</h3>
      </div>
    </div>
  );
};

export default Review;
