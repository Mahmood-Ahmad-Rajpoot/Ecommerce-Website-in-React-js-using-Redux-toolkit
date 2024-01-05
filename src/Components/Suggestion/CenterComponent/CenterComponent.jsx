import React from "react";
import './CenterComponent.css'
const CenterComponent = ({image,paragraph,heading}) => {
  return (
    <div
    className="ImageAndParagraphDiv  
 text-center w-100 px-5 mt-5 d-flex
  flex-column justify-content-center "
  >
    <img
      className="align-self-center"
      src={image}
      alt=" "
      height={"100%"}
      width={"50%"}
    />
    <h1>{heading}</h1>
    <p>{paragraph}</p>
  </div>
  );
};

export default CenterComponent;
