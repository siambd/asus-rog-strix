import React from "react";
import { Link } from "react-router-dom";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";
import Reviews from "../Reviews/Reviews";

import "./Home.css";

const Home = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div className="home-container">
      <div className="text-img-conatiner">
        <div className="text-container">
          <h1 className="headphone-title">BOOK YOUR ROG ROG STRIX TODAY <i class="fa-solid fa-house-laptop"></i></h1>
          <p>
          <strong>Asus ROG strix</strong> gaming laptops are changing every year. The early days of mobile gaming were largely desktop replacements — clunky chassis, multiple power bricks, and RGB lighting galore. But the top contenders now are different. Manufacturers are finally putting powerful specs in sleeker, more portable, and more professional builds. They have excellent, fast refreshing screens that are necessary for a great gaming experience. 
          </p>
          <button className="liveDemo-btn">Live Demo</button>
        </div>
        <div className="image-container">
          <img src="./strix.png" alt="" />
        </div>
      </div>
      <h1>Customer Reviews (3)</h1>
      <div className="home-reviews-container">
        {reviews.slice(0, 3).map((review) => (
          <Review review={review}></Review>
        ))}
      </div>
      <Link to="/review">
        <button className="review-btn">See all Reviews</button>
      </Link>
    </div>
  );
};

export default Home;
