import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs-container">
      <div className=" blog-box">
      <h1> Q.1: What is context api?</h1>
      <p> Ans: The Context API is used to share the data with multiple components, without having to pass data through props manually.
       The React Context API allows us to produce the global data and share it across the application. Context API consists of three major parts which are Create Context , Provider and Consumer. 
      </p>
      </div>
      <div className="blog-box">
      <h1>Q.2: What is Semantic tag?</h1>
      <p>
        Ans: Semantic tag have meaningful name which tells us about the type of
        content.It is easy to identify various parts of webpage at a glance.it
        is very important for developer and users.Using semantic tags we can add
        more hooks for styleing.
      </p>

      </div>
      

      
    </div>
  );
};

export default Blogs;
