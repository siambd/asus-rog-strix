import React from "react";
import { Link } from "react-router-dom";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReiews] = useReviews([]);
  console.log(reviews);
  return (
    <div>
      <div className="reviews-container">
        {reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
      <Link to="review">
        <button className="review-btn">See all reviews</button>
      </Link>
    </div>
  );
};

export default Reviews;
