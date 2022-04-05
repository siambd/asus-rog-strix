import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs-container">
      <h1>What is context api?</h1>
      <p>
        The react context api is a way for effectively produce global variable
        for react app.Context Api store data that does not change
        frequantly.Context api used for global data becaues it is not change
        frequently.Depending on our projects requirments this is enough for our
        needs.
      </p>

      <h1>What is Semantic tag?</h1>
      <p>
        Ans: Semantic tag have meaningful name which tells us about the type of
        content.It is easy to identify various parts of webpage at a glance.it
        is very important for developer and users.Using semantic tags we can add
        more hooks for styleing.
      </p>
    </div>
  );
};

export default Blogs;
