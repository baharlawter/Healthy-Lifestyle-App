import React, { useState } from "react";
import "./Footer.css";

function Footer() {
  const [submitted, setSubmitted] = useState(false);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setSubmitted(true);
      setComment("");
    }
  };

  return (
    <div className="contactDiv">
      <h3>Leave Your Comments Below</h3>

      <form onSubmit={handleSubmit}>
        <textarea
          id="comments"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Comments"
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <p className="thankYouNote">✅ Thank you for your comment!</p>
      )}

      <div>
        <h3>Please Contact Us</h3>
        <p>123 Sloan lane, Las Vegas, NV, 66677</p>
        <p>Phone Number: 123-123-123</p>
        <p>Email: example@gmail.com</p>
      </div>
    </div>
  );
}

export default Footer;
