import React, { useState } from "react";
import Styles from "./ShopPage.module.css";

// data

const SecondComponent = ({ images }) => {
  // logic
  const [state, setState] = useState(0);

  return (
    <div
      className={
        Styles.SecondMaindiv +
        " w-100 d-flex flex-column "
      }
    >
      <div className={Styles.ImageControlDiv}>
        <img className="rounded-2" src={images[state]} />
      </div>
      <div
        className={
          Styles.SliderControlDiv +
          " w-100 d-flex p-2 gap-1 justify-content-center "
        }
      >
        {images.map((img, ind) => {
          let focused = {};
          if (ind === state) {
            focused = { backgroundColor: "#FA7189" };
          }
          return (
            <button
              type="button"
              style={focused}
              onClick={() => setState(ind)}
              className={Styles.circlebtn}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SecondComponent;
