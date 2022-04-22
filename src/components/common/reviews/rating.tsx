import { useState } from "react";
import "./rating.css"
export const StarRating = (props:any) => {
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating" style={{"marginLeft":"2px"}}>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || props.rating) ? "on" : "off"}
            onClick={() => props.rateHndling(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(props.rating)}
          >
            <span className="star" style={{ fontSize: "2rem" }}>
              &#9733;
            </span>
          </button>
        );
      })}
    </div>
  );
};