import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function TextForm() {
  const [text, setText] = useState("I want to say that :- ");
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            <h4 style={{ marginTop: "2vh" }}>Submit Your FeedBack Here</h4>
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={18}
            defaultValue={""}
            value={text}
            onChange={handleOnChange}
            placeholder="Enter Your Thoughts Here"
            style={{ border: "1px solid black" }}
          />
        </div>
        <Link to={"/"} >
        <button type="button" className="btn btn-primary">
          Submit
        </button>
        </Link>
      </div>
    </div>
  );
}
