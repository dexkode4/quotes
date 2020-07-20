import React from "react";

export const Quote = ({ quote, author }) => (
  <div className="quote">
    <h1 className="text">
      {" "}
      <i class="fa fa-quote-left"></i>
      {quote}
    </h1>
    <h3 className="author">-{author}</h3>
  </div>
);
